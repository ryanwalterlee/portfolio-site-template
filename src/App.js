import React, {Component} from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import Skills from './components/Skills/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <ProfileHeader />
          
          <div className="route-container">
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/skills" element={<Skills/>} />
              {/* <Route path="/projects" element={<Projects/>} />
              <Route path="/workexperience" element={<WorkExperience/>} /> */}
            </Routes>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
