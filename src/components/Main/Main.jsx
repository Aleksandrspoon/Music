import MainCenterBlock from '../Main/MainCenterBlock'
import Menu from '../Menu/Menu'
import SideBar from '../sidebar/SideBar'


import * as Styled from '../Main/mainelement__style'

function MainElement() {
  return (
    <Styled.Main>
      <Menu />
      <MainCenterBlock />
      <SideBar/>
    </Styled.Main>
  )
}

export default MainElement
