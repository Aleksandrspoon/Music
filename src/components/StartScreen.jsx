import React, { useState } from 'react';
import Logo from './assets/logo.png';
import './App.css';

function NavMenu() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="main__nav nav">
      <div className="nav__logo logo">
        <img className="logo__image" src={Logo} alt="logo" />
      </div>
      <div className="nav__burger burger" onClick={toggleMenu}>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
        <span className="burger__line"></span>
      </div>
      <div className={`nav__menu menu ${showMenu ? "active" : ""}`}>
        <ul className="menu__list">
          <li className="menu__item">
            <button className="menu__link">
              Главное
            </button>
          </li>
          <li className="menu__item">
            <button className="menu__link">
              Мой плейлист
            </button>
          </li>
          <li className="menu__item">
            <button className="menu__link">
              Войти
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Main() {
  return (
    <div className="main">
      <NavMenu />
      {/* some other content */}
    </div>
  );
}

function StartScreen() {
  return (
    <div className="start-screen">
      <img src={Logo} className="logo" alt="logo" />
      <h1>Some title here</h1>
      <p>Some text here</p>
      <button>Some button here</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Main />
      <StartScreen />
    </div>
  );
}
