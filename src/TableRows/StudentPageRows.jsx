import React from 'react'
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
export default function StudentPageRows({row}) {
  return (
    <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.Firstname}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.RegistrationNo}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.CourseName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Email}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.Level_ID}
              </TableCell>
            </TableRow>

  )
}
