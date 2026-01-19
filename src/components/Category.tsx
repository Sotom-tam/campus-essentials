interface CategoryProps{
    id:string
    name:string
    imgURL:string
    items:{
        id:string
        name:string
        description:string
        price:number
        imgURL:string
        alt:string
        inStock:boolean
    }[]
}
function Category(props:CategoryProps){
    return<>
        <div className="categories-card">
            <div className="img-holder">
                <img src={props.imgURL} alt="Categories Images" />
            </div>
            <div className="holder" >
                <p>{props.name}</p>
                <button className="btn" >Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                </button>
            </div>
        </div>
    </>
}
export default Category