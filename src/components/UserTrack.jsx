import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState, useEffect} from 'react'
import {useMoralis} from "react-moralis";
import {Button, Form, Container, Col, Row, Badge} from 'react-bootstrap'
import defaultTheme from './theme/index.ts';
import axios from "axios";
import '../styles/styles.css'
import  { Navigate, useNavigate } from 'react-router-dom'
import {
    SkillTreeGroup,
    SkillTree,
    SkillProvider,
    SkillType,
    SkillGroupDataType,
    SavedDataType
  } from 'beautiful-skill-tree';
import { useParams } from "react-router-dom";

const UserTrack = (props)=>{
  let navigate = useNavigate();
  const {handle} = useParams()
  useEffect(() => {
    getTree()
  },[]);

  const getTree =  () => { 
    axios.get("/getUserTree", {params: {username:handle}}).then((response)=>{
        console.log("ICI")
        console.log(response.data)
        setNodeState([response.data.nodeStates])
        setUserTree([response.data.testTree])
        return response.data
    })
    .catch(error => console.error(error))
  }

    const [userTree, setUserTree] = useState([{
      id: 'item-one',
      title: 'Coding basics',
      tooltip: {
        content:
          'This node is the top most level, and will be unlocked, and ready to be clicked.',
      },
      children: [],
    },])

    const [nodeState,setNodeState]= useState([{}])
    
    const listOfTests = props.tests

    const difference = (obj1, obj2) => {
      let keyFound = false;
      Object.keys(obj1).forEach(key => {
         if(obj1[key] !== obj2[key]){
            return keyFound = key;
         }
      });
      return keyFound || -1;
   };
    function handleSave(
      storage: ContextStorage,
      treeId: string,
      skills: SavedDataType
    ) {
      console.log("====> Clicked")
      console.log(skills)
      console.log(nodeState[0])
      var idOfText = difference(skills, nodeState[0])
      var testToOpen = listOfTests.find(x => x._id === idOfText)
      console.log(testToOpen)
      if(testToOpen.testType==="QCM"){
          if (!testToOpen.testDone){
            console.log("ICI")
            navigate("../quiz/"+testToOpen._id+"/user/"+props.userID, { replace: true });
          }
      }
      else if (testToOpen.testType==="Code"){
          if (!testToOpen.testDone){
            console.log("Code")
            navigate("../codingTest/"+testToOpen._id+"/user/"+props.userID, { replace: true });
      }
      }
    }
    var skilltree = () => {
      if (Object.keys(nodeState[0]).length != 0 && Object.keys(userTree[0]).length != 0){
        const savedData: SavedDataType = nodeState[0];
        const data: SkillType[] = userTree
        return <div> <SkillProvider  >
        <SkillTreeGroup theme={defaultTheme}>
            {() => {
                  console.log("SAVED DATA ")
                  console.log(savedData)
                  console.log(data)
                  return <SkillTree treeId="basic-birch" title="" data={data} savedData={savedData} handleSave={handleSave}/>

            }}
        </SkillTreeGroup>
        </SkillProvider>
        
         </div>
      }
      else{
        return <div style={{color:"white"}}></div>
      }

    
    }
    return <div >
    <div  style={{backgroundColor: '#282c34'}}>
            <Container style={{backgroundColor: '#282c34', marginTop:"3px", height:"80vh"}}>
            
            <div style={{backgroundColor: '#282c34', marginLeft:"30%", marginRight:"30%", borderRadius:"10px"}}>
                <div className="h4" style={{textAlign:"center", paddingTop:"50px", color:"#FFCD4D", zIndex: "auto"}}> Your skill tree </div>
                
            {skilltree()}
            </div>
            </Container>
            </div>
    </div>
}

export default UserTrack