//import Product from "../../public/img/Beauty/Moistureriser.png"
import AddCartButton from "./AddCartItem";
interface Item {
  id:string;
  imgURL:string;
  name: string;
  description:string;
  alt: string;
  price: number;
  inStock:boolean
}
interface Itemprops{
  item:Item
  ToCart:(id:string)=>void
}
function ProductCard({item,ToCart}:Itemprops){
    return (
    <div className="product-card">
      <div className="product">
        <div className="img-holder">
          <img src={item.imgURL} />
        </div>
        <div className="product-details">
            <div>
            <p>{item.name}</p>
            <p className="subtext">{item.description}</p>
            </div>
            <div >
                <p>₦ {item.price}</p>
                <AddCartButton id={item.id.toString()} ToCart={ToCart} />
            </div>
        </div>
      </div>
    </div>)
}
export default ProductCard
