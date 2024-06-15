import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { PortfolioContext } from "../../context/portfolio-context";

import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { main } = useContext(PortfolioContext);
  const [showLinks, setShowLinks] = useState(false);
  const navigate = useNavigate();
  const [currentScrollY, setCurrentScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const controllHeader = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > currentScrollY && currentScrollY > 100)
          setIsVisible(false);
        else setIsVisible(true);
        setCurrentScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controllHeader);

      return () => window.removeEventListener("scroll", controllHeader);
    }
  }, [currentScrollY]);

  return (
    <div
      className={`header__container ${
        isVisible ? " header-visible" : "header-hidden"
      }`}
    >
      <header className="header">
        <h1 className="header__logo">
          <NavLink className="anchor header__logo_content" to="/">
            <div className="header__logo__short_name">
              {main?.shortNamePartOne}
              <div className="header__logo__long_name"></div>
            </div>
          </NavLink>
        </h1>
        <FontAwesomeIcon
          icon={faBars}
          className="header__links_icon"
          onClick={() => setShowLinks((prev) => !prev)}
        />
        <ul className={`header__links ${showLinks ? "inView" : "ofView"}`}>
          <li className="header__link">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "is_active" : "non_active"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li className="header__link">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "is_active" : "non_active"
              }
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="header__contact_me header__link">
            <a href="#contactMe">CONTACT ME</a>
          </li>
        </ul>
        <div className="header__contact_me smallScreen">
          <a
            onClick={() => {
              navigate("/", { state: { scrollToDiv: true } });
            }}
          >
            CONTACT ME
          </a>
        </div>
      </header>
    </div>
  );
};
export default Header;
