import { Link, Outlet } from "react-router-dom";
import "./App.css";
import BddTest from "./BddTest";
import Cadeau from "./components/cadeaux/cadeau";

function App() {
  return (
    <>
      <nav>
        <Link to="/BddTest">Home</Link>
        <Link to="/Cadeau">Gift Ideas</Link>
      </nav>
      <main>
        <Outlet />
      </main>
     
    </>
  );
}

export default App;
