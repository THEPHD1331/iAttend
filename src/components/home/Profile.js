import React from "react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const Profile = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "120vh",
        textAlign: "center"
      }}
    >
      <Paper elevation={3} style={{ padding: "130px", maxWidth: "300px" }}>
        <Avatar
            // src={'images/LateshMam.PNG'}        
            sx={{
            width: 180,
            height: 180,
            // backgroundColor: "primary.main",
            margin: "0 auto",
          }}
        >
          {/* <PersonIcon sx={{ fontSize: 100 }} /> */}
        </Avatar>
        <Box mt={2} style={{fontSize: 'px'}}>
          <Typography variant="h4" color="textPrimary">
            Dr. Latesh Malik
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" style={{fontSize: '20px'}}>
            HOD CSE Dept. GCOEN
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="h6" color="textPrimary">
            Subjects: Java, Data Science
          </Typography>
          <Typography variant="h6" color="textPrimary">
            Students: 150
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default Profile;