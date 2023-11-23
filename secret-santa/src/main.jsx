import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
// page components
import BddTest from "./BddTest";
import Cadeau from "./components/cadeaux/cadeau";
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
      {
        path: "/Cadeau",
        element: <Cadeau />,
      },
    
    ],
  }
]);

// rendering

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
