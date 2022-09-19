import React from 'react';
import SpinnerWeather from '../components/spinners/SpinnerWeather';
import Cards from '../components/HomePage/Cards';
import SearchField from '../components/HomePage/SearchField';
import Hashtag from '../components/HomePage/Hashtag';
import Title from '../components/HomePage/Title';

const HomePage: React.FC = () => {
  return (
    <section className="mt-5 container-welcom">
      <div className="mainField">
        <SpinnerWeather styles={{ left: '140px', top: '-5px' }} size="medium" />
        <Hashtag />
        <Title />
      </div>
      <div className="searchField">
        <SearchField />
        <Cards />
      </div>
    </section>

  );
}

export default HomePage;
