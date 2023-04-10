function NavMenu() {
  function handleBurgerClick() {
    // Здесь можно добавить действия, которые нужно выполнить при нажатии на бургер-меню
    console.log("Burger menu clicked!");
  }

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={Logo} alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={handleBurgerClick}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className="nav__menu menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Главное
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Мой плейлист
            </a>
          </li>
          <li className="menu__item">
            <a href="http://" className="menu__link">
              Войти
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
