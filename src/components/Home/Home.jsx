import HeroSection from "../../SubComponents/HeroSection";
import TopVillas from "../../SubComponents/TopVillas";
import Regions from "../../SubComponents/Regions";
import OurSpecialities from "../../SubComponents/OurSpecialities";
import Host from "../../SubComponents/Host";
import About from "../../SubComponents/About";
import Contact from "../../SubComponents/Contact";
import { Location } from "../../SubComponents/Location";


const Home = () => {
  return (
    <>
      <article className="page">
        <HeroSection/>
        <TopVillas />
        <Location />
        <Regions/>
        <OurSpecialities/>
        <Host/>
        <About/>
        <Contact/>
      </article>
    </>
  );
};

export default Home;
