import { useState } from "react";
interface CartItemProps {
  id:string
  name: string;
  description:string;
  price: number;
  imgURL: string;
  alt: string;
  quantity:string;
  inStock:boolean;
  HandleQuantity:(itemId:string,newQuantity:number)=>void;
}

//this function renders items
function CartItem(props: CartItemProps) {
  const[quantity,setQuantity]=useState(1)
  function handleClick(){
    props.HandleQuantity(props.id,quantity)
    console.log(props.HandleQuantity(props.id,quantity))
  }
  return (
    <>
      <div className="cart-item">
        <div className="img-holder">
          <img src={props.imgURL} alt={props.alt} />
        </div>
        <div>
          <div>
            <p>{props.name}</p>
            <p className="quantity" >x
              <input onChange={(event)=>{setQuantity(parseInt(event.target.value))}} placeholder="1" type="number" value={quantity} />
              <button onClick={handleClick} >
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
              </button>
              </p>
          </div>
          <p>₦ {props.price}</p>
        </div>
      </div>
      <p></p>
    </>
  );
}
export default CartItem;
