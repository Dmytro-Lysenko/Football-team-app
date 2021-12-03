import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header>
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
