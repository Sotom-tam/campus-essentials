import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
const PaymentCallback = () => {
  const API = import.meta.env.VITE_API_URL;
  const [message, setMessage] = useState(<p>Verifying Your Payment <Spinner stopColor="#B24BF3"/> </p>);
  useEffect(() => {
    const verifyPayment = async () => {
      //getting the reference from the url (query parameter)
      const parameters = new URLSearchParams(window.location.search);
      const reference = parameters.get("reference");
      console.log("sending request" + reference);
      const response = await fetch(`${API}/verify/payment`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          reference,
        }),
      });
      const data = await response.json();
      setMessage(<p>{data.message}</p>);
      
    };
    verifyPayment();
  },);

  return (
    <div className="main-container">
      <form>
      {message}
      <Link to="/categories">Shop more?</Link>
      </form>
    </div>
  );
};

export default PaymentCallback;
