import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [navHeight, setNavHeight] = useState(false);
  const navigate = useNavigate();
  const gotoHome = ()=>{
    navigate('/');
  }
  return (
    <>
      <nav className={navHeight ? "show nav" : "nav"}>
        <img alt='logo' src='./home.png' width={"60px"} height={'60px'} style={{cursor:"pointer",borderRadius:"40%"}}/>
        <div className="logo" style={{cursor:"pointer"}} onClick={()=> gotoHome()}>شركه الأيمان للمقاولات والتوريدات</div>      
        <ul>
          <li>
            <Link to={"/protoflio"}>سابقه أعمالنا</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>من نحن</Link>
          </li>
          <li>
            <Link to={"/villas"}>العمليات</Link>
          </li>
          <li>
            <Link to={"/contact"}>اتصل بنا</Link>
          </li>
        </ul>
        <RxHamburgerMenu
          className="hamburger"
          onClick={() => setNavHeight(!navHeight)}
        />
      </nav>
    </>
  );
};

export default Navbar;
