import categories from "../categories";
import Category from "./Category";


function CategoryHolder(){
    return <>
        <div className="category-section">
        <h1>See Our Vast Selection Of items</h1>
        <div className="landing-category-holder">
            {categories.map((category)=>{
                return <>
                <Category {...category}/>
                </>
            })}
        </div>
        </div> 
        
    </>
}
export default CategoryHolder