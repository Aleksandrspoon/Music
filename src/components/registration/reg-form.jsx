import * as Styled from './reg-form.style'

import logo_black from '../../img/logo-black.png'

const RegistrationForm = () => {
    const MyLogin = (e) => {
      e.preventDefault()
      localStorage.setItem('login', 'Aleksandr')
      localStorage.setItem('password', 'password')
      window.location.reload() //временно для входа
    }

  return (
    <Styled.RegistrationForm>
      <Styled.Logo src={logo_black} alt="logo" />
      <Styled.RegistrationInput placeholder="Логин" />
      <Styled.RegistrationInput placeholder="Пароль" />
      <Styled.RegistrationInput placeholder="Повторите пароль" />
      <Styled.RegistrationButton onClick={(e) => MyLogin(e)}>
        Зарегистрироваться
      </Styled.RegistrationButton>
    </Styled.RegistrationForm>
  )
}

export default RegistrationForm