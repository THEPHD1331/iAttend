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
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios
  //   .get("https://testforapipart2.vercel.app/api/student-api-2")
  //     // .get("http://localhost:9595/api/students")
  //     .then((response) => {
  //       setData(response.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //       setLoading(false);
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("https://testforapipart2.vercel.app/api/student-api-2")
      .then((response) => {
        setData(response.data.userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   const filtered = data.filter((item) => {
  //     if (typeof item.name === 'string') {
  //       return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  //     }
  //     return false;
  //   });
  //   setFilteredData(filtered);
  // }, [data, searchQuery]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // const displayedData = filteredData.slice(
  //   (page - 1) * itemsPerPage,
  //   page * itemsPerPage
  // );

  return (
    <div>
      <h1>Student List</h1>
      <div className="a">
        <div className="b">
          <SearchBar onChange={(query) => setSearchQuery(query)} />
        </div>
        <div className="c">
          <Button variant="contained">
            <Link to="/AddStudent" id="btn">
              Add Student
            </Link>
          </Button>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <>
          {/* <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Roll No</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Year</TableCell>
                  <TableCell>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <Link to={`/Lists/${item.rollNo}`}>{item.rollNo}</Link>
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.year}</TableCell>
                    <TableCell>
                      <Link to={`/Lists/${item.rollNo}`}>
                        <Button variant="contained">View Details</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}

           <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Roll No</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Year</TableCell>
                <TableCell>View Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Link to={`/Lists/${item.roll}`}>{item.roll}</Link>
                  </TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.year}</TableCell>
                  <TableCell>
                    <Link to={`/Lists/${item.roll}`}>
                      <Button variant="contained">View Details</Button>
                    </Link>
                  </TableCell>
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