import React from 'react';
import SpinnerWeather from './components/spinners/SpinnerWeather';
import Home from './components/Home/Home';
import SpinnerMainWeather from "./components/spinners/SpinnerMainWeather";
import NavbarWeather from './components/NavbarWeather';
import { Routes, Route } from "react-router-dom"
import AboutProject from './components/AboutProject';
function App() {
  return (
    <div className='pt-4 container-fluid'>
      <NavbarWeather />
      
      <Routes>
        <Route path="/" element={
          <div className="pt-5 contaner">
            <Home />
          </div>
        } />
        <Route path="about" element={<AboutProject />}/>
      </Routes>
    </div>

  );
}
export default App;
