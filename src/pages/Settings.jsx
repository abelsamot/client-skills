import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from '../components/Signin.jsx';
import Signup from '../components/Signup.jsx';
import {useMoralis} from 'react-moralis'
import {Button, Form, Container, Col, Row, Badge, Nav, ListGroup, Link} from 'react-bootstrap'
import {useState, useEffect} from 'react'
import  { Navigate } from 'react-router-dom'
import MyAccountSettings from '../components/adminPanel/MyAccountSettings'
import ModifyTest from '../components/adminPanel/ModifyTest.jsx';
import '../styles/styles.css'

function Settings() {
    const {user, isAuthenticated, logout}=useMoralis();

    const [pageState,setPageState]= useState("userManagement")
    if(isAuthenticated){


       return <div class="">
       <div className="userMenue">
            <Nav variant="tabs" activeKey={pageState} style={{marginLeft:"5%"}}>
                <Nav.Item>
                    <Nav.Link eventKey="userManagement" title="userManagement" onClick={()=>setPageState("userManagement")}>User Management</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="modifyTests" title="modifyTests" onClick={()=>setPageState("modifyTests")}>Modify tests</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
        <div style={{height:"100px"}}></div>
        <Container>{pageState==="userManagement" ? 
       
        <Row>
            <Col sm={5}>
            <MyAccountSettings />
            </Col>
            <Col sm={2}> </Col>
            <Col sm={5}>
            <Signup/>
            </Col>
        </Row>:
       <Row>
       <ModifyTest/>
       </Row>
       
        }</Container>

       </div>
    }

    return <Navigate to="/"/>

}

export default Settings;