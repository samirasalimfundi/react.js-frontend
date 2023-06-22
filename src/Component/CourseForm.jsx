import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button,  Stack } from '@mui/material';
import AppContext from '../Context/AppContext';
import { useContext } from 'react';
import axios from 'axios';


export default function CourseForm({onSubmit,onCancel}) {

  const [coursecode,setCourseCode] = React.useState(null)
  const [description ,setDescription] = React.useState(null)
  const [coursename,setCourseName] = React.useState(null)
  const [level,setLevel_ID] = React.useState(null)

  const {getOpen,setOpen} = useContext(AppContext);
  const open = getOpen();
  console.log('open is :',open)
  
  const body = {
    CourseName:coursename,
    Coursecode:coursecode,
    Description:description,
    Level_ID:parseInt(level)
  }

  const [studentList,setStudentList] = React.useState([])

  
  const saveCourse = ()=>{

    console.log("body",body)
  
      const save = async (body)=>{

        console.log('open is :',open)

        const responseCourse = await axios.post("http://localhost:8085/course/save",body);
        const data = responseCourse.data;

        console.log("data",data)
      }
  
      save(body)
      setOpen(false)
        
  }


  return (

    <Stack spacing={2}>
      
      
       <TextField onChange = {(event)=>{ setCourseCode(event.target.value)
       }} name='CourseCode' placeholder='enter course_id' label="CourseCode" color='success' />

       <TextField onChange = {(event)=>{ setCourseName(event.target.value)
       }} name='CourseName' placeholder='course name' label="CourseName" color='success' />
       
       <TextField onChange = {(event)=>{ setDescription(event.target.value)
       }} name='Description' placeholder='course description' label="Description" color='success' />

       <TextField onChange = {(event)=>{ setLevel_ID(event.target.value)
       }} name='Level_ID' placeholder='enter level_Id' label="Level_ID" color='success' />

       
       <Stack direction={"row"} justifyContent={'center'} spacing = {2}>

        <Button onClick={saveCourse}  variant={"contained"} color={"success"}>Submit</Button>
        <Button onClick={onCancel} variant={"contained"} color={"error"}>Cancel</Button>
       </Stack>
    </Stack>
            
        
         
  );
}