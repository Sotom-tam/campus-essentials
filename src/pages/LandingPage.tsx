import LandingNavBar from "../components/LandingNavBar"
import Footer from "../components/Footer"
import HeroSection from "../components/HeroSection"
import CategoryHolder from "../components/CategoryHolder"
import "../assets/LandingPage.css"
function LandingPage(){
    return<>
    <div className="container">
    <LandingNavBar/>
    <HeroSection/>
    <CategoryHolder/>
    <Footer/>
    </div>
    
    </>
}
export default LandingPage