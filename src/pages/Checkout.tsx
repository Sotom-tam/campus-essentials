import PaymentForm from "../components/PaymentForm";
import cart from "../cart";
import "../style.css"
console.log(cart)
interface CartProps{
        id:string
        name:string
        description:string
        price:number
        imgURL:string
        alt:string
        inStock:boolean
}
interface CartComponentProps{
  cart:CartProps[]
}
function Checkout({cart}:CartComponentProps) {
  return (
    <>
      <PaymentForm cart={cart}/>
    </>
  );
}
export default Checkout;
