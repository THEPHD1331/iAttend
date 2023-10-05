import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import "./lists.css";
import SearchBar from "./SearchBar";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Loading from "../loading/Loading";

function Lists() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(true); // Initialize loading state

  useEffect(() => {
    // Make a GET request to fetch the data
    axios
      // .get("http://localhost:9595/api/students")
      .get("http://localhost:9595/api/students")
      .then((response) => {
        // Set the data immediately upon receiving the response
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      })
      .finally(() => {
        // Turn off loading after 3 seconds, regardless of success or failure
        setTimeout(() => {
          setLoading(false);
        }, 3000);
      });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const displayedData = data.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <div>
      <h1>Student List</h1>
      <div className="a">
        <div className="b">
          <SearchBar />
        </div>
        <div className="c">
          <Button variant="contained">
            <Link to={`/AddStudent`} id="btn">
              Add Student
            </Link>
          </Button>
        </div>
      </div>

      {loading ? ( // Render the Loading component if loading is true
        <Loading />
      ) : (
        <>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* <TableCell>Date</TableCell> */}
                  <TableCell>Roll No</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Attendance</TableCell>
                  <TableCell>Details</TableCell>
                  {/* <TableCell>Date</TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {displayedData.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Link to={`/Lists/${item.rollNo}`}>{item.rollNo}</Link>
                    </TableCell>
                    <TableCell>{item.studentName}</TableCell>
                    <TableCell>{item.attendance}</TableCell>
                    <TableCell>
                      <Link to={`/Lists/${item.rollNo}`}>
                      <Button variant="contained">View Details</Button>
                      </Link>
                      </TableCell>
                      {/* <TableCell>{item.date}</TableCell> */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      <div className="pag">
        <Stack spacing={2} justifyContent="center">
          <Pagination
            count={Math.ceil(data.length / itemsPerPage)}
            color="primary"
            page={page}
            onChange={handleChangePage}
          />
        </Stack>
      </div>
    </div>
  );
}

export default Lists;