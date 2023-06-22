import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Students from '../pages/Students';

const TableRowsSwicth = ({row,pageName})=>{
    switch (pageName) {
      case 'students':
        return(
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Firstname}
              </TableCell>
              <TableCell >
                {row.RegistrationNo}
              </TableCell>
              <TableCell >
                {row.CourseName}
              </TableCell>
              <TableCell >
                {row.Email}
              </TableCell>
              <TableCell >
                {row.Level_ID}
              </TableCell>
            </TableRow>

        )
    
      default:
        break;
    }
}

export default TableRowsSwicth;

