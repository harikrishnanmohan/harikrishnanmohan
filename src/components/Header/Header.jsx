import Reat from "react";

import { useContext, useEffect, useRef } from "react";

import { PortfolioContext } from "../../context/portfolio-context";

import "./Header.scss";

const Header = () => {
  const { main } = useContext(PortfolioContext);

  return (
    <header className="header">
      <h1 className="header__logo">
        <a className="anchor" href="/">
          <div className="header__logo__short_name">{main?.shortName}</div>
          {/* <div className="header__logo__long_name">{main?.name}</div> */}
        </a>
      </h1>
      <ul className="header__links">
        <li className="header__link">PROJECTS</li>
        <li className="header__link">ABOUT</li>
      </ul>
      <div className="header__contact_me">
        <span>CONTACT ME</span>
      </div>
    </header>
  );
};
export default Header;
