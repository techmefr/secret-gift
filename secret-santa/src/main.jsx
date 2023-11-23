import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Snowfall from "react-snowfall";
import Gift from "./Gift";
import BddTest from "./BddTest";
import Cadeau from "./components/cadeaux/cadeau";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <BddTest />,
      },
      {
        path: "/BddTest",
        element: <BddTest />,
      },
      {
        path: "/Cadeau",
        element: <Cadeau />,
      },
      {
        path: "/gift",
        element: <Gift />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <div style={{ snowflakeCount: 200 }}>
        <Snowfall />
        <App />
        <Outlet />
      </div>
    </RouterProvider>
  </React.StrictMode>,
  document.querySelector("#app")
);
