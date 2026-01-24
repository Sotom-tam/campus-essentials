import heroImage from "/img/campus.webp"
import { Link } from "react-router-dom"
function HeroSection(){
    return<>
        <div className="hero-container">
            <div className="hero-text">
                <h1 className="heading">Everything you Need All in one Space!</h1>
                <p>We have all the Essentials for Student life, and they're Priced right too!</p>
                <div className="btn-grp">
                    <Link to="/login" className="btn">Shop Essentials</Link>
                    <Link to="/login" className="btn">Login</Link>
                </div>
            </div>
            <div className="hero-image-holder">                
                    <img className="hero-image" src={heroImage}/>
            </div>
        </div>
    </>
}
export default HeroSection