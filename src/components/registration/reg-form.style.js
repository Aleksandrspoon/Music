import styled from 'styled-components';

export const RegistrationForm = styled.form`
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
    margin-bottom: 42px;
`;

export const RegistrationInput = styled.input`
    width: 278px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    border: 0;
    border-bottom: 1px solid #d0cece;
    :not(:last-child) {
        margin-bottom: 38px;
    }
    ::placeholder {
        color: #e1e1e1;
    }
    :focus {
        outline: none;
    }
`;

export const RegistrationButton = styled.button`
    width: 278px;
    height: 52px;
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
    :hover {
        background: #3F007D;
    }
    :active {
        background: #271a58;
    }
`;