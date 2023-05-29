import styled, { css } from 'styled-components'

const MainTextMixin = css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`
export const Counter = styled.div`
    ${MainTextMixin}
    position: absolute;
    bottom: 22px;
    right: -12px;
    font-size: 13px;
    line-height: 25px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #ad61ff;
    text-align: center;
    vertical-align: center;
`