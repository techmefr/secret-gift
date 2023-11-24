import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Snowfall from "react-snowfall";
import App from "./App";
import BddTest from "./BddTest";
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
// rendering
ReactDOM.createRoot(document.getElementById("root")).render(
  <div
    style={{
      width: "100vh",
      height: "100vh",
    }}
  >
    <Snowfall
      snowflakeCount={400}
      rotationSpeed={[2, 5]}
      speed={[1, 3]}
      wind={[-0.5, 2]}
    />
    <RouterProvider router={router} />
  </div>,
  document.querySelector("#app")
);
