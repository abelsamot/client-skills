import React from 'react';
import {Button, Form, Card, Badge, Modal, Container,ListGroup} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useMoralis} from 'react-moralis'
import {useState, useEffect} from 'react'
import  { Navigate } from 'react-router-dom'
import '../styles/test.css'


function ListOfTests(props) {
    const tests = props.testsSelected
    console.log(tests )
    return  <div>
    <ListGroup>
    {tests.map(test =>(<ListGroup.Item style={{color:"#FFCD4D", fontWeight:600}}>{test.testName}</ListGroup.Item>))}
    </ListGroup>
        </div>
        
    }

export default ListOfTests;