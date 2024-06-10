import { useContext } from "react";

import { PortfolioContext } from "../../../context/portfolio-context";

import white_arrow_with_outline from "../../../assets/white_arrow_with_outline.png";

import "./ShortProjects.scss";
import Heading from "../../Heading/Heading";

const ShortProjects = () => {
  const { projects, projectsHeading } = useContext(PortfolioContext);

  return (
    <div className="shortProjects__container">
      <div className="shortProjects__content">
        <Heading>
          <span className="section__number">02</span>
          <span>{projectsHeading}</span>
          <span className="section__number">02</span>
        </Heading>
        <div className="shortProjects__projects">
          {projects.map((item) => {
            return (
              <div
                className="shortProjects__projects_project"
                key={item?.title}
                onClick={() => window.open(item.url, "_blank")}
              >
                {item?.title}
              </div>
            );
          })}
          <div className="shortProjects__projects__learnMore_content">
            <img
              className="shortProjects__projects__learnMore_arrow"
              src={white_arrow_with_outline}
              alt="right arrow"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortProjects;
