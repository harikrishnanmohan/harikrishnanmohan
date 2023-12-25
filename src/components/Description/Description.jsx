import Reat from "react";

import React, { useContext, useEffect, useRef } from "react";

import Intro from "../Main/Intro/Intro";
import ShortAbout from "../Main/ShortAbout/ShortAbout";
import ShortProjects from "../Main/ShortProjects/ShortProjects";

import "./Description.scss";
import ContactMe from "../Main/ContactMe/ContactMe";

const Description = () => {
  return (
    <div className="description__container">
      <div className="description">
        <Intro />
        <ShortAbout />
        <ShortProjects />
        <ContactMe />
      </div>
    </div>
  );
};

export default Description;
