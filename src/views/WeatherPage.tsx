import React, { useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import SearchField from '../components/HomePage/SearchField';
import { selectorsUserPoints } from '../store/slices/dataSliceUserPoints';
import CardWeatherNormal from '../components/cards/CardWeatherNormal/CardWeatherNormal';
import CardError from '../components/cards/CardWeatherNormal/CardWeatherNormalError';
import handlerTimeouts from '../services/fetch/handlerTimeouts';

import { useAppDispatch, useAppSelector } from '../store/hooks';


import { ParsedDataOutput } from '../interfaces/ResponseParsedData';

interface Reduce {
  [key: string]: ParsedDataOutput[],
}

const WeatherPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { currentLang } = useAppSelector(store => store.uiDataOfSearching);
  const { loadingUserPoints, errorsUserPoints } = useAppSelector(store => store.dataUserPoints);

  const fulfilledUserPoints = useAppSelector(selectorsUserPoints.selectEntities);

  const filteredByDayUserPoints = Object.values(fulfilledUserPoints).reduce<Reduce>((acc, point)  => {
    const { day } = point;
    acc[day] = acc[day] ? [...acc[day], point] : [point];
    return acc;
  }, {});

  const errorOfPoint = errorsUserPoints.length ? errorsUserPoints[0] : null;
  const rejectedUserPoint = errorOfPoint ? errorOfPoint.point : null;

  useEffect(() => {
    if (errorOfPoint) {
      const data = {
        points: [rejectedUserPoint], typeOfRequest: 'weather', typeOfPoints: 'userPoints', statusOfPoint: 'rejected',
      };
      const clearCurrentTimeout = handlerTimeouts(9000, data, dispatch);
      return clearCurrentTimeout;
    }
  }, [errorOfPoint, currentLang]);

  return (
    <section className="h-100">
      <SearchField />
      {loadingUserPoints === 'pending'
            && (
            <div className="mt-5 d-flex justify-content-center">
              <ThreeDots
                height="80"
                width="80"
                color="lightblue"
                ariaLabel="three-dots-loading"
                wrapperStyle
                wrapperClass
              />
            </div>
            )}
      {loadingUserPoints === 'rejected' && <CardError errorOfPoint={errorOfPoint} />}
      {loadingUserPoints === 'fulfilled'
                && Object.entries(filteredByDayUserPoints).map(([day, points]) => <CardWeatherNormal points={ points } key={day} />)}
    </section>
  );
}

export default WeatherPage;
