import styled from 'styled-components';

export const LoginForm = styled.form`
    width: 366px;
    height: 439px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-radius: 12px;
`;

export const Logo = styled.img`
    margin-bottom: 50px;
`;

export const LoginInput = styled.input`
    width: 278px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    border: 0;
    border-bottom: 1px solid #d0cece;
    :not(:last-child) {
        margin-bottom: 42px;
    }
    ::placeholder {
        color: #e1e1e1;
    }
    :focus {
        outline: none;
    }
`;

export const LoginButton = styled.button`
    width: 278px;
    height: 52px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #ffffff;
    background: #580ea2;
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    margin-top: 22px;
    :not(:last-child) {
        margin-bottom: 20px;
    }
    :hover {
        background: #3f007d;
    }
    :active {
        background: #271a58;
    }
`;

export const RegistrationButton = styled(LoginButton)`
    color: #000000;
    background-color: #ffffff;
    border: 1px #d0cece solid;
    font-weight: 500;
    margin-top: 0;
    :hover {
        background: #f4f5f6;
    }
    :active {
        background: #d9d9d9;
    }
`;