import '../style.css'
import { Link } from 'react-router-dom';
function LandingNavBar() {
  return (
    <>
    <nav>
      <h1 className='heading gradient-text'>Campus Essentials</h1>

      <div className='nav-icon-holder'>
        <Link to="/register" className='btn'>Sign Up<svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="18px" fill="#FFFFFF"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg></Link>
      </div>
    </nav>
      
    </>
  );
}
export default LandingNavBar;
