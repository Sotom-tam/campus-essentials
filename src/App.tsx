import {Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import ShoppingPage from './pages/Shopping'
import PaymentCallback from "./pages/PaymentCallback";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "../src/style.css"
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/categories" element={<ShoppingPage/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route  path="/payment-callback" element={<PaymentCallback/>} ></Route>
    </Routes>
   
  )
}

export default App
