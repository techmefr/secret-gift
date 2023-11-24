import { Link, Outlet } from "react-router-dom";
import "./App.css";
import BddTest from "./BddTest";
import Cadeau from "./components/cadeaux/cadeau";

function App() {
  return (
    <div>
      <nav>
        <Link className="a-nav" to="/">
          Home
        </Link>
        <Link className="a-nav" to="/Cadeau">
          Gift Ideas
        </Link>
        <Link className="a-nav" to="/Movies">
          Christmas Movies
        </Link>
        <Link className="a-nav" to="/EventCalendar">
          Event Calendar
        </Link>
        <Link className="a-nav" to="/UserId">
          Login
        </Link>
      </nav>
      <div className="img-event" />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
