import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>الايمان للمقاولات </h4>
          <p>
          شركه رائده في مجال احلال و تمديد ودعم شبكات الصرف و خطوط المياه 
          </p>
          <ul>
            <li>
              <Link to={"/"}>الرئيسيه</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>الشروط و الاحكام</Link>
            </li>
            <li>
              <Link to={"/"}>اتصل بنا </Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>اتصل بنا علي : </h4>
          <p>+20 01274404411</p>
          <p>zk@gmail.com</p>
          <p>© All Rights Reserved By saadDevelopment.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
