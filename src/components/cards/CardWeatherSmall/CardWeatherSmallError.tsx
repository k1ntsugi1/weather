import React from 'react';
import { useTranslation } from 'react-i18next';

import { actionsModalHelper } from '../../../store/slices/uiSliceModalHelper';
import CardError from '../CardError';
import { useAppDispatch } from '../../../store/hooks';

const CardWeatherSmallError: React.FC = ({img, errorOfPoint }) => {
  const { t } = useTranslation();
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
