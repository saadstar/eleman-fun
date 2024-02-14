import { Link } from "react-router-dom";
import { RiFacebookBoxLine  } from "react-icons/ri";
const SubContact = () => {
  return (
    <>
      <section id="contact_Mini">
        <div className="super_container">
        <div className="container_1">
          <h3>لنبدأ التواصل الان</h3>
          <div>
            <p>الهاتف</p>
            <span>+20 012274404411</span>
          </div>
          <div>
            <p>البريد الالكتروني</p>
            <span>support@eleaman.com</span>
          </div>
          <div>
            <p>العنوان</p>
            <span>
شارع حجاج الفلل - بنها - القليوبيه</span>
          </div>
          <ul>
          <a href="facebook.com" target="_blank"><RiFacebookBoxLine/></a>
          <Link to={"/facebook.com"} target="_blank"><RiFacebookBoxLine/></Link>
          <Link to={"/facebook.com"} target="_blank"><RiFacebookBoxLine/></Link>
        </ul>
        </div>
        
        <div className="container_2">
          <h3>نتمني ان تصلنا اخبار منك قريباّ!</h3>
          <form>
            <div>
              <input type="text" placeholder="اسمك"/>
              <input type="email" placeholder="البريد الالكتروني"/>
            </div>
            <textarea rows="4" placeholder="رسالتك ...."/>
            <button type="submit">إرسال</button>
          </form>
        </div>
        </div>
      </section>
    </>
  );
};

export default SubContact;
