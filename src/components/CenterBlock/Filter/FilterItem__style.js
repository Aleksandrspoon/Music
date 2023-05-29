import styled, { css } from 'styled-components'

const MainTextMixin = css`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`

const HoverMixin = css`
    :hover,
    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
`

export const FilterItem = styled.div`
    position: relative;
    :not(:last-child) {
        margin-right: 10px;
    }
`
export const FilterButton = styled.div`
    ${MainTextMixin}
    ${HoverMixin}
    border: 1px solid #ffffff;
    border-radius: 60px;
    padding: 6px 20px;
`