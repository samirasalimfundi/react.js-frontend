import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import LectForm from '../Component/LectForm';
import StuForm from '../Component/StuForm';
import AppDialog from '../Util/AppDialog';
export default function Lectures() {
  const [open,setOpen] = React.useState(false)
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
                    Lectures
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    List of lectures
                </Typography>
            </Stack>
      </Grid>
      <Grid item xs={3}>
      <Button onClick={handleOnOpen} variant='contained' color='success'>Add Lecture</Button>
      </Grid>
    </Grid>
    <AppDialog title={"Lecture Form"} children={<LectForm onSubmit={handleOnSubmit} onCancel={handleOnCancel}/>} open={open} />
  </Box>
    
  )
}
