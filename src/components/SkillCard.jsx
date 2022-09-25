import React from 'react';
import {Button, Form, Card, Badge, Modal, Container, ProgressBar} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useMoralis} from 'react-moralis'
import {useState, useEffect} from 'react'
import  { Navigate } from 'react-router-dom'
import '../styles/test.css'
import { BsSearch } from "react-icons/bs";

function SkillCard(props) {
    
    const now = props.cardInfo.testScore;

    return  <div>

            
       <Card style={{ width: "16rem"}} className="testCard" >
            <Card.Body>
                <div style={{height:"10px"}}></div>
                <Card.Title style={{color:"#FFCD4D", fontWeight:600, fontSize:"18px"}}> {props.cardInfo.testName}</Card.Title>
                <Card.Text style={{fontWeight:300, fontSize: "12px"}}>
                <span style={{fontWeight:"600"}}>{props.username}</span> optained <span style={{fontWeight:"600"}}>{now}</span>  % in this test
                <div style={{height:"15px"}}></div>
                <ProgressBar variant="primary" now={now} label={`${now}%`} />
                </Card.Text>
                <div className="d-flex justify-content-end d-grid gap-2">
                
                </div>
            </Card.Body>
        </Card>
        </div>
        
    }



export default SkillCard;