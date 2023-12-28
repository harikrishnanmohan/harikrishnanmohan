import { useContext } from "react";

import { PortfolioContext } from "../../context/portfolio-context";

import "./Footer.scss";

const Footer = () => {
  const { main } = useContext(PortfolioContext);

  return (
    <div className="footer__container">
      <div className="footer">
        <p className="footer__message">{main?.contactmessage}</p>
        <div className="footer__social">
          {main?.social.map((item, index) => {
            return (
              <a
                key={index}
                className="footer__social_item"
                href={item?.url}
                target="_blank"
                rel="noopener"
              >
                {item?.name}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
