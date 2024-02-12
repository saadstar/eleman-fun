import { SiWeightsandbiases } from "react-icons/si";
import { MdFitnessCenter, MdElectricCar, MdOutlinePets } from "react-icons/md";
import { FaSailboat } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";

const OurSpecialities = () => {
  const specialities = [
    {
      id: 1,
      title: "شبكات المياه والصرف",
      icon: <SiWeightsandbiases />,
      subText: "شاهد"
    },
    {
      id: 2,
      title: "محطات المياه و الصرف",
      icon: <MdOutlinePets />,
      subText: "شاهد"
    },
    {
      id: 3,
      title: "الابار",
      icon: <MdElectricCar />,
      subText: "شاهد"
    },
    {
      id: 4,
      title: "البناء والتشطيبات الكامله",
      icon: <MdFitnessCenter />,
      subText: "شاهد"
    },
    {
      id: 5,
      title: "عمليات الصرف الرئيسيه",
      icon: <FaSailboat />,
      subText: "شاهد"
    },
  ];
  return (
    <>
      <section id="ourSpecialities">
        <h1>متخصصون في المشاريع </h1>
        <div className="specialities_container">
          {
            specialities.map(element=>{
              return(
                <div className="card" key={element.id}>
                    <div className="icon">{element.icon}</div>
                    <div className="title_text">{element.title}</div>
                    <div className="subtitle_text">{element.subText} <FaLongArrowAltRight/></div>
                </div>
              )
            })
          }
        </div>
      </section>
    </>
  );
};

export default OurSpecialities;
