import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Button, Stack } from '@mui/material';
import axios from 'axios';
import { useContext } from 'react';
import AppContext from '../Context/AppContext';


export default function StuForm({onSubmit,onCancel}) {

  const [firstname,setFirstName] = React.useState(null)
  const [lastname,setLastName] = React.useState(null)
  const [registration ,setRegistrationNo] = React.useState(null)
  const [coursename,setCourseName] = React.useState(null)
  const [level,setLevel_ID] = React.useState(null)
  const [email,setEmail] = React.useState(null)

  const {getOpen,setOpen} = useContext(AppContext);
  const open = getOpen();
  console.log('open is :',open)
  
  const body = {
    FirstName:firstname,
    LastName:lastname,
    RegistrationNo:registration,
    CourseName:coursename,
    Email:email,
    Level_ID:parseInt(level)
  }

  const [studentList,setStudentList] = React.useState([])

  
  const saveStudent = ()=>{

    console.log("body",body)
  
      const save = async (body)=>{

        console.log('open is :',open)

        const responseStudent = await axios.post("http://localhost:8085/student/add",body);
        const data = responseStudent.data;

        console.log("data",data)
      }
  
      save(body)
      setOpen(false)
        
  }


  return (

    <Stack spacing={2}>

       <TextField onChange = {(event)=>{ setFirstName(event.target.value)
       }} name='FirstName' placeholder='enter name' label="FirstName" color='success' />
       
       <TextField  onChange = {(event)=>{ setLastName(event.target.value)
       }}  name='LastName' placeholder='enter last name' label="LastName" color='success' />

       <TextField onChange = {(event)=>{ setRegistrationNo(event.target.value)
       }}  name='RegistrationNo' placeholder='enter registration no' label="RegistrationNo" color='success' />

       <TextField onChange = {(event)=>{ setCourseName(event.target.value)
       }}  name='CourseName' placeholder='enter course name' label="CourseName" color='success' />

       <TextField onChange = {(event)=>{ setLevel_ID(event.target.value)
       }}  name='Level_ID' type='number' placeholder='enter student level' label="Level_ID" color='success' />

       <TextField onChange = {(event)=>{ setEmail(event.target.value)
       }}  name='Email' placeholder='enter email' label="Email" color='success' />

       <Stack direction={"row"} justifyContent={'center'} spacing = {2}>

        <Button onClick={saveStudent}  variant={"contained"} color={"success"}>Submit</Button>
        <Button onClick={onCancel} variant={"contained"} color={"error"}>Cancel</Button>
       </Stack>
    </Stack>
            
        
         
  );
}