import React from 'react';
import {Button, Form, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import {useMoralis} from "react-moralis";
import Multiselect from 'multiselect-react-dropdown';
import axios from "axios";

const AddCandidate = (props)=>{

    const [email,setEmail]=useState()
    const [firstName,setFirstName]=useState()
    const [lastName,setLastName]=useState()
    const [post,setPost]=useState([])
    const [stack,setStack]=useState()
    const [seniority,setSeniority]=useState([])
    const typeOfUser = "Candidate"
    const userStatus = "Test sent"
    var stackOptions = {
        options: [{name: 'React ', id: 1},{name: 'Node.JS ', id: 2},{name: 'Python ', id: 3},{name: 'Solidity ', id: 4},{name: 'Java Script ', id: 5},{name: 'Mongo DB ', id: 6}]
    };
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    const setValues = () =>{
        var stackList = []
        stack.forEach(function(oneStack){
            stackList.push(oneStack.name)
        })
        console.log(stackList)
        const bodyFormData = {
            _id:makeid(24),
            email:email,
            post:post,
            stack:stackList,
            seniority: seniority,
            lastName: lastName,
            firstName: firstName,
            typeOfUser: typeOfUser,
            userStatus: userStatus,
        }
        axios.post("/addUser", null, {params:bodyFormData})
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });
    }

    return <div>
    <Container className= "w-75">
        <Form controlId="formEmail" className="d-grid gap-3">
        <Form.Group className="d-grid gap-3">
            <Form.Label className="d-flex justify-content-center h4 mb-3 fw-normal">Add a candidate </Form.Label>
            <Form.Control value={email} onChange={(event)=>setEmail(event.currentTarget.value)} type="email" placeholder="Email address"/>
            <Form.Control value={firstName} onChange={(event)=>setFirstName(event.currentTarget.value)} type="text" placeholder="First Name"/>
            <Form.Control value={lastName} onChange={(event)=>setLastName(event.currentTarget.value)} type="text" placeholder="Last Name"/>
            <Form.Select value={post} onChange={(event)=>setPost(event.currentTarget.value)} type="text">
            <option hidden value > Position </option>
            <option>Full-Stack Developer</option>
            <option>Front-end Developer</option>
            <option>Back-end Developer</option>
            <option>Solidity Developer</option>
            <option>Full-Stack Blockchain Developer</option>
            </Form.Select>
            <Multiselect
                value={stack}
                onSelect={(event)=>setStack(event)}
                onRemove={(event)=>setStack(event)}
                options={stackOptions.options} // Options to display in the dropdown
                displayValue="name"
                placeholder="Stack"
                showCheckbox // Property name to display in the dropdown options
                />
            <Form.Select value={seniority} onChange={(event)=>setSeniority(event.currentTarget.value)} type="text">
            <option hidden value > Seniority </option>
            <option>Junior</option>
            <option>3 to 5 years</option>
            <option>5 to 8 years</option>
            <option>8 to 12 years</option>
            <option>12+ years</option>
            </Form.Select>
        </Form.Group>
        <Button class="w-100 btn btn-lg btn-primary login" onClick={() => {
            setValues()
            const userName=firstName + " " + lastName
            props.candidateAdded(userName)
        }
        }>Add new candidate</Button>
    </Form>
        <div style={{height:"30px"}}></div>
    </Container>
    </div>
}

export default AddCandidate