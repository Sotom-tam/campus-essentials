import SummaryItem from "./SummaryItem";
import CartItem from "./CartItem";
import PayButton from "./PaymentButton";
import { useState } from "react";
interface Cart{
        id:string
        name:string
        description:string
        price:number
        imgURL:string
        alt:string
        quantity:string
        inStock:boolean
}
interface CartProps{
  cart:Cart[]
  userEmail:string
}

function PaymentForm({cart,userEmail}:CartProps){
  const [quantity,setQuantity]=useState(1)
  function HandleQuantity(itemId:string,newQuantity:number){
    const itemToChange=cart.find((item)=>item.id==itemId)
    if(itemToChange===undefined){
      console.error("Item not found")
      return;
    }
    setQuantity(newQuantity)
    itemToChange.quantity=quantity.toString()  
    return newQuantity
  }

  const Subtotal = cart.reduce((sum, item) => {
  return sum + item.price*quantity;
}, 0);
    return <>
    <div className="cart-card">
      <h2>Your Cart</h2>
      <div className="item-holder">
        {cart.map((item )=>{
          return <CartItem {...item} HandleQuantity={HandleQuantity}/>
        })}
      </div>
      <div className="summary">
        <SummaryItem name="Subtotal" value={Subtotal} />
      </div>
      <PayButton amount={Subtotal} userEmail={userEmail} />
    </div></>
}
export default PaymentForm