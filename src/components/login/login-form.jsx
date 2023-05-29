import * as Styled from './login-form.style';
import { Link } from 'react-router-dom';

import logo_black from '../../img/logo-black.png'

const LoginForm = () => {
    const MyLogin = (e) => {
        e.preventDefault();
        // localStorage.setItem('token', 'It is me, Aleksandr');
        localStorage.setItem('login', 'Aleksandr');
        localStorage.setItem('password', 'password');
        window.location.reload(); //временно для входа
    };

    return (
        <Styled.LoginForm>
            <Styled.Logo src={logo_black} alt="logo" />
            <Styled.LoginInput placeholder="Логин" type='text'/>
            <Styled.LoginInput placeholder="Пароль" type='password'/>
            <Styled.LoginButton onClick={(e) => MyLogin(e)}>Войти</Styled.LoginButton>
            <Link to="/registration">
                <Styled.RegistrationButton>
                    Зарегистрироваться
                </Styled.RegistrationButton>
            </Link>
        </Styled.LoginForm>
    );
};

export default LoginForm;