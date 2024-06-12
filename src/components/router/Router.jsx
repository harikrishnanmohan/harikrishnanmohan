import { Routes, Route } from "react-router-dom";
import Description from "../Description/Description";
import About from "../About/About";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Description />}></Route>
      <Route path="/harikrishnanmohan/" element={<Description />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default Router;
