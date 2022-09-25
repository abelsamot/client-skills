import React from "react";
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SidebarElements'

import {useMoralis} from 'react-moralis'
function Sidebar({isOpen, toggle}) {

    const {isAuthenticated, logout}=useMoralis();
    const ButtonLogout = ()=>{
        if(isAuthenticated){
          return <div><SidebarRoute to="/" onClick={()=>logout()}> Logout </SidebarRoute></div>
        }
    }
    return (
    <SidebarContainer isOpen={isOpen}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>

        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="/candidates" onClick={toggle}>
                    Candidates
                </SidebarLink>
                <SidebarLink to="/tests" onClick={toggle}>
                    Tests
                </SidebarLink>
                <SidebarLink to="/settings" onClick={toggle}>
                    Settings
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <ButtonLogout/>
            </SideBtnWrap>

        </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;