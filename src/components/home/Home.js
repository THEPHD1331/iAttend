import React, { useState, useEffect } from "react";
import "./home.css";
import facehome from "../../assest/face-home.jpeg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Features from "../../data/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";
import "./Carousel.css";

function Home() {
  const settings = {
    infinite: true,
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust the number of cards shown for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    <div className="home-container">
      <div>
        <div className="main">
          <div id="1" style={{fontSize: '36px', textAlign: 'center',fontFamily: 'Merriweather, serif'}}>
            <h1>
              Welcome to iAttend 
            </h1>
              <b>
            Experience the Future of Attendance Tracking. 
            We've redefined the way educational institutions track
            student attendance. Say goodbye to the hassle of manual roll-calls
            and embrace a smarter, more efficient solution.  <br />
            {/* Our cutting-edge Face Recognition Student Attendance System
            harnesses the power of advanced facial recognition technology to
            revolutionize the classroom experience. */}
             {/* It's as simple as a smile!
            iAttend effortlessly identifies and records attendance, ensuring
          accuracy and security with every interaction. */}
          <br />          <br />
          Click START to begin
              </b>
           
            <br />
            <Stack spacing={3} direction="row" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '20vh' }}>
              <Button variant="contained" style={{ fontSize: '1.5rem', padding: '1rem 3rem' }}>
                <Link to={`/Scan`} id="btn" >
                  START 
                </Link>
              </Button>
            </Stack>
          </div>
          </div>

          {/* <div id="2">
            <img src={facehome} alt="face-home" />
          </div> */}
        </div>
      </div>

      <div>
        <h1>Why Choose iAttend?</h1>
        <div>
          <br></br>
          <Slider
            {...settings}
            nextArrow={<NextArrow className="slick-next" />} // Apply custom class "slick-next"
            prevArrow={<PrevArrow className="slick-prev" />}
          >
            {/* {Features.map((item) => {
            return (
              <div key={item.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.img} // Assuming your JSON data has an 'image' property for image URLs
                      alt="Card Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.h}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.p}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            );
          })} */}
            {Features.map((item) => (
              <div key={item.id}>
                <Card sx={{ maxWidth: 345 ,}}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.img} // Assuming your JSON data has an 'image' property for image URLs
                      alt="Card Image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.h}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" style={{ fontSize: '16px' }}>
                        {item.p}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div id="4">
    <Card sx={{ maxWidth: '100%', margin: "8rem", height: "16rem", background: 'linear-gradient(to top, #ccffff , #ffffff)'}}>
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{ fontSize: '30px' }}>
         <i><b> Join The iAttend Revolution!</b> </i>
          </Typography>
          <br></br>
          <Typography variant="body2" color="text.tertiary" style={{ fontSize: '19px' }}>         
           Welcome to a future where attendance tracking is seamless, secure, and intelligent. <br></br> Join the iAttend revolution🚀 and embrace the new standard in attendance management.
          </Typography>
          <Typography variant="body2" color="text.tertiary" style={{ fontSize: '19px' }}>        
            Ready to elevate your institution's attendance tracking experience? <br></br>Try iAttend today and experience the future of education, one smile😊 at a time.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
   
          {/* <b>BEGIN HERE!</b> */}

    </div>

    </>
  );
}

export default Home;