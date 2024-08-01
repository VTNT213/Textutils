import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About';

function App() {
  const[mode, setMode] = useState('warning'); //Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert=(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    } ,1000)
  }

  const toggleMode = () =>{
    if(mode ==='warning'){
      setMode('dark');
      document.body.style.backgroundColor = '#232d38';
      showAlert("Dark mode has been enabled!", "success");
    }
    else{
      setMode('warning');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled!", "success");
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" homeText="Home" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      {/* <div className="container"> */}
        {/* <TextForm heading="Enter your text here:" showAlert = {showAlert} mode={mode} /> */}
      {/* </div> */}
      <div className="container">
        <Routes>
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<TextForm heading="Enter your text here:" showAlert = {showAlert} mode={mode} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
