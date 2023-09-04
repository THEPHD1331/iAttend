import React from "react";
import "./App.css";
// import Header from './components/header/Header'
// import Cam from './components/cam/Cam'
// import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Demo1 from "./components/cam/Demo1";
import Lists from "./components/lists/Lists";
import Header from "./components/header/Header";
// import Footer from "./components/footer/Footer";
import ErrorPage from "./components/errorpage/ErrorPage";
import AddStudent from "./components/lists/AddStudent";

function App() {
  return (
    <div className="App">
     
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Demo1" element={<Demo1 />} />
          <Route path="Lists" element={<Lists />} />
          <Route path="AddStudent" element={<AddStudent />} />

          <Route path="Error" element={<ErrorPage />} />
        </Routes>
        {/* <Footer /> */}
    
      {/* <Header/> */}
      {/* <Cam/> */}

      {/* <header className="App-header">
        <h1>Face Recognition App</h1>
      </header>
      <main>
        <FaceRecognition />
      </main> */}
    </div>
  );
}

export default App;
