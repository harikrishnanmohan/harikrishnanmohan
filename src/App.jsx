import React, { useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import Lenis from "@studio-freight/lenis";

import Header from "./components/Header/Header";
import Router from "./components/router/Router";
import Loader from "./components/Loader/Loader";

import { PortfolioContextProvider } from "./context/portfolio-context";

import data from "./harikrishnanMohan.json";
import "./App.scss";

const App = () => {
  const [counter, setCounter] = useState(0);
  const component = useRef(null);

  const lenis = new Lenis();

  lenis.on("scroll", (e) => {
    // console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const counterValid = counter < 100;
  useLayoutEffect(() => {
    const intervalId =
      counterValid && setInterval(() => setCounter((t) => t + 4), 100);
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(".app__container", {
        opacity: 0,
        duration: 2,
      });
    }, component);

    return () => {
      clearInterval(intervalId);
      () => ctx.revert();
    };
  }, [counterValid]);

  if (counter < 100) return <Loader counter={counter} />;

  return (
    <PortfolioContextProvider initialValue={data}>
      <div className="app" ref={component}>
        <Header />
        <div className="app__container">
          <Router />
        </div>
      </div>
    </PortfolioContextProvider>
  );
};

export default App;
