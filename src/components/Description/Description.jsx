import Reat from "react";

import React, { useContext, useEffect, useRef } from "react";
import gsap from "gsap";

import { PortfolioContext } from "../../context/portfolio-context";

import "./Description.scss";

const Description = () => {
  const { main } = useContext(PortfolioContext);
  const description = main?.description;
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(
        [
          ".description__letter",
          ".description__word__tag",
          ".description__tagLine_parts",
        ],
        {
          y: 0,
          stagger: 0.05,
          delay: 0.2,
          duration: 0.1,
        }
      );
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className="description-container" ref={component}>
      <div className="description">
        {description?.map((item, index) => {
          return (
            <div
              key={item}
              className={`description__word description__word__${index}`}
            >
              {[...item].map((char, index) => {
                return (
                  <div className="description__letter" key={index}>
                    {char}
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="description__tag">
          <div className="description__word description__word__tag">
            {main?.whoIs}
          </div>
          <div className="description__tagLine">
            {main?.tagline.map((item) => (
              <div key={item} className="description__tagLine_parts">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
