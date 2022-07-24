import React from 'react';
import SpinnerWeather from './components/SpinnerWeather';
import Welcom from './components/WelcomField/Welcom';
import SpinnerMainWeather from "./components/SpinnerMainWeather";
import NavbarWeather from './components/NavbarWeather';

function App() {
  return (
    <div className='pt-4 container-fluid'>
          <NavbarWeather />
      <div className="pt-5 contaner">      
        <Welcom />
      </div>

    </div>

  );
}
export default App;
