import React, {Component} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutme" element={<AboutMe />} />
          {/* <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/workexperience" element={<WorkExperience/>} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
