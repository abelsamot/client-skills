import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect, useRef} from 'react'
import {useMoralis} from "react-moralis";
import {Button, Form, Container, Col, Row, Badge} from 'react-bootstrap'
import '../styles/styles.css'
import Webcam from "react-webcam";
import SkillCard from './SkillCard';

const UserSkills = (props)=>{
    const testsDone= props.tests.filter(test => test.testDone == true)
    console.log(testsDone)
    return <div style={{backgroundColor:"#282c34", height:"80vh", marginTop:"3px" }}>
    <div style={{height:"50px"}}>
    </div>

    <Container >
    {testsDone.map(cardInfo =>(
            <Col lg={4} sm={6} xs={12}>
            <SkillCard cardInfo={cardInfo} username={props.username}/>
            </Col>
        ))}
        </Container>
    </div>
}

export default UserSkills