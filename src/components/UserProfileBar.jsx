import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import {useMoralis} from "react-moralis";
import {Button, Form, Container, Col, Row, Badge} from 'react-bootstrap'
import '../styles/styles.css'

const UserProfileBar = (props)=>{
    const testsDone = (props.tests || []).filter(test => test.testDone == true)
    const sum = (testsDone|| []).reduce((accumulator, object) => {
        return (accumulator + object.testScore)/testsDone.length;
      }, 0);
    console.log(sum)

    const userStack = props.stack
    
    return <div className= "profileBar">
        <Container className= "w-100">
            <Row >
                <Col xl={6} lg={6}  sm={7} xs={7} className="regularCol titleProfile"> 
                    <div>
                    <Row ><h3 className="h3"> {props.username} </h3> </Row>
                    <Row> <div className="p"> <span style={{color:"#FFCD4D", fontWeight:600, fontSize:props.titleSize}}> Post : </span> {props.post} </div></Row>
                    <div style={{height:"5px"}}></div>
                    <Row> <div> <span style={{color:"#FFCD4D", fontWeight:600, fontSize:props.titleSize}}> Stack : </span> {userStack && userStack.map((item) => <Badge style={{marginLeft:"10px"}} key={item}> {item} </Badge> )} </div></Row>
                    <div style={{height:"5px"}}></div>
                    <Row> <div className="p">  <span style={{color:"#FFCD4D", fontWeight:600, fontSize:props.titleSize}}> Seniority : </span>  {props.seniority} </div></Row>
                    </div>
                    
                    
                </Col>
                <Col xl={4} lg={4}  sm={2} xs={2} className="regularCol"> </Col>
                <Col xl={2} lg={2}  sm={3} xs={3} className="regularCol titleProfile"> 
                    <div>
                    <Row ><h1 className="h1 d-flex align-items-center justify-content-center" style={{color:"#FFCD4D", fontWeight:800}} > {Math.round(sum)}% </h1> </Row>
                    <Row> <div className="p" >Total score  </div></Row>
                    <div style={{height:"5px"}}></div>
                    </div>
                    
                    
                </Col>
            </Row>
        </Container>
    </div>
}

export default UserProfileBar