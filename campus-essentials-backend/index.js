import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import pg, { Client } from "pg";
import bcrypt from "bcrypt";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
// import { Pool } from "pg";
// const pool=pg
const app = express();
const PORT = process.env.PORT || 3000;

dotenv.config();
const saltRounds = 10;
app.use(
  cors({
    origin: ["http://localhost:5173", "https://campus-essentials.vercel.app/"],
  }),
);
app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());
const db = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, // required for Supabase
});
db.connect();
//Backend sending requests to the paystack API
app.get("/", async (req, res) => {
  const result = await db.query("SELECT * FROM users");
  if (result.rows.length > 0) {
    res.send("It works!");
  } else {
    res.send("Doesnt work");
  }
});
app.post("/checkout", async (req, res) => {
  try {
    const { email, amount } = req.body;
    const paystackResponse = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          amount: amount,
          callback_url: `${process.env.FRONTEND_URL}/payment-callback`,
        }),
      },
    );

    const data = await paystackResponse.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
app.post("/verify/payment", async (req, res) => {
  try {
    const { reference } = req.body;
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      },
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
app.get("/categories", (req, res) => {
  console.log(req.isAuthenticated(), req.user);
  if (req.isAuthenticated()) {
    res.json({ sucess: true, user: req.user });
  } else {
    res.redirect("/login");
  }
});
app.post("/register", async (req, res, cb) => {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
    } else {
      //hashing the password and saving it in the database
      bcrypt.hash(password, saltRounds, async (err, hash) => {
        if (err) {
          console.error("Error hashing password:", err);
        } else {
          //console.log("Hashed Password:", hash);
          const result = await db.query(
            "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email,password",
            [email, hash],
          );
          //console.log(result.rows);
          const user = result.rows[0];
          req.login(user, (err) => {
            if (err) {
              cb(err);
            }
            res.json({ success: true });
          });
        }
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!user)
      return res.status(400).json({ error: info?.message || "Login Failed" });

    req.login(user, (err) => {
      if (err) return next(err);
      res.json({ success: true, userEmail: user.email });
    });
  })(req, res, next);
});
passport.use(
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, cb) => {
      try {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
          email,
        ]);
        if (result.rows.length > 0) {
          const user = result.rows[0];
          const storedHashedPassword = user.password;
          bcrypt.compare(password, storedHashedPassword, (err, result) => {
            if (err) {
              console.error("Error comparing passwords:", err);
              return cb(err);
            } else {
              if (result) {
                //passing users into session object

                return cb(null, user);
              } else {
                return cb(null, false, { message: "Incorrect password" });
              }
            }
          });
        } else {
          cb("User not found");
        }
      } catch (err) {
        cb(err);
      }
    },
  ),
);
passport.serializeUser((user, cb) => {
  cb(null, user);
});
passport.deserializeUser((user, cb) => {
  cb(null, user);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
