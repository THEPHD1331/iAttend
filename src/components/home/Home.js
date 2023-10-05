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
 
{/* ChatGPT generated code below, edit according to you */}

      {/* <div className="container">
      <h1>Welcome to iAttend</h1>
      <p>Your Gateway to Effortless Attendance Management!</p>
      <p>At iAttend, we've redefined the way educational institutions track student attendance. Say goodbye to the hassle of manual roll-calls and embrace a smarter, more efficient solution.</p>
      <p>Experience the Future of Attendance Tracking:</p>
      <ul>
        <li>Efficiency Redefined</li>
        <li>Security First</li>
        <li>User-Friendly</li>
        <li>Powerful Insights</li>
        <li>Scalable Solution</li>
        <li>Future-Ready</li>
      </ul>
      <p>Join the iAttend Revolution</p>
      <div className="cta-buttons">
        <a href="#" className="cta-button">Get Started</a>
        <a href="#" className="cta-button">Learn More</a>
      </div>
    </div> */}
        <p>

       <h1> Welcome to iAttend – Your Gateway to Effortless Attendance Management!</h1>

At iAttend, we've redefined the way educational institutions track student attendance. Say goodbye to the hassle of manual roll-calls and embrace a smarter, more efficient solution.

Experience the Future of Attendance Tracking  <br/><br/>

Our cutting-edge Face Recognition Student Attendance System harnesses the power of advanced facial recognition technology to revolutionize the classroom experience. It's as simple as a smile! iAttend effortlessly identifies and records attendance, ensuring accuracy and security with every interaction.
<br/><br/>
<h2>Why Choose iAttend?</h2>
<br/>
🚀 <b>Efficiency Redefined</b>: iAttend marks a departure from traditional attendance-taking methods, saving valuable class time and administrative effort.
<br/><br/>
🔐 <b>Security First</b>: Rest easy knowing your students' privacy is safeguarded. iAttend adheres to the highest data security standards, ensuring the confidentiality of facial data.
<br/><br/>
🌟 <b>User-Friendly</b>: Our intuitive interface is designed with users in mind, making attendance tracking accessible to all.
<br/><br/>
📊 <b>Powerful Insights</b>: Dive into attendance analytics, identify trends, and make informed decisions to enhance your educational institution's operations.
<br/><br/>
🌐 <b>Scalable Solution</b>: Whether you're managing a single classroom or an entire campus, iAttend scales effortlessly to meet your needs.
<br/><br/>
📈 <b>Future-Ready</b>: We're committed to innovation. iAttend is built to adapt, evolve, and stay at the forefront of attendance management technology.
<br/><br/>
<h3>Join the iAttend Revolution!</h3>
<br/>
Welcome to a future where attendance tracking is seamless, secure, and intelligent. Join the iAttend revolution and embrace the new standard in attendance management.
<br/><br/>
Ready to elevate your institution's attendance tracking experience? Try iAttend today and experience the future of education, one smile at a time.<br/><br/>
 <b>BEGIN HERE!</b>

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
