import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom"

import NavbarApp from './components/NavbarApp/NavbarApp';
import HomePage from './views/HomePage';
import UndefinedPage from './views/UndefinedPage';
import WeatherPage from './views/WeatherPage';
import AboutPage from './views/AboutPage';

import ModalHelper from './components/ModalHelper';
import ModalGeoposition from './components/ModalGeoposition';
import handlerGeoposition from './services/fetch/handlerGeoposition';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { useTranslation, withTranslation } from 'react-i18next';

import { RootState } from './store/index';

const App: React.FC = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const { currentLang } = useSelector((store: RootState) => store.uiDataOfSearching);

  useEffect(() => {
      navigator.geolocation.getCurrentPosition((data) => handlerGeoposition(data, currentLang, dispatch))
  }, []);
  
  return (
    <div className='pt-4 h-75 container-fluid position-relative'>
      <NavbarApp />
      <ModalHelper />
      <ModalGeoposition />
      <ToastContainer />
      <div className='h-100 container'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="weather" element={<WeatherPage />}></Route>
          <Route path="*" element={<UndefinedPage />} />
        </Routes>
      </div>
    </div>

  );
}
export default withTranslation()(App);
