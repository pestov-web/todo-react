import NavMenu from './NavMenu';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">ToDo List</h1>
        <NavMenu />
      </div>
    </header>
  );
}

export default Header;
