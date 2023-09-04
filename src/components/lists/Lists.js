import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";
import axios from 'axios';
import { Link } from "react-router-dom";
import './lists.css'

function Lists() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch the data
    axios.get("YOUR_API_ENDPOINT")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
    <h1>Student List</h1>

<div>
<Button variant="contained">
<Link to={`/AddStudent`} id="btn">AddStudent</Link>
</Button>
</div>

    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Roll No</TableCell>
            <TableCell>Attendance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.rollNo}</TableCell>
              <TableCell>{item.attendance}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  )
}

export default Lists
