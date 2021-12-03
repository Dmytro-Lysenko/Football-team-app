import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <Link to="/">Active players</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/add-player">Add player</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
