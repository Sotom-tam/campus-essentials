interface CartItemProps {
  id:string
  name: string;
  description:string;
  price: number;
  imgURL: string;
  alt: string;
  inStock:boolean;
}

//this function renders items
function CartItem(props: CartItemProps) {
  return (
    <>
      <div className="cart-item">
        <div className="img-holder">
          <img src={props.imgURL} alt={props.alt} />
        </div>
        <div>
          <div>
            <p>{props.name}</p>
            <p className="quantity">x 1</p>
          </div>
          <p>₦ {props.price}</p>
        </div>
      </div>
      <p></p>
    </>
  );
}
export default CartItem;
