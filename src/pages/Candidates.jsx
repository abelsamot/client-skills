import React from 'react';
import '../styles/styles.css'
import {useMoralis} from 'react-moralis'
import  { Navigate } from 'react-router-dom'
import ProfileBar from '../components/ProfileBar';
import CandidatesList from '../components/CandidatesList';
function Candidates() {

    const {isAuthenticated}=useMoralis();
    if(isAuthenticated){
    return <div>

        <ProfileBar/>
        <CandidatesList />
    </div>
    }
    return <Navigate to="/"/>
}

export default Candidates;
