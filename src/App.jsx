import React, { useState } from 'react';
import SpinnerWeather from './components/spinners/SpinnerWeather';
import SpinnerMainWeather from "./components/spinners/SpinnerMainWeather";
import { Routes, Route } from "react-router-dom"

import NavbarWeather from './components/Nav/NavbarWeather';
import HomePage from './components/Home/HomePage';
import WeatherPage from './components/WeatherPage';
import AboutProject from './components/AboutProject';
import UndefinedPage from './components/UndefinedPage';


function App() {
  const [point, setPoint] = useState(null);
  return (
    <div className='pt-4 h-75 container-fluid'>
      <NavbarWeather point={point}/>
      <div className='h-100 container'>
        <Routes>
          <Route path="/" element={<HomePage setPoint={setPoint}/>} />
          <Route path="about" element={<AboutProject />} />
          <Route path="weather" element={<WeatherPage setPoint={setPoint}/>}></Route>
          <Route path="*" element={<UndefinedPage />} />
        </Routes>
      </div>
    </div>

  );
}
export default App;
