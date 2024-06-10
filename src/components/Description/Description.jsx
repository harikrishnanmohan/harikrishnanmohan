import Intro from "../Main/Intro/Intro";
import ShortAbout from "../Main/ShortAbout/ShortAbout";
import ShortProjects from "../Main/ShortProjects/ShortProjects";
import ContactMe from "../Main/ContactMe/ContactMe";
import Footer from "../Footer/Footer";

import "./Description.scss";

const Description = () => {
  return (
    <div className="description__container">
      <div className="description">
        <Intro />
        <ShortAbout />
        <ShortProjects />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default Description;
