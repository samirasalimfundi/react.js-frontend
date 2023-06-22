import React from 'react'
import { Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'

import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username,setUsername] = React.useState(null)
  const [password,setPassword] = React.useState(null)
  const navigate = useNavigate();
  const onUsernameChange = (event)=>{
    setUsername(event.target.value)
}

const onUsernamePassword = (event)=>{
  setPassword(event.target.value)
}

  const handleSubmit = ()=>{
    try {
      const url = "http://localhost:8085/user/all";
      const fetch = async (url)=>{
          const response  = await axios.get(url);

          for (let index = 0; index < response.data.length; index++) {
              
            if (username == response.data[index]['UserName'] && password == response.data[index]['UserPassword']) {
              const userFound = response.data[index];

              //converting user object to string
              localStorage.setItem("token",JSON.stringify(userFound))  
      
              navigate('/home')
                break;
                
            }else continue;
            
        }


        //console.log('resposse :',username,password);
      }
      fetch(url)
    } catch (error) {
      console.log('erorr is :',error);
      
    }
}
  

//   const authenticate =async ()=> {
//     const api  =  await axios.get(" ");
//     const response = api.data
//     const userData = listOfUsers.map(data=>{
//       if (user == data.UserName && password== data.UserPassword) {
//         console.log("authenticate")
//           return data;   
//       }
    
// })

    
  


  return (
    <Stack
     justifyContent={'center'}
     direction={'row'}>
        <Stack 
          sx={{backgroundColor:'#fcf4ca'}}
          justifyContent={'center'}
          direction={'row'}
          borderRadius={3}
          p={5}
          width={"40%"}
        >
            <Stack mt={"10%"} sx={{width:"100%"}} direction={"column"} spacing={2}>
                <Stack justifyContent={'center'} spacing ={2}
                direction={'row'} >
                <Typography
                variant='h4'
                >WELCOME</Typography>
                </Stack>
                
                <TextField onChange= {onUsernameChange} color='success' id="filled-basic" name = "UserName" label="Username" variant="filled" /> <br />


                <TextField onChange= {onUsernamePassword}  required color='success' id="filled-basic" name="UserPassword" label="Password" variant="filled" /> <br />
                 <Button onClick = {handleSubmit} type="submit" color='inherit' sx={{backgroundColor:'#5EBEC4'}} variant='contained'>LOGIN</Button>

                
            </Stack>
            
        </Stack>
    </Stack>
  )
}
