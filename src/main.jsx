import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import About from "./components/About/About.jsx";
import Description from "./components/Description/Description.jsx";

const router = createBrowserRouter([
  {
    path: "/harikrishnanmohan/",
    element: <App />,
    children: [
      {
        path: "/harikrishnanmohan/",
        element: <Description />,
      },
      {
        path: "/harikrishnanmohan/about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
