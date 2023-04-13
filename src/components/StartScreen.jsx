import { useState } from 'react';
import Logo from '../assets/logo.png';

function NavMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    console.log("Burger clicked");
    setIsMenuOpen(!isMenuOpen);
  };

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
      <div className={`nav__menu menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu__list">
          <li className="menu__item">
            <button className="menu__link">Главное</button>
          </li>
          <li className="menu__item">
            <button className="menu__link">Мой плейлист</button>
          </li>
          <li className="menu__item">
            <button className="menu__link">Войти</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function StartScreen() {
  const logo = '../assets/logo.png';

  return (
    <div className="start-screen">
      <img src={logo} className="logo" alt="logo" />
      <h1>Some title here</h1>
      <p>Some text here</p>
      <button>Some button here</button>
      <p>Learn React</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <NavMenu />
      <StartScreen />
    </div>
  );
}
