import {SideBarBlock} from '../sidebar/SideBarBlock'

import * as Styled from '../sidebar/sidebar__style'

function MainElement() {
  return (
    <Styled.Sidebar>
      <Styled.SidebarPersonal>
        <Styled.SidebarPersonalName>Aleksandr Kolotovkin</Styled.SidebarPersonalName>
        <Styled.SidebarPersonalAvatar></Styled.SidebarPersonalAvatar>
      </Styled.SidebarPersonal>
      <SideBarBlock />
    </Styled.Sidebar>
  )
}

export default MainElement