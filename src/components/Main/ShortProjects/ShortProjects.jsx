import { useContext } from "react";

import { PortfolioContext } from "../../../context/portfolio-context";

import white_arrow_with_outline from "../../../assets/white_arrow_with_outline.png";

import "./ShortProjects.scss";

const ShortProjects = () => {
  const { projects } = useContext(PortfolioContext);

  return (
    <div className="shortProjects__container">
      <div className="shortProjects__projects">
        {projects.map((item) => {
          return (
            <div className="shortProjects__projects_project" key={item?.title}>
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
  );
};

export default ShortProjects;
