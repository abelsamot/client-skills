import React from 'react';
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import {useMoralis} from "react-moralis";

const Signup = ()=>{

    const {signup, Moralis }= useMoralis()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const signupAndReset = (email, password) => {
        signup(email, password, email)
        //getting email from email input
        if (email) {
          Moralis.User.requestPasswordReset(email)
            .then(() => {
              alert("Successfully Password Email Sent");
              // Password reset request was sent successfully
            })
            .catch((error) => {
              // Show the error message somewhere
              alert("Error: " + error.code + " " + error.message);
            });
        } else {
          alert("Enter email first");
        }
      };

    return <div>
        <Form controlId="formEmail" className="d-grid gap-3">
        <Form.Group className="d-grid gap-3">
            <Form.Label className="d-flex justify-content-center h3 mb-3 fw-normal">Add a user from your company </Form.Label>
            <hr/>
            <Form.Control value={email} onChange={(event)=>setEmail(event.currentTarget.value)} type="email" placeholder="Email address"/>
            <Form.Control value={password} onChange={(event)=>setPassword(event.currentTarget.value)} type="password" placeholder="Password"/>
        </Form.Group>
        <Button class="w-100 btn btn-lg btn-primary login" onClick={()=> signupAndReset(email, password)}>Add user</Button>
    </Form>
    </div>
}

export default Signup