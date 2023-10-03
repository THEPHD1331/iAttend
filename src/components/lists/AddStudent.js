import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
import './lists.css'
import { useNavigate } from "react-router-dom";



function AddStudent() {
    const navigate = useNavigate();

    
    const [formData, setFormData] = useState({
        name: "",
        rollNo: "",
        attendance: "",
        // photo: null, // Add a photo property to hold the selected file
      });
      const [formErrors, setFormErrors] = useState({
        name: false,
        rollNo: false,
        attendance: false,
        // photo: false,
      });
     
      const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
      };
     

      const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === "photo") {
            // Handle file input separately
            setFormData({
              ...formData,
              [name]: files[0], // Store the selected file
            });
          } else {
            setFormData({
              ...formData,
              [name]: value,
            });
          }
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Validate the form fields
        const errors = {};
        let hasError = false;
    
        if (!formData.name.trim()) {
          errors.name = true;
          hasError = true;
        }
    
        if (!formData.rollNo.trim()) {
          errors.rollNo = true;
          hasError = true;
        }
    
        if (!formData.attendance.trim()) {
          errors.attendance = true;
          hasError = true;
        }
    
        // if (!formData.photo) {
        //   errors.photo = true;
        //   hasError = true;
        // }
    
        setFormErrors(errors);
    
        if (!hasError) {
          try {
            const formDataToSend = {
              rollNo: parseInt(formData.rollNo), // Convert rollNo to integer
              studentName: formData.name,
              attendance: formData.attendance,
            };
    
            const apiUrl = "http://localhost:9595/api/students";
    
            await axios.post(apiUrl, formDataToSend);
    
            setFormData({
              rollNo: "",
              name: "",
              attendance: "",
              // photo: null,
            });
    
            console.log("POST request successful");
          } catch (error) {
            console.error("Error making POST request:", error);
          }
        }
      };


  return (
   <>
    <div id="one">
    <Button variant="contained" color="primary" onClick={handleGoBack}>
    Go Back
  </Button>
    </div>
  <div>
  <form onSubmit={handleSubmit} style={{ width: '50%',
        margin: 'auto'}}>
      <h2>Add Student</h2>
    <TextField
      name="name"
      label="Name"
      variant="outlined"
      value={formData.name}
      onChange={handleChange}
      fullWidth
      required
      margin="normal"
      error={formErrors.name}
        helperText={formErrors.name ? "Name is required" : ""}
    />
    <TextField
      name="rollNo"
        label="Roll No"
        variant="outlined"
        value={formData.rollNo}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        error={formErrors.rollNo}
        helperText={formErrors.rollNo ? "Roll No is required" : ""}
    />
    <TextField
      name="attendance"
        label="Attendance"
        variant="outlined"
        value={formData.attendance}
        onChange={handleChange}
        fullWidth
        required
        margin="normal"
        error={formErrors.attendance}
        helperText={formErrors.attendance ? "Attendance is required" : ""}
    />
    {/* <p>Upload photo</p>
     <input
        type="file"
        name="photo"
        accept="image/*" // Accept only image files
        onChange={handleChange}
        required
      /> */}
    <Button type="submit" variant="contained" color="primary">
      Add Student
    </Button>
  </form>
  </div>
   </>
  )
}

export default AddStudent
