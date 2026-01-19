//type declaration for response from paystack API
interface InitializeResponse {
  status: boolean;
  message: string;
  data: {
    authorization_url: string;
    access_code: string;
    reference: string;
    message: string;
  };
}
interface Props {
  amount: number;
}
const userEmail = "email@gmail.com";

const PayButton = (props: Props) => {
  //console.log(typeof (props.amount * 100).toString());
  const handlePay = async () => {
    try {
      const res = await fetch("http://localhost:3000/checkout", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          email: userEmail,
          amount: props.amount * 100, //The amount must be in kobo
        }),
      });
      const data: InitializeResponse = await res.json();
      if (!res.ok) throw new Error("Network response not ok");
      window.location.href = data.data.authorization_url;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <button className="btn pay" onClick={handlePay}>Pay Now</button>
    </>
  );
};

export default PayButton;
