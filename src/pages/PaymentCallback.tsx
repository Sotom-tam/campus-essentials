import { useEffect, useState } from "react";
const PaymentCallback = () => {
  const [message, setMessage] = useState("Verifying Payment...");
  useEffect(() => {
    const verifyPayment = async () => {
      //getting the reference from the url (query parameter)
      const parameters = new URLSearchParams(window.location.search);
      const reference = parameters.get("reference");
      console.log("sending request" + reference);
      const response = await fetch("http://localhost:3000/verify/payment", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          reference,
        }),
      });
      const data = await response.json();
      console.log(data.message);
      setMessage(data.message);
    };
    verifyPayment();
  }, []);

  return (
    <>
      <h2>{message}</h2>
    </>
  );
};

export default PaymentCallback;
