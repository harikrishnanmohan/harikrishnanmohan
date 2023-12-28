import { useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import { PortfolioContext } from "../../../context/portfolio-context";

import color_two from "../../../assets/color_two.jpg";
import white_arrow_with_outline from "../../../assets/white_arrow_with_outline.png";

gsap.registerPlugin(ScrollTrigger);

import "./ShortAbout.scss";

const ShortAbout = () => {
  const { main } = useContext(PortfolioContext);
  const component = useRef(null);

  useLayoutEffect(() => {
    const text1 = new SplitType(".shortAbout__content__bio_content_partOne", {
      types: "chars",
    });
    const text2 = new SplitType(".shortAbout__content__bio_content_partTwo", {
      types: "chars",
    });
    let ctx = gsap.context(() => {
      gsap.from([text1.chars, text2.chars], {
        scrollTrigger: {
          trigger: ".char",
          start: "top 85%",
          end: "top 35%",
          markers: false,
          scrub: true,
        },
        opacity: 0.2,
        stagger: 0.1,
        duration: 1,
      });

      return () => ctx.revert();
    }, component);
  });

  return (
    <div className="shortAbout__container" ref={component}>
      <div className="shortAbout">
        <div className="shortAbout__profilePic">
          <img
            className="shortAbout__profilePic_pic"
            src={color_two}
            alt="profile pic"
          />
        </div>
        <div className="shortAbout__content">
          <div className="shortAbout__content__bio">
            <div className="shortAbout__content__bio_content">
              <p
                className="shortAbout__content__bio_content_partOne"
                id="shortBioPartOne"
              >
                {main?.shortBioPartOne}
              </p>
              <p className="shortAbout__content__bio_content_partTwo">
                {main?.shortBioPartTwo}
              </p>
            </div>
          </div>
          <div className="shortAbout__content__learnMore">
            <div className="shortAbout__content__learnMore_content">
              <img
                className="shortAbout__content__learnMore_arrow"
                src={white_arrow_with_outline}
                alt="right arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShortAbout;
