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
        <h2>Welcome</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
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
