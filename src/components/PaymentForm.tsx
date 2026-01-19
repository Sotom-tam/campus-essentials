import SummaryItem from "./SummaryItem";
import CartItem from "./CartItem";
import PayButton from "./PaymentButton";
//import cart from "../cart";

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
function PaymentForm({cart}:CartComponentProps){
  const Subtotal = cart.reduce((sum, item) => {
    console.log(item)
  return sum + item.price;
}, 0);
    return <>
    <div className="cart-card">
      <h2>Your Cart</h2>
      <div className="item-holder">
        {cart.map((item )=>{
          return <CartItem {...item} />
        })}
      </div>
      <div className="summary">
        <SummaryItem name="Subtotal" value={Subtotal} />
      </div>
      <PayButton amount={Subtotal} />
    </div></>
}
export default PaymentForm