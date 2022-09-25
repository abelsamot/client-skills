import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import {useMoralis} from "react-moralis";
import {Button, Form, Container, Col, Row} from 'react-bootstrap'
import '../styles/styles.css'

const ProfileBar = ()=>{
    const { user} = useMoralis();
    return <div className= "profileBar">
        <Container className= "w-100">
            <Row >
                <Col xl={2} lg={3}  sm={3.5} xs={4} className="regularCol d-flex align-items-center justify-content-center"> 
                    <img src='https://awkbi0rsarvu.usemoralis.com:2053/server/files/1M3DRwK4iIFbrcX9BiKCUWPMcRfuUIEp7BTSKgf3/6f41f699362ef8d696a542acc3b41104_Stack.png' class="headerImage "></img>
                </Col>
                <Col xl={3} lg={4}  sm={4.5} xs={5} className="regularCol titleProfile"> 
                    <div>
                    <Row ><h3 className="h3"> Stack Talent {user.get("firm").get("name")}</h3> </Row>
                    <Row> <p className="p"> Head Hunting firm {user.get("firm").get("typeOfCompany")}</p></Row></div>
                </Col>
                <Col xl={5} lg={3}  sm={1} xs={2} className="regularCol"> </Col>
                <Col xl={2} lg={2}  sm={2} xs={1} className="regularCol"> 
                </Col>
            </Row>
        </Container>
    </div>
}

export default ProfileBar