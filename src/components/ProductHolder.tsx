//import ProductCard from "./ProductCard"
// import categories from "../categories"
import ProductCard from "./ProductCard"
interface Items{
        id:string
        name:string
        description:string
        price:number
        imgURL:string
        alt:string
        quantity:string
        inStock:boolean
}
interface ProductHolderProps{
    items:Items[];
    ToCart:(id:string)=>void
}
function ProductHolder({items,ToCart}:ProductHolderProps){
    return (
    <div className="product-holder">
        {items.map((products)=>{
            return <>
            <div className="products">
                <ProductCard item={products} ToCart={ToCart} />
            </div>
        </> 
        })}
    </div>)
}
export default ProductHolder