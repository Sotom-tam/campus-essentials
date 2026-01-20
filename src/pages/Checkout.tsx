import PaymentForm from "../components/PaymentForm";
import "../style.css"
interface Cart{
        id:string
        name:string
        description:string
        price:number
        imgURL:string
        alt:string
        inStock:boolean
}
interface CartProps{
  cart:Cart[]
  userEmail:string
}
function Checkout({cart,userEmail}:CartProps) {
  return (
      <PaymentForm userEmail={userEmail} cart={cart}/>
    
  );
}
export default Checkout;
