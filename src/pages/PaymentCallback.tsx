import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
const PaymentCallback = () => {
  const API = import.meta.env.VITE_API_URL;
  const [message, setMessage] = useState(<h1>Verifying Your Payment <Spinner/></h1>);
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
      console.log(data.message);
      setMessage(<h1>{data.message}</h1>);
      
    };
    verifyPayment();
  },);

  return (
    <>
      {message}
      <Link to="/categories">Shop more?</Link>
    </>
  );
};

export default PaymentCallback;
