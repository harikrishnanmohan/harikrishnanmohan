import { useContext, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

import { PortfolioContext } from "../../context/portfolio-context";
import color_two from "../../assets/color_two.jpg";

import "./About.scss";

const About = () => {
  const { main } = useContext(PortfolioContext);
  const component = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      const text1 = new SplitType(
        ".about__intro__content__bio_content_partOne",
        {
          types: "words, chars",
        }
      );
      const text2 = new SplitType(
        ".about__intro__content__bio_content_partTwo",
        {
          types: "words, chars",
        }
      );
      t1.from([text1.chars, text2.chars], {
        stagger: 0.02,
        opacity: 0,
      });

      return () => ctx.revert();
    }, [component]);
  }, []);

  return (
    <div className="about__container" ref={component}>
      <div className="about">
        <div className="about__intro">
          <div className="about__intro__profilePic">
            <img
              className="about__intro__profilePic_pic"
              src={color_two}
              alt="profile pic"
            />
          </div>
          <div className="about__intro__content">
            <div className="about__intro__content__bio">
              <div className="about__intro__content__bio_content">
                <p className="about__intro__content__bio_content_partOne">
                  {main?.shortBioPartOne}
                </p>
                <p className="about__intro__content__bio_content_partTwo">
                  {main?.shortBioPartTwo}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>{main?.myExpertise}</div>
      </div>
    </div>
  );
};

export default About;
