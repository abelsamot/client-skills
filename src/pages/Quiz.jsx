import React from 'react';
import '../styles/styles.css'
import {useMoralis, MoralisProvider} from 'react-moralis'
import  { Navigate } from 'react-router-dom'
import ProfileBar from '../components/ProfileBar';
import CandidatesList from '../components/CandidatesList';
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import {Button, Form, Container, Col, Row, Badge, Nav, ListGroup, Link} from 'react-bootstrap'
import axios from "axios";
import '../styles/quiz.css'
import QuizHeader from '../components/QuizHeader';
import QuizStart from '../components/QuizStart';
import Web3 from "web3";

const web3 = new Web3(Web3.givenProvider);


function Quiz() {
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    const login = async () => { 
        if (!isAuthenticated) {
        console.log("iiiiii")
        await authenticate({signingMessage: "Log in using Moralis" })
            .then(function (user) {
                console.log("oooooo")
                console.log(user)
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }
  
      const logOut = async () => {
        await logout();
        console.log("logged out");
      }

    const sendTestHasBegun = () => {
        const bodyFormData = {
            testId:quizID,
            testBegun:true,
            userId:userID
        } 
    }


    const addTests = () =>{
        const bodyFormData = {
            testId:quizID,
            testScore:((score*100)/questions.length),
            userId:userID
        }
        axios.post("/addTestsResultsToUser", null, {params:bodyFormData})
                .then(function (response) {
                //handle success
                console.log(response);
                })
                .catch(function (response) {
                //handle error
                console.log(response);
                });
        }

    const {quizID, userID} = useParams();
	const [user1, setUser] = useState([{}])
    const [test, setTest] = useState([{}])
    const [testAlreadyBegun, setTestAlreadyBegun] = useState(false)
    const [qcmQuestionList, setQcmQuestionList] = useState([{}])
	useEffect(() => {
        if (isAuthenticated) {
           console.log(user)
          }
        getUser()
        getTest()
        getQuestions()
      }, [isAuthenticated]);

    const getUser = () => {
        axios.get("/getUserByID", {params: {id:userID}}).then((response)=>{
            setUser(response.data)
            let obj = response.data.tests.find(o => o._id === quizID);
            if (obj.hasOwnProperty('testBegun')){
                setTestAlreadyBegun(obj.testBegun)
            }
            return response.data
        })
        .catch(error => console.error(error))
    }

    const getTest = () => {
        axios.get("/getTestByID", {params: {id:quizID}}).then((response)=>{
            setTest(response.data)
			console.log(response.data)
            return response.data
        })
        .catch(error => console.error(error))
    }

    const getQuestions= () => {
        axios.get("/getQCMTestQuestions", {params: {id:quizID}}).then((response)=>{
            setQcmQuestionList(response.data)
            console.log(response.data)
            return response.data
        })
        .catch(error => console.error(error))
    }

    const questions = qcmQuestionList
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [quizStep, setQuizStep ] = useState("Start");
	const [score,setScore] = useState(0);

	const handlseAnswerButtonClick = (isCorrect) =>{
        console.log("ok")
        
		if(isCorrect===true){
			const newScore= score+1
			setScore(Math.round(newScore))
		}
		const nextQuestion = currentQuestion+1;
		if(nextQuestion< questions.length){
			setCurrentQuestion(nextQuestion)
		} else{
			setQuizStep("End")
            addTests()
            // add score to user
		}
	}

    const [quizState,setQuizState]= useState()
    const changeQuizStep = () => {
        const bodyFormData = {
            testId:quizID,
            userId:userID
        }
        axios.post("/testBegun", null, {params:bodyFormData})
                .then(function (response) {
                //handle success
                const rep = response;
                })
                .catch(function (response) {
                //handle error
                console.log(response);
                });
        setQuizStep("Ongoing")
        setlaunchTimer(true)
        console.log(launchTimer)
        setTime(test.durationInMinutes)
    }

    const finishQuiz = () =>{
        setQuizStep("End")
        addTests()
        // add score to user

    }

    const [time,setTime] =useState()
    const [launchTimer,setlaunchTimer]= useState(false)

    return (<div className='app'>

    
    

    {(()=> {

        if(quizStep === "End"){
            return(
                <Container >
            <div style={{height:"200px"}}></div>
            <div >
            <div className='score-section d-flex justify-content-center'>You scored {score} out of {questions && questions.length}</div>
            
            <div style={{height:"50px"}}></div>
            <p> {user && user.get('ethAdress')} </p>
            <div className='score-section d-flex justify-content-center'><Button href={"http://localhost:3000/user/"+user1.username}> Get back to my profile </Button> </div></div>
            </Container>
            )}
        else if (quizStep === "Ongoing"){
            if(testAlreadyBegun==false){
                return(
                    <Container className="">
                <Row>
                <div style={{height:"50px"}}></div>
                </Row>
                <QuizHeader time={time} launchTimer={launchTimer} user={user1} test={test} finishQuiz={finishQuiz}/>
                <Row>
                <div style={{height:"40px"}}></div>
                </Row>
                <Row>
                <Col sm={6}>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion+1}</span>/{questions && questions.length}
                        </div>
                        <div className='question-text'>{questions && questions[currentQuestion].question}</div>
                        <img style={{borderRadius:"10px"}} src={questions && questions[currentQuestion].questionImage} />
                    </div>
                </Col>
                <Col sm={6}>
                    <div className='answer-section'>
                    <ListGroup activeKey={quizState}>
                    {questions && questions[currentQuestion].answersOptions.map((answersOptions)=>(
                        <ListGroup.Item eventKey={answersOptions.answerText} className="quizButton" 
                        onMouseEnter={() => setQuizState(answersOptions.answerText)}
                        onMouseLeave={() => setQuizState()}
                        onClick={() =>handlseAnswerButtonClick(answersOptions.isCorrect)}>{answersOptions.answerText}
                        
                        </ListGroup.Item>
                        ))}
                    </ListGroup>
                    </div>
                </Col>
                </Row>
                </Container>)
                }
            else{
                return(
                    <Container className="">
                <Row>
                <div style={{height:"50px"}}></div>
                </Row>
                <QuizHeader time={time} launchTimer={launchTimer} user={user1} test={test} finishQuiz={finishQuiz}/>
                <Row>
                <div style={{height:"200px"}}></div>
                </Row>
                <Row>
                <div className="d-flex align-items-center justify-content-center h5" style={{color:"red"}}> You have already started the test once, you can't do it again </div>
                </Row>
                </Container>
                )
            }
        }

        else if (quizStep === "Start"){

            if(testAlreadyBegun==false){
            return(
                <Container>
                <div style={{height:"50px"}}></div>
                <QuizHeader user={user1} test={test}/>
                <div style={{height:"50px"}}></div>
                <QuizStart test={test} quizStep={changeQuizStep}/>
                </Container>
                )}
            else{
                return(
                    <Container className="">
                <Row>
                <div style={{height:"50px"}}></div>
                </Row>
                <QuizHeader time={time} launchTimer={launchTimer} user={user1} test={test} finishQuiz={finishQuiz}/>
                <Row>
                <div style={{height:"200px"}}></div>
                </Row>
                <Row>
                <div className="d-flex align-items-center justify-content-center h5" style={{color:"red"}}> You have already started the test once, you can't do it again </div>
                </Row>
                </Container>
                )
            }
        }
        
    })()}
</div>)
}
export default Quiz;