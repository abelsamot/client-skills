import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'
import {useMoralis} from 'react-moralis'

function Navbar({toggle}) {
  const {isAuthenticated, logout}=useMoralis();

  const ButtonTop = ()=>{
    if(isAuthenticated){
      return <div><NavBtnLink to="/" onClick={()=>logout()}> Logout </NavBtnLink></div>
    }
  }
  const NavbarAuthenticated = () => {
    if(isAuthenticated){
      return <>
        <NavLink to="/candidates">Candidates</NavLink>
        <NavLink to="/tests">Tests</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </>
    }
  }

  return (
    <Nav>
          <NavLink to="/">  <img src="https://i.postimg.cc/dV4mxdww/logo.png" style={{height:"70px"}}/> </NavLink>
          <Bars onClick={toggle}/>
          <NavMenu>
            <NavbarAuthenticated/>
            <ButtonTop/>
          </NavMenu>
    </Nav>
  );
}

export default Navbar;