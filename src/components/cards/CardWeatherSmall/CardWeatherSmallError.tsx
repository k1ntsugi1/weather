import React from 'react';

import { actionsModalHelper } from '../../../store/slices/uiSliceModalHelper';
import CardError from '../CardError';
import { useAppDispatch } from '../../../store/hooks';

interface ICardWeatherSmallError {
  img: string,
  errorOfPoint: {
    [key: string]: string,
  }
}

const CardWeatherSmallError: React.FC<ICardWeatherSmallError> = ({img, errorOfPoint }) => {
  const dispatch = useAppDispatch();
  return (
    <div className="container-img rotate-container opacity-animation" onClick={() => dispatch(actionsModalHelper.setActiveStatus())}>
      <div className="rotate-card">
        <CardError errorOfPoint={errorOfPoint} currentPage="homePage" />
        <div className="front-face-of-card b-rad-10">
          <img id="moscow" src={img} alt="error" className="city-img b-rad-10" />
        </div>
      </div>
    </div>
  );
}

export default CardWeatherSmallError;
