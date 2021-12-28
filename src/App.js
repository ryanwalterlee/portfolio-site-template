import React, {Component} from 'react';
import './App.css';
import TopNavBar from './TopNavBar/TopNavBar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import FinancialCalculator from './Pages/FinancialCalculator/FinancialCalculator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/financialcalculator" element={<FinancialCalculator/>} />
        </Routes>
      </div>
    );
  }
}

export default App;
