import React from "react";
import "./App.css";
import Demo1 from './components/cam/Demo1';
// import Header from './components/header/Header'
// import Cam from './components/cam/Cam'
// import FaceRecognition from './components/FaceRecognition/FaceRecognition'

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Cam/> */}
      <Demo1/>
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
