import styled from 'styled-components';

export const NotFoundWrapper = styled.section`
    width: 431px;
    height: 366px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #181818;
`;

export const NotFoundTitle = styled.h1`
    font-style: normal;
    font-weight: 400;
    font-size: 160px;
    line-height: 168px;
    color: #ffffff;
`;

export const NotFoundSubTitle = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 160px;
    line-height: 168px;
    color: #ffffff;
    font-size: 32px;
    line-height: 40px;
    margin-top: 2px;
`;

export const NotFoundText = styled.p`
    width: 278px;
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #4e4e4e;
    margin-top: 15px;
`;

export const NotFoundButton = styled.button`
    width: 278px;
    height: 52px;
    background: #580ea2;
    border-radius: 6px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    cursor: pointer;
    border: 0;
    margin-top: 36px;
    :hover {
        background: #3f007d;
    }
    :active {
        background: #271a58;
    }
`;