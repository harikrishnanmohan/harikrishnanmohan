import { useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./ContactMe.scss";

import { PortfolioContext } from "../../../context/portfolio-context";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const { contactMe, connectWithMe, writeA, mail } =
    useContext(PortfolioContext);

  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".contactMe__content", {
        // x: window.innerWidth / 3.4,
        opacity: 1,
        scrollTrigger: {
          trigger: ".contactMe",
          start: "top bottom",
          end: "top 10%",
          scrub: true,
        },
      });
      return () => ctx.revert();
    }, component);
  }, []);

  return (
    <div className="contactMe__container" ref={component} id="contactMe">
      <div className="contactMe__content">
        <div className="contactMe">
          <div className="contactMe__contactMe">{contactMe}</div>
          <div className="contactMe__connectWithMe">{connectWithMe}</div>
          <div className="contactMe__mail">
            <p>{writeA}</p>
            <p>{mail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
