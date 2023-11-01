import React from 'react';
import "./about.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function About() {
  return (
  <div className="about-us-container">
    {/* <div className="group-project-guide">
      <h2>Our Group Project Guide</h2>
      <h3>Prof. Latesh Malik</h3>
      <p>HOD of CSE Department GCOEN</p>
    </div> */}
      {/* <div className="leader">
        <h3>Paras Dongre</h3>
        <p>Project Lead. CSE final year</p>
      </div>
      <div className="member">
        <h3>Ameya Thakur</h3>
        <p>CSE final year</p>
      </div>
      <div className="member">
        <h3>Parag Tekade</h3>
        <p>CSE final year</p>
      </div>
      <div className="member">
        <h3>Harsh Masane</h3>
        <p>CSE final year</p>
      </div> */}


    <div id="4">
    <Card sx={{ maxWidth: '100%', margin: "8rem", height: "auto", background: 'linear-gradient(to top, #ccffff , #ffffff)'}}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '30px' }}>
               Our Group Project Guide
          </Typography>
          <br></br>
          <Typography variant="body2" color="text.tertiary" style={{ fontSize: '18px' }}>  
          <h3>Prof. Latesh Malik</h3>
      <p>HOD of CSE Department GCOEN</p>      
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>


    <div>
    <h2>Our Team Members</h2>

<div style={{display: 'flex'}}>
<Card sx={{ width: '27rem', margin: "4rem", height: "auto", background: 'linear-gradient(to top, #ccffff , #ffffff)'}}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '30px' }}>
              Paras Dongre
          </Typography>
          <br></br>
          <Typography variant="body2" color="text.secondary" style={{ fontSize: '18px' }}>  
          <h3>Team Lead</h3>
      <p>CSE Final Year</p>      
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{width: '27rem', margin: "4rem", height: "auto", background: 'linear-gradient(to top, #ccffff , #ffffff)'}}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '30px' }}>
        Ameya Thakur         
         </Typography>
          <br></br>
          <Typography variant="body2" color="text.secondary" style={{ fontSize: '18px' }}>  
          <p>CSE Final Year</p>      
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width: '27rem', margin: "4rem", height: "auto", background: 'linear-gradient(to top, #ccffff , #ffffff)'}}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '30px' }}>
               Parag Tekade
          </Typography>
          <br></br>
          <Typography variant="body2" color="text.secondary" style={{ fontSize: '18px' }}>  
          <p>CSE Final Year</p>       
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ width: '27rem', margin: "4rem", height: "auto", background: 'linear-gradient(to top, #ccffff , #ffffff)'}}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '30px' }}>
               Harsh Masane
          </Typography>
          <br></br>
          <Typography variant="body2" color="text.secondary" style={{ fontSize: '18px' }}>  
          <p>CSE Final Year</p>    
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
</div>
  
    </div>


<div id="4">
    <Card sx={{ maxWidth: '100%', margin: "8rem", height: "16rem", background: 'linear-gradient(to top, #ccffff , #ffffff)'}}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '30px' }}>
         <i><b> Our Vision</b> </i>
          </Typography>
          <br></br>
          <Typography variant="body2" color="text.secondary" style={{ fontSize: '19px' ,color: "black"}}>         
          iAttend envisions a future where attendance tracking is effortless, efficient, and secure.<br></br> We strive to revolutionize the way educational institutions manage student attendance.
          </Typography> <br></br>
          <Typography variant="body2" color="text.secondary" style={{ fontSize: '19px' ,color: "black"}}>        
          Our vision is to provide a user-friendly, accurate, and time-saving solution that empowers <br></br>educators to focus on what matters most – education, while ensuring a safer and <br></br>smarter learning environment for all.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  </div>
    
  )
}

export default About