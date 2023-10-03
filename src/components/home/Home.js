import React from "react";
import "./home.css";
import facehome from "../../assest/face-home.jpeg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="main">
      <div id="1">
        <h2> Welcome to the Future of Attendance Tracking</h2>
        <p>

Say goodbye to the traditional paper-and-pen attendance registers. Embrace cutting-edge technology with our iATTEND, where the future meets education. <p> We understand that every second counts in the classroom, and that's why we've revolutionized attendance tracking for schools and educational institutions. </p>
<p> Our system harnesses the power of facial recognition to effortlessly and accurately mark the attendance of students. With a simple glance, students are accounted for, giving educators more time to focus on what truly matters - teaching. Join us in shaping the future of education, one face at a time.{" "}
</p>
        </p>
        <Stack spacing={2} direction="row">
          <Button variant="contained" >
            <Link to={`/Demo1`} id="btn"> Start</Link>
          </Button>
        </Stack>
      </div>
      <div id="2">
        <img src={facehome} alt="face-home" />
      </div>
    </div>
  );
}

export default Home;
