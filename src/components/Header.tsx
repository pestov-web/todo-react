import NavMenu from './NavMenu';

function Header({ setIsOpen }: { setIsOpen: (isOpen: boolean) => void }) {
  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">ToDo List</h1>
        <NavMenu />
        <button
          className="button header__button"
          onClick={() => setIsOpen(true)}
        >
          Добавить задачу
        </button>
      </div>
    </header>
  );
}

export default Header;
