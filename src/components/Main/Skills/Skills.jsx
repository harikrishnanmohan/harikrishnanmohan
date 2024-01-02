import { useContext, useLayoutEffect, useRef } from "react";

import gsap from "gsap";

import Heading from "../../Heading/Heading";

import { PortfolioContext } from "../../../context/portfolio-context";

import "./Skills.scss";

const Skills = () => {
  const { techStackHeading } = useContext(PortfolioContext);
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      return () => ctx.revert();
    }, component);
  });

  return (
    <div className="skills__container" ref={component}>
      <div className="skills">
        <Heading>{techStackHeading}</Heading>
        <div className="skills__intro"></div>
      </div>
    </div>
  );
};
export default Skills;
