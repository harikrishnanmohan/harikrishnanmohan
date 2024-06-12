import Intro from "../Main/Intro/Intro";
import ShortAbout from "../Main/ShortAbout/ShortAbout";
import ShortProjects from "../Main/ShortProjects/ShortProjects";
import ContactMe from "../Main/ContactMe/ContactMe";
import Footer from "../Footer/Footer";

import "./Description.scss";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Description = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check if scrollToDiv state is true in the location state
    const scrollToDiv = location.state && location.state.scrollToDiv;

    if (scrollToDiv && contactRef.current) {
      // Scroll to the target div when the component mounts and scrollToDiv is true
      contactRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [location.state]);
  return (
    <div className="description__container">
      <div className="description">
        <Intro />
        <ShortAbout />
        <ShortProjects />
        <ContactMe ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
};

export default Description;
