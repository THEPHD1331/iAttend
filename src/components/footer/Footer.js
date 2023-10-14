import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "green", textAlign: "center", marginTop: "0px" }}>
        iAttend: A Face Recognition Attendance System
      </h1>
      <Container>
        <Row>
          <Column>
            {/* <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink> */}
          </Column>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="/About">Team</FooterLink>
            <FooterLink href="/About">Vision</FooterLink>
            {/* <FooterLink href="#">Testimonials</FooterLink> */}
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            {/* <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahmedabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink> */}
            <FooterLink href="https://github.com/THEPHD1331/iAttend">Github</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/paras-dongre-97462424a">Linkedin</FooterLink>
          </Column>
          <Column>
            {/* <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "5px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "5px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "5px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "5px" }}>Youtube</span>
              </i>
            </FooterLink> */}
          </Column>
        </Row>
      </Container> iAttend 2023 © All rights reserved 
    </Box>
  );
};
export default Footer;