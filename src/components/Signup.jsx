import React from 'react';
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react'
import {useMoralis} from "react-moralis";

const Signup = ()=>{

    const {signup}= useMoralis()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()

    return <div>
        <Form controlId="formEmail" className="d-grid gap-3">
        <Form.Group className="d-grid gap-3">
            <Form.Label className="d-flex justify-content-center h3 mb-3 fw-normal">Add a user from your company </Form.Label>
            <hr/>
            <Form.Control value={email} onChange={(event)=>setEmail(event.currentTarget.value)} type="email" placeholder="Email address"/>
            <Form.Control value={password} onChange={(event)=>setPassword(event.currentTarget.value)} type="password" placeholder="Password"/>
        </Form.Group>
        <Button class="w-100 btn btn-lg btn-primary login" onClick={()=> signup(email, password, email)}>Add user</Button>
    </Form>
    </div>
}

export default Signup