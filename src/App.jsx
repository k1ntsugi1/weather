import React from 'react';
import SpinnerWeather from './components/SpinnerWeather';
import Nav from './components/Nav';
import Cardmy from './components/Card';
function App() {
  return (
    <div className='p-3 w-100'>
      <Nav />
      <SpinnerWeather />

      <Cardmy />
    </div>

  );
}
export default App;
