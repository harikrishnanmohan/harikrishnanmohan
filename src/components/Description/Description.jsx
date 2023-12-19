import Reat from "react";

import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";

import Intro from "../Introduction/Intro/Intro";
import ShortAbout from "../Introduction/ShortAbout/ShortAbout";

import "./Description.scss";

const Description = () => {
  return (
    <div className="description__container">
      <div className="description">
        <Intro />
        <ShortAbout />
      </div>
    </div>
  );
};

export default Description;
