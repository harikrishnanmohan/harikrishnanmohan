import { useContext } from "react";

import { PortfolioContext } from "../../../context/portfolio-context";

import black_and_white from "../../../assets/black_and_white.jpg";

import "./ShortAbout.scss";

const ShortAbout = () => {
  const { main } = useContext(PortfolioContext);
  return (
    <div className="shortAbout__container">
      <div className="shortAbout">
        <div className="shortAbout__profilePic">
          <img
            className="shortAbout__profilePic_pic"
            src={black_and_white}
            alt="profile pic"
          />
        </div>
        <div className="shortAbout__content">
          <div className="shortAbout__content__bio">
            <p className="shortAbout__content__bio_content">{main?.shortBio}</p>
          </div>
          <div className="shortAbout__content__learnMore">
            <div className="shortAbout__content__learnMore_content">
              {main?.learnMore}...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShortAbout;
