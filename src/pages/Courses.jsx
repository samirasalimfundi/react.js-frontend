import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import CourseForm from '../Component/CourseForm';
import AppDialog from '../Util/AppDialog';
import AppContext from '../Context/AppContext';
import { useContext } from 'react';

export default function Courses() {

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

  return (
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={9}>
      <Stack justifyContent={'left'}>
            <Typography variant="h5" component="div">
                    Courses
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    List of courses
                </Typography>
            </Stack>
      </Grid>
      <Grid item xs={3}>
      <Button onClick={handleOnOpen} variant='contained' color='success'>Add Course</Button>
      </Grid>
    </Grid>
    <AppDialog title={"Course Form"} children={<CourseForm onSubmit={handleOnSubmit} onCancel={handleOnCancel}/>} open={open} />
  </Box>
    
  )
}

