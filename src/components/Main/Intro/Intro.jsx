import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";

import { PortfolioContext } from "../../../context/portfolio-context";

import "./Intro.scss";

const Intro = () => {
  const { main } = useContext(PortfolioContext);
  const intro = main?.intro;
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.to(
      //   [".intro__letter", ".intro__word__tag", ".intro__tagLine_parts"],
      //   {
      //     y: 0,
      //     stagger: 0.05,
      //     delay: 0.2,
      //     duration: 0.1,
      //   }
      // );
      const t1 = gsap.timeline();
      t1.to([".intro__letter", ".intro__word__tag"], {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      }).to(".intro__tagLine_parts", {
        y: 0,
        stagger: 0.05,
        delay: 0.2,
        duration: 0.1,
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div className="intro__container" ref={component}>
      <div className="intro">
        {intro?.map((item, index) => {
          return (
            <div key={item} className={`intro__word intro__word__${index}`}>
              {[...item].map((char, index) => {
                return (
                  <div className="intro__letter" key={index}>
                    {char == " " ? <div className="place_holder"></div> : char}
                  </div>
                );
              })}
            </div>
          );
        })}
        <div className="intro__tag">
          {/* <div className="intro__word intro__word__tag">{main?.whoIs}</div> */}
          <div className="intro__tagLine">
            {main?.tagline.map((item) => (
              <div key={item} className="intro__tagLine_parts">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
