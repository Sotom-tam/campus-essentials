import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function Login(){
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        console.log("Submitting:",email,password)
        e.preventDefault()
        const response =await fetch("http://localhost:3000/login",{
            method:"POST",
            headers:{ "Content-type": "application/json" },
            body:JSON.stringify({
                email:email,
                password:password
            })
        }) 
        const data= await response.json()
        console.log(data)
        if(data.success){
            navigate("/categories")
        }
    }
    return<div className="main-container">
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <p>Welcome Back, Please Login</p>
         <div className="form-group">
        <label htmlFor="email" >Email:</label>
        <input onChange={(e)=>setEmail(e.target.value)} name="email"type="email" placeholder="email" value={email}/>
        </div>
        <div className="form-group">
        <label htmlFor="password" >Password:</label>
        <input onChange={(e)=>setPassword(e.target.value)} name="password"type="password" placeholder="password" value={password} />
        </div>
        <button className="btn" type="submit">Login</button>
        <p>Don't Have an Account? <Link to="/register">Register</Link></p>
    </form>
    </div>
}
export default Login