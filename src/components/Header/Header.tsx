import { Link } from "react-router-dom";
import s from "./Header.module.scss";
const Header = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul>
          <li>
            <Link
              className={s.link}
              to="/"
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
