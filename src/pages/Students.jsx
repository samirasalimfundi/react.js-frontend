import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react';
import StuForm from '../Component/StuForm';
import AppDialog from '../Util/AppDialog';
import AppContext from '../Context/AppContext';
import { useContext } from 'react';
import CustomTable from '../Util/CustomTable';
import axios from 'axios';

export default function Students() {

const [studentList,setStudentList] = React.useState([])

const {getOpen,setOpen} = useContext(AppContext);

const open = getOpen();

 const handleOnSubmit = ()=>{
    setOpen(false)
}
const handleOnCancel = ()=>{
  setOpen(false)
}
const handleOnOpen = ()=>{
  setOpen(true)
}

React.useEffect(()=>{

  const fetchStudents = async()=>{

    try {
      const responseData = await axios.get("http://localhost:8085/student/all");
      const students = responseData.data;
      console.log('students :',students);

      setStudentList(students)
      
    } catch (error) {
        console.log(error);
        
    }
  }
  fetchStudents()
},[open])

  return (
    <Stack spacing={3}>
      <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={9}>
      <Stack justifyContent={'left'}>
            <Typography variant="h5" component="div">
                    Students
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    List of students
                </Typography>
            </Stack>
      </Grid>
      <Grid item xs={3}>
      <Button onClick={handleOnOpen} variant='contained' color='warning'>Add Student</Button>
      </Grid>
    </Grid>
    <AppDialog title={"Student Form"} children={<StuForm onSubmit={handleOnSubmit} onCancel={handleOnCancel}/>} open={open} />
    
    
  </Box>

  <CustomTable rows={studentList} pageName={"students"}/>
 
    </Stack>
    
  )
}
