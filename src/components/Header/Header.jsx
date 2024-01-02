import React, { useContext, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import { PortfolioContext } from "../../context/portfolio-context";

import "./Header.scss";

const Header = () => {
  const { main } = useContext(PortfolioContext);
  const location = useLocation();

  const body = document.body;
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) body.classList.remove("scroll-up");

    if (currentScroll < lastScroll && !body.classList.contains("scroll-down")) {
      body.classList.remove("scroll-up");
      body.classList.add("scroll-down");
    }

    if (currentScroll > lastScroll) {
      body.classList.remove("scroll-down");
      body.classList.add("scroll-up");
    }

    lastScroll = currentScroll;
  });

  return (
    <div className="header__container">
      <header className="header">
        <h1 className="header__logo">
          <NavLink className="anchor header__logo_content" to="/">
            <div className="header__logo__short_name">
              {main?.shortNamePartOne}
              <div className="header__logo__long_name"></div>
            </div>
          </NavLink>
        </h1>
        <ul className="header__links">
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
        </ul>
        <div className="header__contact_me">
          <a href="#contactMe">CONTACT ME</a>
        </div>
      </header>
    </div>
  );
};
export default Header;
