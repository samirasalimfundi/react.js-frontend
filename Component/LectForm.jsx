import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button,  Stack } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from '../Context/AppContext';


export default function LectForm({onSubmit,onCancel}) {

  const [lecture,setLecture_Id] = React.useState(null)
  const [description ,setDescription] = React.useState(null)
  const [coursename,setCourseName] = React.useState(null)
  const [lecturename,setLectureName] = React.useState(null)

  const {getOpen,setOpen} = useContext(AppContext);
  const open = getOpen();
  console.log('open is :',open)
  
  const body = {
    CourseName:coursename,
    LectureName:lecturename,
    Description:description,
    Lecture_Id:parseInt(lecture)
  }

  const [studentList,setStudentList] = React.useState([])

  
  const saveLecture = ()=>{

    console.log("body",body)
  
      const save = async (body)=>{

        console.log('open is :',open)

        const responseLecture = await axios.post("http://localhost:8085/lecture/add",body);
        const data = responseLecture.data;

        console.log("data",data)
      }
  
      save(body)
      setOpen(false)
        
  }


  return (

    <Stack spacing={2}>
      
    
       <TextField onChange = {(event)=>{ setLecture_Id(event.target.value)
       }} name='Lecture_Id' placeholder='enter lecture_id' label="Lecture_ID" color='success' />

       <TextField onChange = {(event)=>{ setLectureName(event.target.value)
       }} name='LectureName' placeholder='enter topic name' label="LectureName" color='success' />

       <TextField onChange = {(event)=>{ setDescription(event.target.value)
       }} name='Description' placeholder='topic description' label="Description" color='success' />

       <TextField onChange = {(event)=>{ setCourseName(event.target.value)
       }} name='CourseName' placeholder='enter course name' label="CourseName" color='success' />

       
       <Stack direction={"row"} justifyContent={'center'} spacing = {2}>

        <Button onClick={saveLecture}  variant={"contained"} color={"success"}>Submit</Button>
        <Button onClick={onCancel} variant={"contained"} color={"error"}>Cancel</Button>
       </Stack>
    </Stack>
            
        
         
  );
}