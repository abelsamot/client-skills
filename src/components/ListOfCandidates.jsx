import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import {useMoralis} from "react-moralis";
import {Button, Form, Container, Col, Row, Modal} from 'react-bootstrap'
import '../styles/styles.css'
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory from 'react-bootstrap-table2-paginator';
import axios from "axios";
import AddCandidate from './AddCandidate';
import AddTestsToCandidate from './AddTestsToCandidate';
import  { Navigate, useNavigate } from 'react-router-dom'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import filterFactory, { selectFilter } from 'react-bootstrap-table2-filter';

const ListOfCandidates = ()=>{
    useEffect(() => {
        getUsers()
        console.log("ok")
      }, []);
    
    let navigate = useNavigate();
    const [users, setUsers] = useState([{
        username:"Abel ",
        email:"abel@redriverwest.com",
        post:"Full Stack",
        status:"Hired",
        stack:['React',", ",'Node'],
    }]);
    const defaultSorted = [{
        dataField: 'username',
        order: 'desc'
      }];

    const getUsers = () => {
        axios.get("/getUsers").then((response)=>{
            setUsers(response.data)
        })
        .catch(error => console.error(error))
    }
    

    const [addCandidate,setAddCandidate]=useState(false)
    const [addTestsToCandidate,setaddTestsToCandidate]=useState(false)
    const [candidateUserName,setcandidateUserName]=useState("")

    const selectOptions = {
        0: 'Back-end Developer',
        1: 'Blockchain developer',
        2: 'Front-end Developer'
      };
    const data = users
    const columns=[{
        dataField:"username",
        text:"Name",
        sort:true
    },
    {
        dataField:"email",
        text:"E-mail",
        sort:true,
    },
    {
        dataField:"post",
        text:"Position",
        sort:true,
        formatter: cell => selectOptions[cell],
        filter: selectFilter({
            options: selectOptions,
            defaultValue: 2})
    },
    {
        dataField:"status",
        text:"Status",
        sort:true
    },
    {
        dataField:"score",
        text:"Total score",
        sort:true
    },
    {
        dataField:"stack",
        text:"Stack",
    }]

    const addedCandidate=(value) => {
        setcandidateUserName(value)
        setAddCandidate(false)
        setaddTestsToCandidate(true)
    }

    const closeTest =()=>{
        setaddTestsToCandidate(false)
    }

    var rowEvents= {
        onClick: function(e, row){
            console.log(row.username)
            navigate("../user/" + row.username, { replace: true });
        }
       }
    
    const [userInfo,setUserInfo] = useState([])
    const [showUser, setShowUser] = useState(false);


    return <div>
        <Container className= "w-100">
            <Row style={{height:"80px"}}></Row>
            <Row style={{height:"80px"}}>
            <Col xl={3} lg={4}  xs={5} className="d-flex align-items-center"> <h3 className="h3" style={{color:"#FFCD4D"}}> My candidates</h3></Col>
            <Col xl={6} lg={4}   xs={2} > </Col>
            <Col xl={3} lg={4}  xs={5} className="d-flex align-items-center justify-content-end" >
            <Button class="btn btn-lg btn-primary login" onClick={()=>setAddCandidate(true)}>Add candidate</Button>
            
            
            <Modal show={addCandidate}>
                
                
                <Modal.Header> <Button onClick={()=>setAddCandidate(false)}> X </Button> </Modal.Header>
                <Modal.Body> <AddCandidate candidateAdded = {addedCandidate} /> </Modal.Body>
                <Modal.Footer> </Modal.Footer>
            
            </Modal>

            <Modal show={addTestsToCandidate} size="xl">
            
                <Modal.Body> <AddTestsToCandidate closeTest={closeTest} candidateUserName={candidateUserName}/> </Modal.Body>
            
            </Modal>



            </Col>
            </Row>
            <Row>
                
                <BootstrapTable 
                style={{backgroundColor:"black"}}
                bootstrap4
                keyField="objectId" 
                columns={columns } 
                data={data} 
                rowEvents={rowEvents} 
                filter={ filterFactory() } 
                pagination={ paginationFactory() }
                hover
                />
            </Row>
        </Container>
    </div>
}

export default ListOfCandidates