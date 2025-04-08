import navMenu from '../utils/data-placeholder';
function NavMenu() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        {navMenu.map((item) => (
          <li key={item.name} className="nav__list-item">
            <a href={item.href}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
