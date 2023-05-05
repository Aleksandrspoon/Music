import styled from 'styled-components'

export const MainCenterBlock = styled.div`
  padding-bottom: 80px;
  width: auto;
  -webkit-box-flex: 3;
  -ms-flex-positive: 3;
  flex-grow: 3;
  background-color: #181818;
`

export const CenterBlockSearch = styled.div`
  width: 100%;
  border-bottom: 1px solid #4e4e4e;
  margin-bottom: 51px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`

export const CenterBlockH2 = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`

export const CenterBlockFilter = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 51px;
`

export const FilterTitle = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin-right: 15px;
`

export const CenterBlockContent = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`
export const SearchSVGWrapper = styled.div`
  width: 17px;
  height: 17px;
  margin-right: 5px;
  stroke: #ffffff;
  fill: transparent;
`

export const SearchInput = styled.input`
  ${'' /* outline: none; */}
  -webkit-box-flex: 100;
  -ms-flex-positive: 100;
  flex-grow: 100;
  background-color: transparent;
  border: none;
  padding: 13px 10px 14px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  &::placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::-webkit-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
  &::-ms-input-placeholder {
    background-color: transparent;
    color: #ffffff;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  }
`

export const ModalWindow = styled.div`
  width: 248px;
  background-color: #313131;
  height: 305px;
  border-radius: 12px;
  position: absolute;
  left: 330px;
  top: 258px;
`

export const Row = styled.div`
  width: 250px;
`
export const ModalWindowShell = styled.div`
  padding: 20px;
`

export const ModalWindowShellYear = styled(ModalWindowShell)`
  display: flex;
`

export const ModalWindowList = styled.div`
  max-height: 237px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 28px;
  background: transparent;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 4px;
    height: 237px;
    background: #4b4949;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 4px;
    height: 65px;
    background: #ffffff;
    border-radius: 10px;
  }
`

export const FilterYearLabel = styled.label``

export const FilterButton = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border: 1px solid ${(props) => (props.selected ? '#007aff' : '#ffffff')}; // изменение цвета рамки в зависимости от пропса selected
  border-radius: 60px;
  padding: 6px 20px;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;


export const ModalItem = styled.div`
  max-width: 150px;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #ffffff;
  text-decoration: none;
  &:hover {
    color: #b672ff;
    text-decoration: underline #b672ff;
  }
`
export const FilterButtonWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    &:not(:last-child) {
        margin-right: 10px;
    }
`;

export const FilterItemsWrapperAuthor = styled.div`
  display: ${(props) => (props.isActive === 'author' ? 'block' : 'none')};
  position: absolute;
  z-index: 20;
  top: 50px;
  width: 248px;
  height: 305px;
  padding: 34px;
  background: #313131;
  border-radius: 12px;
`;


export const FilterItemsWrapperGenre = styled(FilterItemsWrapperAuthor)`
  display: ${(props) => (props.isActive === 'genre' ? 'block' : 'none')};
`;

export const FilterItemsWrapperYear = styled.div`
  display: ${(props) => (props.isActive === 'year' ? 'block' : 'none')};
  position: absolute;
  top: 50px;
  padding: 34px;
  width: 403px;
  background: #313131;
  border-radius: 12px;
`;

export const FilterItems = styled.div`
    max-height: 237px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 28px;
    background: transparent;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 4px;
        height: 237px;
        background: #4b4949;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        width: 4px;
        height: 65px;
        background: #ffffff;
        border-radius: 10px;
    }
`;

export const FilterWrapper = styled.div`
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
border: 1px solid #ffffff;
border-radius: 60px;
padding: 6px 20px;
background-color: ${(props) => (props.isSelected ? '#0000ff' : '#808000')};
color: ${(props) => (props.isSelected ? '#0000ff' : '#808000')};
&:hover {
  border-color: #0000ff;
  background-color: #808000;
  color: #ffffff;
}
&:not(:last-child) {
  margin-right: 10px;
}
    
`;

export const Filter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
`

export const FilterCount = styled.div`
display: inline-block;
margin-left: 8px;
font-size: 12px;
color: #888;
`
