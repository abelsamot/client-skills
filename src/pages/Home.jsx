import React from 'react';
import {Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from '../components/Signin.jsx';
import Signup from '../components/Signup.jsx';
import {useMoralis} from 'react-moralis'
import  { Navigate } from 'react-router-dom'

function Home() {
    const {isAuthenticated, logout}=useMoralis();
    if(isAuthenticated){
       return <Navigate to="/candidates"/>
    }

    return <div className="d-flex align-items-center justify-content-center page">
    <Signin/>
    </div>

}

export default Home;