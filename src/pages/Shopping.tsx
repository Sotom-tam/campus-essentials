import { useState } from 'react'
import categories from '../categories'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Checkout from './Checkout'
import ProductsCategoryHolder from '../components/ProductsCategoryHolder'
import '../style.css'
import { useLocation } from "react-router-dom";
interface Item {
    id: string
    name: string
    description: string
    price: number
    imgURL: string
    alt: string
    inStock: boolean
}
function ShoppingPage() {
  const location = useLocation();
  const email = location.state?.email;
  const [cart,setCart]=useState<Item[]>([])
 
      function ToCart(itemId:string){
        const ItemCategory=categories.find((category)=>category.id===itemId.split("-")[0])
        if(ItemCategory===undefined){
            console.error("category not found")
            return;
        }
        const Item=ItemCategory.items.find((item)=> item.id===itemId)
        if(Item===undefined){
            console.error("Item not found")
            return;
        }
        console.log(cart.length)
        setCart(prev => [...prev, Item])
    }
  return (
    <>
      <NavBar cart={cart} />
      <div className="main-container">
      <ProductsCategoryHolder ToCart={ToCart}/>
      <Checkout cart={cart} userEmail={email}/>
      </div>
      <Footer/>
    </>
  )
}

export default ShoppingPage
