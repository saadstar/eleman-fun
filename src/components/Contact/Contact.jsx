import { RiFacebookBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <section id="contact">
        <h1>اتصل بنا</h1>        
        <p>
         
رضاؤكم هدفنا.. لذا نسعى للوصول اليكم في اي وقت و في كل مكان.

للاستفسارات والشكاوي تواصل معنا
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3>لنتواصل الان!</h3>
              <div>
                <p>الهاتف</p>
                <span>+20 01274404411</span>
              </div>
              <div>
                <p>الارضي</p>
                <span>013 3232442</span>
              </div>
              <div>
                <p>المحمول</p>
                <span>01113299942</span>
              </div>
              <div>
                <p>البريد الالكتروني</p>
                <span>support@eleaman.com</span>
              </div>
              <div>
                <p>العنوان</p>
                <span>شارع حجاج الفلل - بنها - القليوبيه</span>
              </div>
              <ul>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
                <Link to={"/facebook"} target="_blank">
                  <RiFacebookBoxLine />
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
