import React, { useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';
import LoadingCom from '../loading/Loading'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const personData = [
  { imagePath: 'ameya.png', name: 'Ameya', id: '001' },
  { imagePath: 'harsh.png', name: 'Harsh', id: '002' },
  { imagePath: 'parag.png', name: 'Parag', id: '003' },
  { imagePath: 'paras.png', name: 'Paras', id: '004' },
  // Add more persons as needed
];

function Demo1() {
  const videoRef = useRef(null);
  const detectionIntervalRef = useRef(null);
  const [matchedPerson, setMatchedPerson] = useState(null); // State to store matched person data
  const [isLoading, setIsLoading] = useState(true); // State to track loading state
  const [isDetecting, setIsDetecting] = useState(false); // State to track face detection
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [recognizedPersonName, setRecognizedPersonName] = useState('');

  useEffect(() => {
    async function setupCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;

        console.log('Loading models...');
        // await faceapi.nets.tinyFaceDetector.loadFromUri('/models');
        // console.log('Tiny Face Detector loaded');

        // await faceapi.nets.faceLandmark68Net.loadFromUri('/models');
        // console.log('Face Landmark 68 Net loaded');

        // await faceapi.nets.faceRecognitionNet.loadFromUri('/models');
        // console.log('Face Recognition Net loaded');

        // faceapi.nets.ssdMobilenetv1.loadFromUri("/models");
        // console.log('ssdMobilenetv1 loaded');
        await Promise.all([
          faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
          faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
          faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
          faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
        ]);
        console.log('All models loaded');
        setIsLoading(false); // Models loaded, set loading state to false

       

        // startFaceDetection(); // Start detection after all models are loaded
      } catch (error) {
        console.error('Error setting up camera:', error);
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
    setIsDetecting(prevIsDetecting => !prevIsDetecting);
  }

  async function startFaceDetection() {
    if (!videoRef.current.srcObject) {
      console.log('Video stream not loaded yet');
      return;
    }

    detectionIntervalRef.current = setInterval(async () => {
      const detections = await faceapi.detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceDescriptors();

      const imagePaths = ['ameya.png', 'harsh.png', 'parag.png', 'paras.png'];
      const descriptors = await getDescriptorsFromImages(imagePaths);

      if (descriptors.length > 0 && detections.length > 0) {
        detections.forEach((detection) => {
          const match = findBestMatch(detection.descriptor, descriptors);
          if (match.distance < 0.5) {
            const matchedPersonData = personData[match.index]; // Replace with your data array
            setMatchedPerson(matchedPersonData);
            setRecognizedPersonName(matchedPersonData.name); // Set the recognized person's name
          setSnackbarOpen(true); // Open the Snackbar
            console.log('Match found:', match);
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
      const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
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



  return (
    <div className="App">
    <h1>Face Recognition Attendance System</h1>
    <div>
        <button onClick={toggleFaceDetection}>{isDetecting ? 'Stop' : 'Start'} Detection</button>
        {isLoading && <LoadingCom/>}
      </div>
    <video ref={videoRef} autoPlay playsInline />
    {/* You can add a component to display attendance information here */}
    {matchedPerson && (
        <div>
          <img src={`/images/${matchedPerson.imagePath}`} alt="Matched Person" />
          <p>Name: {matchedPerson.name}</p>
          <p>ID: {matchedPerson.id}</p>
        </div>
      )}
       {/* Snackbar */}
       <Snackbar open={snackbarOpen} autoHideDuration={4000} onClose={handleSnackbarClose}>
        <MuiAlert elevation={6} variant="filled" onClose={handleSnackbarClose} severity="success">
          Face recognized: {recognizedPersonName}
        </MuiAlert>
      </Snackbar>
  </div>
  )
}

export default Demo1
