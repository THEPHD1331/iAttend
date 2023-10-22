import React, { useRef, useEffect, useState } from "react";
import * as faceapi from "face-api.js";
import LoadingCom from "../loading/Loading";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'; // Import Axios

const personData = [
  { imagePath: "ameya.png", name: "Ameya", id: "24" },
  { imagePath: "harsh.png", name: "Harsh", id: "35" },
  { imagePath: "parag.png", name: "Parag", id: "47" },
  { imagePath: "paras.png", name: "Paras", id: "48" },
  { imagePath: "Vishal.PNG", name: "Vishal", id: "72" },
  { imagePath: "Hardik.png", name: "Hardik", id: "33" },
  { imagePath: "Devashish.png", name: "Devashish", id: "32" },
  { imagePath: "Abhisekh.jpeg", name: "Abhisek", id: "22" },

  // Add more persons as needed
];

function Scan() {
  const videoRef = useRef(null);
  const detectionIntervalRef = useRef(null);
  const [matchedPerson, setMatchedPerson] = useState(null); // State to store matched person data
  const [isLoading, setIsLoading] = useState(true); // State to track loading state
  const [isDetecting, setIsDetecting] = useState(false); // State to track face detection
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [recognizedPersonName, setRecognizedPersonName] = useState("");
  const [notificationType, setNotificationType] = useState('success'); // 'success' or 'error'
const [notificationMessage, setNotificationMessage] = useState('');
const [isNotificationOpen, setIsNotificationOpen] = useState(false);
const [currentDateTime, setCurrentDateTime] = useState(null);


  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        videoRef.current.srcObject = stream;

        console.log("Loading models...");
        // await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        // console.log('Tiny Face Detector loaded');

        // await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
        // console.log('Face Landmark 68 Net loaded');

        // await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        // console.log('Face Recognition Net loaded');

        // faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
        // console.log('ssdMobilenetv1 loaded');
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
          faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
          faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
          faceapi.nets.ssdMobilenetv1.loadFromUri("/models"),
        ]);
        console.log("All models loaded");
        setIsLoading(false); // Models loaded, set loading state to false

        // startFaceDetection(); // Start detection after all models are loaded
      } catch (error) {
        console.error("Error setting up camera:", error);
      }
    }

    setupCamera();
    // startFaceDetection(); // Start detection outside useEffect since it's not a dependency

    // Clear interval when component unmounts
    return () => {
      clearInterval(detectionIntervalRef.current);
    };
  }, []);

  async function toggleFaceDetection() {
    if (!isDetecting) {
      startFaceDetection();
    } else {
      clearInterval(detectionIntervalRef.current);
      // setMatchedPerson(null);
    }
    setIsDetecting((prevIsDetecting) => !prevIsDetecting);
  }

  async function startFaceDetection() {
    if (!videoRef.current.srcObject) {
      console.log("Video stream not loaded yet");
      return;
    }

    detectionIntervalRef.current = setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
        .withFaceLandmarks()
        .withFaceDescriptors();

      const imagePaths = ["ameya.png", "harsh.png", "parag.png", "paras.png","Vishal.PNG","Hardik.png","Devashish.png","Abhisekh.jpeg"];
      const descriptors = await getDescriptorsFromImages(imagePaths);

      if (descriptors.length > 0 && detections.length > 0) {
        detections.forEach((detection) => {
          const match = findBestMatch(detection.descriptor, descriptors);
          if (match.distance < 0.5) {
            const matchedPersonData = personData[match.index]; // Replace with your data array
            setMatchedPerson(matchedPersonData);
            setRecognizedPersonName(matchedPersonData.name); // Set the recognized person's name
            // Set the current date and time
            const currentDate = new Date();
            setCurrentDateTime(currentDate);
            setSnackbarOpen(true); // Open the Snackbar
            console.log("Match found:", match);
          }
        });
      }
    }, 1000);
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  async function getDescriptorsFromImages(imagePaths) {
    const descriptorPromises = imagePaths.map(async (imagePath) => {
      const img = await faceapi.fetchImage(`/images/${imagePath}`);
      const detections = await faceapi
        .detectSingleFace(img)
        .withFaceLandmarks()
        .withFaceDescriptor();
      if (detections) {
        return detections.descriptor;
      } else {
        return null;
      }
    });

    const descriptors = await Promise.all(descriptorPromises);
    return descriptors.filter((descriptor) => descriptor !== null);
  }

  function findBestMatch(targetDescriptor, descriptors) {
    let bestMatch = { distance: Number.MAX_SAFE_INTEGER };

    descriptors.forEach((descriptor, index) => {
      const distance = faceapi.euclideanDistance(targetDescriptor, descriptor);
      if (distance < bestMatch.distance) {
        bestMatch = { distance, index };
      }
    });

    return bestMatch;
  }

  async function handleSaveButtonClick() {
    if (matchedPerson) {
      try {
        const currentDate = new Date();
        console.log("Current Date and Time:", currentDate);
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint where you want to send the data.
      //  const apiUrl = 'http://localhost:7171/api/students';
      const apiUrl = 'https://testforapipart2.vercel.app/api/student-api-1';
        const requestData = {
          rollNo: matchedPerson.id,
          name: matchedPerson.name,
         // imagePath: matchedPerson.imagePath,
         date: currentDate.toISOString(),
        attendance: 'P'
        
          // Add other data you want to send
        };

        const response = await axios.post(apiUrl, requestData, {
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
        });

        // Success Notification
      setNotificationType('success');
      setNotificationMessage('Data saved successfully');
      setIsNotificationOpen(true);

        // Handle the response here (e.g., show a success message)
        console.log('POST request successful:', response);

      } catch (error) {
        // Error Notification
      setNotificationType('error');
      setNotificationMessage('Error saving data');
      setIsNotificationOpen(true);

        // Handle any errors that occur during the POST request
        console.error('Error making POST request:', error);
      }
    }
  }
const handleNotificationClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }
  setIsNotificationOpen(false);
};
  return (
    <div className="App">
      <h1>Face Recognition Attendance System</h1>
      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity="success"
        >
          Face recognized: {recognizedPersonName}
        </MuiAlert>
      </Snackbar>
      <Snackbar
  open={isNotificationOpen}
  autoHideDuration={4000}
  onClose={handleNotificationClose}
>
  <MuiAlert
    elevation={6}
    variant="filled"
    onClose={handleNotificationClose}
    severity={notificationType}
  >
    {notificationMessage}
  </MuiAlert>
</Snackbar>
      <div>
       <div>
       <Button variant="contained" onClick={toggleFaceDetection}>
          {isDetecting ? "Stop" : "Start"} Detection
        </Button>
       </div>
        <div>
        {matchedPerson &&(
          <>
          <Button variant="contained" onClick={handleSaveButtonClick}>Save</Button>
          </>
        )}
     
     </div>

       <div>
       {isLoading && <LoadingCom />}
       </div>
        {/* <button onClick={toggleFaceDetection}>{isDetecting ? 'Stop' : 'Start'} Detection</button> */}
        {/* {isLoading && <LoadingCom/>} */}
      </div>
      <video ref={videoRef} autoPlay playsInline />
      {/* You can add a component to display attendance information here */}
      {/* {matchedPerson && (
        <div>
          <img
            src={`/images/${matchedPerson.imagePath}`}
            alt="Matched Person"
          />
          <p>Name: {matchedPerson.name}</p>
          <p>ID: {matchedPerson.id}</p>
        </div>
      )} */}


      <div>
      {matchedPerson && (
       <>
    
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>ID</TableCell>
          <TableCell>Image</TableCell>
          <TableCell>Date and time</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>{matchedPerson.name}</TableCell>
          <TableCell>{matchedPerson.id}</TableCell>
          <TableCell>
            <img
              src={`/images/${matchedPerson.imagePath}`}
              alt="Matched Person"
              width="100"
            />
          </TableCell>
          <TableCell>
            {/* Display the current date and time or "N/A" if it's null */}
          {currentDateTime ? currentDateTime.toISOString() : "N/A"}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </TableContainer>
       </>
)}
      </div>
    </div>
  );
}

export default Scan;