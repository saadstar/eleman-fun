import { villas } from "../villas";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopVillas = () => {
  return (
    <section id="topVillas">
      <h1>اشهر العمليات التي انجزنها</h1>
      <p>
      نعرض قائمه بها اشهر العمليات التي انجزنها في الفترات السابقه و منها عمليات شبكات مياه وشبكات صرف صحي والمزيد والمزيد
      </p>
      <div className="villasContainer">
        {villas.slice(0,3).map((element) => {
          return (
              <Link to={`/villa/${element.id}`} className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
                <div className="specifications">
                  <div className="spec">
                    <IoIosPeople />
                    <span>{element.guests}</span>
                    مهندس
                  </div>
                  <div className="spec">
                    <FaBed />
                    <span>{element.bedrooms}</span>
                    غرفه
                  </div>
                  <div className="spec">
                    <BiArea />
                    <span>{element.squareMeter}</span>
                    مساحه
                  </div>
                  <div className="spec">
                    <FaBath />
                    <span>{element.bathrooms}</span>
                   مطابق
                  </div>
                </div>
                <div className="badge">
                  سعر مميز
                </div>
              </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TopVillas;
