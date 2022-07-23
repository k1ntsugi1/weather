import React from 'react';
import SpinnerWeather from './components/SpinnerWeather';
import Welcom from './components/WelcomField/Welcom';
import SpinnerMainWeather from "./components/SpinnerMainWeather";
function App() {
  return (
    <div className='p-5 container'>
      <Welcom />
      <SpinnerMainWeather />
    </div>

  );
}
export default App;
