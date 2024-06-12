import { Routes, Route } from "react-router-dom";
import Description from "../Description/Description";
import About from "../About/About";
import Project from "../Projects/Project";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Description />}></Route>
      <Route path="/harikrishnanmohan/" element={<Description />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/projects" element={<Project />}></Route>
    </Routes>
  );
};

export default Router;
