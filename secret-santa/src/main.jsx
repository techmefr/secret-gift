import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Snowfall from "react-snowfall";
import App from "./App";
// page components
import BddTest from "./BddTest";
// router creation
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
    ],
  },
]);
// rendering
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Snowfall />
      <RouterProvider router={router} />
    </div>
  </>,
  document.querySelector("#app")
);
