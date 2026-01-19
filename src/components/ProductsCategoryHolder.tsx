import ProductHolder from "./ProductHolder";
import categories from "../categories";
interface Props{
    ToCart:(id:string)=>void
}
function ProductsCategoryHolder(props:Props){
    return <>
            <div className="category-holder">
            {categories.map((productCategories)=>{
                return (<>
                <div className="category">
                    <div>
                    <h2 className="heading">{productCategories.name}<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#4f3b5a"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></h2>
                    <ProductHolder key={productCategories.id} items={productCategories.items} ToCart={props.ToCart} /> 
                    </div>
                </div>
                </>)
            })}
            </div>
    </>
}
export default ProductsCategoryHolder