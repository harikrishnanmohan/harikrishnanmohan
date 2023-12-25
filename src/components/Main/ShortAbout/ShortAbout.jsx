import { useContext, useLayoutEffect, useRef } from "react";

import { PortfolioContext } from "../../../context/portfolio-context";

import color_two from "../../../assets/color_two.jpg";
import white_arrow_with_outline from "../../../assets/white_arrow_with_outline.png";

import "./ShortAbout.scss";

const ShortAbout = () => {
  const { main } = useContext(PortfolioContext);

  return (
    <div className="shortAbout__container">
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
              <p className="shortAbout__content__bio_content_partOne">
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
