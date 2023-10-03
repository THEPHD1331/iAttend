import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CanvasJSReact from "@canvasjs/react-charts";

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function StudentDetails() {
  const { rollNo } = useParams();
  const [studentData, setStudentData] = useState({});

  useEffect(() => {
    // Make a GET request to fetch the data for the specific student based on roll number
    axios
      .get(`http://localhost:9595/api/students/rollNo?rollNo=${rollNo}`)
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [rollNo]);

  const generateDataPoints = (noOfDps) => {
    let xVal = 1;
    let yVal = 100;
    const dps = [];
    for (let i = 0; i < noOfDps; i++) {
      yVal = yVal + Math.round(5 + Math.random() * (-5 - 5));
      dps.push({ x: xVal, y: yVal });
      xVal++;
    }
    return dps;
  };

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light1", // "light1", "dark1", "dark2"
    title: {
      text: "Attendence",
    },
    data: [
      {
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: 40, label: "A", color: "#FF5733" },
          { y: 64, label: "P", color: "#33FFA8"  },
         
        ],
      },
    ],
  };

  const options1 = {
    theme: "light2",
    animationEnabled: true,
    zoomEnabled: true,
    title: {
      text: "Try Zooming and Panning"
    },
    data: [{
      type: "area",
      dataPoints: generateDataPoints(500)
    }]
  };

  return (
    <>
      <div>
        <h2>Student Details</h2>
        <p>Name: {studentData.studentName}</p>
        <p>Roll No: {studentData.rollNo}</p>
        {/* Display other student details here */}
      </div>
      <div>
        <CanvasJSChart options={options} />
        <CanvasJSChart options={options1} />
      </div>
    </>
  );
}

export default StudentDetails;