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
        height: "100vh",
        textAlign: "center"
      }}
    >
      <Paper elevation={3} style={{ padding: "130px", maxWidth: "300px" }}>
        <Avatar
          sx={{
            width: 150,
            height: 150,
            backgroundColor: "primary.main",
          }}
        >
          <PersonIcon sx={{ fontSize: 100 }} />
        </Avatar>
        <Box mt={2}>
          <Typography variant="h4" color="textPrimary">
            Prof. Latesh Malik
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            HOD CSE Dept. GCOEN
          </Typography>
        </Box>
        <Box mt={2}>
          <Typography variant="body1" color="textPrimary">
            Subjects: Java, Data Science
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Students: 50
          </Typography>
        </Box>
      </Paper>
    </div>
  );
};

export default Profile;