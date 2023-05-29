import * as Styled from '../Menu/Menu_style'

import { useState } from 'react'
import logo from '../../components/assets/logo.png'

const MenuElem = ({ href, text }) => {
  return (
    <Styled.MenuItem>
      <Styled.MenuLink href={href}>{text}</Styled.MenuLink>
    </Styled.MenuItem>
  )
}

function Menu() {
  const [isVisible, setVisible] = useState(false)

  return (
    <Styled.Nav>
      <Styled.NavLogo>
        <Styled.LogoImage src={logo} alt="logo"></Styled.LogoImage>
      </Styled.NavLogo>
      <Styled.NavBurger onClick={() => setVisible(!isVisible)}>
        <Styled.BurgerLine></Styled.BurgerLine>
        <Styled.BurgerLine></Styled.BurgerLine>
        <Styled.BurgerLine></Styled.BurgerLine>
      </Styled.NavBurger>
      {isVisible && (
        <Styled.Menu>
          <Styled.MenuList>
            <MenuElem href="#" text="Главное" />
            <MenuElem href="#" text="Мой плейлист" />
            <MenuElem href="#" text="Войти" />
          </Styled.MenuList>
        </Styled.Menu>
      )}
    </Styled.Nav>
  )
}

export default Menu
