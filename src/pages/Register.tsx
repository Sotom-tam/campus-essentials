import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Spinner from "../components/Spinner";
const API = import.meta.env.VITE_API_URL;
function Register(){
   
    const [loading,setLoading]=useState(<span>Register</span>)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate=useNavigate()
    async function handleForm(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        setLoading(<Spinner/>)
        console.log("Submitting:",email,password)
        try {
            if(!API){
            console.warn("Backend not connected yet");
            }else{
            const res=await fetch(`${API}/register`,{
                method:"POST",
                headers:{ "Content-type": "application/json" },
                body:JSON.stringify({
                    email:email,
                    password:password
                })
            })
            const data=await res.json()
            console.log(data)
            if(data.success){
                navigate("/categories")
            }}
        } catch (error) {
            console.log(error)
        }
    }

    return<div className="main-container">
    <form onSubmit={handleForm} >
        <Link to="/">Campus Essentials</Link>
        <h2>Register</h2>
        <p>Welcome! Please Register by filling in your details below</p>
        <div className="form-group">
        <label htmlFor="email" >Email:</label>
        <input onChange={(e)=>setEmail(e.target.value)} name="email"type="email" placeholder="email" value={email}/>
        </div>
        <div className="form-group">
        <label htmlFor="password" >Password:</label>
        <input onChange={(e)=>setPassword(e.target.value)} name="password"type="password" placeholder="password" value={password} />
        </div>
        <button className="btn" type="submit">{loading}</button>
        <p>Already Have an Account? <Link to="/login">Login</Link></p>
    </form>
    </div>
}
export default Register