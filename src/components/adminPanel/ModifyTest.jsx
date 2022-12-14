import React from 'react';
import {Button, Container, Row, Col, Grid, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useMoralis} from 'react-moralis'
import {useState, useEffect} from 'react'
import  { Navigate } from 'react-router-dom'
import { flushSync } from 'react-dom';
import axios from "axios";
import TestCard from '../TestCard.jsx';
import AddQuestionToTest from './AddQuestionToTest.jsx';
import ChangeTestValues from './ChangeTestValues.jsx';


const ModifyTest = ()=>{

    const {user, isAuthenticated}=useMoralis();

    useEffect(() => {
        getTests()
        console.log("==> ICI")
      }, []);
    const [tests, setTests] = useState([]);
    
    const [testSelectedName, setTestSelectedName] = useState();
    const [modifyState, setModifyState] = useState();
    const [testSelectedType, setTestSelectedType] = useState();
    const [testSelectedId, setTestSelectedId] = useState();
    const [testData,setTest] = useState({})
    const [qcmQuestionsList, setQcmQuestionsList] = useState([{
        testName:""
    }])



    const getTests = () => {
        axios.get("/getTests").then((response)=>{
            setTests(response.data)
        })
        .catch(error => console.error(error))
    }


    
    async function addNewQuestion(name,id,typeOfTest){
        axios.get("/getTestByID", {params: {id:id}}).then((response)=>{
            setTest(response.data)
            setTestSelectedName(name);
            setTestSelectedId(id)
            setTestSelectedType(typeOfTest);
            setModifyState("addNewQuestion")
            console.log(response.data.categories)
            return response.data
        })
        .catch(error => console.error(error))
    }
    async function changeTest(name,id,typeOfTest){
        console.log("yep")
        axios.get("/getTestByID", {params: {id:id}}).then((response)=>{
            axios.get("/getAllQuestionsForOneQCM", {params: {id:id}}).then((allquestions)=>{
                setTest(response.data)
                setQcmQuestionsList(allquestions.data)
                setTestSelectedId(id)
                setTestSelectedName(name);
                setTestSelectedType(typeOfTest);
                setModifyState("change")
                return allquestions.data
            })
            return response.data
        })
        .catch(error => console.error(error))
    }

    var leftWindow = () => {
        if(testSelectedType=="QCM" & modifyState=="addNewQuestion"){
            return <AddQuestionToTest testSelectedId={testSelectedId} categories= {testData.categories}/> 
        }
        else if(testSelectedType=="QCM" & modifyState=="change"){
            return <div>
            
            <ChangeTestValues testSelectedId={testSelectedId}
                smallDescription = {testData.smallDescription}
                longDescription = {testData.longDescription}
                difficulty = {testData.difficulty}
                durationInMinutes = {testData.durationInMinutes}
                nbOfQuestions = {testData.nbOfQuestions}
                categories= {testData.categories}
                qcmQuestionsList={qcmQuestionsList}
            />
            
            </div>
        }
        else if(testSelectedType!="QCM" & modifyState=="addNewQuestion"){
            return <div style={{color:"black", fontWeight:400, fontSize:"16px"}}> Not possible to add coding questions for now </div>
        }
        else{
            return <div></div>
        }

    }

    return <div>
    {user.get('typeOfUser')==='Admin' ? 
        <Container className="d-flex justify-content-center">
        
            <Row>
                <Col lg={6} xs={12}>

                    <Container >
                <Row  className="d-flex justify-content-left">
                    {tests.map(cardInfo =>(
                        <Col lg={6} sm={12} >
                        <TestCard cardWidth='16rem' textSize="12px" buttonChangeIsVisible="true" buttonModifyIsVisible="true" changeTest={changeTest} modifyTest={addNewQuestion} hideMin="true" name={cardInfo.name} key={cardInfo._id} id={cardInfo._id} nbOfQuestions={cardInfo.nbOfQuestions} duration={cardInfo.durationInMinutes} longDescription={cardInfo.longDescription} smallDescription={cardInfo.smallDescription} typeOfTest={cardInfo.typeOfTest}/>
                        <div style={{height:"20px"}}></div>
                        </Col>
                    ))}
                </Row>
                </Container>
                </Col>

                <Col lg={6} xs={12}>
                    <Container >
                        <Row  className="d-flex justify-content-left">
                            <h2 style={{color:"#FFCD4D", fontWeight:600, fontSize:"20px"}} > {testSelectedName}</h2>
                            <div style={{height:"30px"}}></div>
                    
                            {leftWindow()}

                            
                        </Row>
                </Container>
                </Col>


            </Row>
        </Container>
        : <div className="d-flex align-items-center justify-content-center h5" style={{color:"red"}}> You are not an admin, you can't modify the tests </div>
    }
    </div>
}

export default ModifyTest