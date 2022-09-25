import React from 'react';
import {Button, Container, Row, Col, Grid} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from '../components/Signin.jsx';
import Signup from '../components/Signup.jsx';
import {useMoralis} from 'react-moralis'
import {useState, useEffect} from 'react'
import  { Navigate } from 'react-router-dom'
import axios from "axios";
import TestCard from '../components/TestCard.jsx';

function Tests() {
    useEffect(() => {
        getTests()
        console.log("ok")
      }, []);
    const [tests, setTests] = useState([]);
    

    const getTests = () => {
        axios.get("/getTests").then((response)=>{
            setTests(response.data)
            console.log(response.data)
        })
        .catch(error => console.error(error))
    }

    const {isAuthenticated, logout}=useMoralis();

    if(isAuthenticated){
       return <div>
       <div style={{height:"100px"}}></div>
       <Container className="d-flex justify-content-center">
       <Row>
        {tests.map(cardInfo =>(
            <Col lg={4} sm={6} xs={12}>
            <TestCard  cardWidth='18rem' textSize="13px" name={cardInfo.name} nbOfQuestions={cardInfo.nbOfQuestions} duration={cardInfo.durationInMinutes} longDescription={cardInfo.longDescription} smallDescription={cardInfo.smallDescription} typeOfTest={cardInfo.typeOfTest}/>
            </Col>
        ))}
        </Row>
        </Container>
       </div>
    }

    return <Navigate to="/"/>

}

export default Tests;