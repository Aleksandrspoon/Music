import styled from 'styled-components';

export const MainTextMixin = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`

export const HoverMixin = styled.div`
    :hover,
    :hover svg {
        fill: transparent;
        stroke: #acacac;
        cursor: pointer;
    }
`

export const Dropdown = styled.div`
    position: absolute;
    top: 49px;
    left: 0;
    background-color: #313131;
    border-radius: 12px;
    padding-right: 34px;
`
export const DropdownWrapper = styled.div`
    max-height: 305px;
    overflow-y: auto;
    margin: 36.5px 0px 36.5px 34px;
    ::-webkit-scrollbar {
        width: 4px;
        background: #4b4949;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #ffffff;
    }
`
export const DropdownContent = styled.div`
    padding-right: 24px;
    display: flex;
    flex-direction: column;
    row-gap: 28px;
`
export const DpopdownItem = styled.p`
    ${MainTextMixin}
    font-size: 20px;
    white-space: nowrap;
    :hover {
        ${HoverMixin}
        text-decoration: underline;
        color: #b672ff;
    }
`
export const DropdownRadio = styled.div`
    display: flex;
    column-gap: 28px;
`

export const RadioLabel = styled.label`
    ${MainTextMixin}
    font-size: 20px;
    white-space: nowrap;
    display: flex;
    column-gap: 10px;
    :hover {
        ${HoverMixin}
        text-decoration: underline;
        color: #b672ff;
    }
    ::before {
        content: '';
        width: 10px;
        height: 10px;
        border-radius: 50%;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        background-color: #fff;
    }
`

export const RadioBox = styled.div`
    height: 1.125rem;
    width: 1.125rem;
    border: 1px solid #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-right: 0.4rem;
    transition: background 0.15s, border-color 0.15s;
    padding: 3px;
    &::after {
        content: '';
        width: 100%;
        height: 100%;
        display: block;
        background: #fff;
        border-radius: 50%;
        cursor: pointer;
        transform: scale(0);
    }
`
export const RadioInput = styled.input`
    display: none;
    &:checked + ${RadioBox} {
        &::after {
            transform: scale(1);
        }
    }
`
export const FilterCount = styled.span`
  background-color: #8B00FF;
  border-radius: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 10px;
  margin-left: 10px;
`;