import React from "react";
import "./App.css";
// import Header from './components/header/Header'
// import Cam from './components/cam/Cam'
// import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Lists from "./components/lists/Lists";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ErrorPage from "./components/errorpage/ErrorPage";
import AddStudent from "./components/lists/AddStudent";
import StudentDetails from "./components/lists/StudentDetails";
import About from "./components/about/About";
import Profile from "./components/home/Profile";
import Scan from "./components/cam/Scan";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="Scan" element={<Scan />} />
        <Route path="Lists" element={<Lists />} />
        <Route path="Lists/:rollNo" element={<StudentDetails />} />
        <Route path="AddStudent" element={<AddStudent />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;