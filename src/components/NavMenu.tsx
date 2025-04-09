import { Link } from 'react-router';
import navMenu from '../utils/data-placeholder';
function NavMenu() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navMenu.map((item) => (
          <li key={item.name} className="nav__list-item">
            <Link to={item.href} className="nav__list-item-link">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
