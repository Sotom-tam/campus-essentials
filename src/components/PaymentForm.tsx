import SummaryItem from "./SummaryItem";
import CartItem from "./CartItem";
import PayButton from "./PaymentButton";
import cart from "../cart";


function PaymentForm(){
  console.log(cart)
  const Subtotal = cart.reduce((sum, item) => {
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