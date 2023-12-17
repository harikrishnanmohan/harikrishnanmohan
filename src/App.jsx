import Header from "./components/Header/Header";

import "./App.scss";
import Description from "./components/Description/Description";
import { PortfolioContextProvider } from "./context/portfolio-context";

import data from "./harikrishnanMohan.json";
import { useEffect, useState } from "react";
import Loader from "./components/Loader/Loader";

const App = () => {
  // set to false
  const [isLoading, setIsLoading] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const counterValid = counter < 100;
  useEffect(() => {
    const intervalId =
      counterValid && setInterval(() => setCounter((t) => t + 5), 100);
    return () => clearInterval(intervalId);
  }, [counterValid]);

  if (isLoading) return <Loader counter={counter} />;

  return (
    <PortfolioContextProvider initialValue={data}>
      <div className="container__main">
        <Header />
        <Description />
      </div>
    </PortfolioContextProvider>
  );
};

export default App;
