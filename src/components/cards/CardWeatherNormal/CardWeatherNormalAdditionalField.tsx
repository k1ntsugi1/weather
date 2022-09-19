import React from 'react';
import getUrlImg from '../../../services/fetch/getUrlImg';

import { ParsedDataOutput } from '../../../interfaces/ResponseParsedData';

interface Props {
  item: ParsedDataOutput
};

const CardWeatherNormalAdditionalField: React.FC<Props> = ({ item }) => {
  const { id, time, main, weather } = item;
  return (
    <div className="additional-data-item text-center" key={id}>
      <p className="m-0 fs-4 fw-normal">{time}</p>
      <p className="m-0 fs-4 fw-bold">
        {main.temp}
        <span className="align-text-top" style={{ fontSize: '10px' }}>O</span>
      </p>
      <img src={getUrlImg(weather.icon)} alt="icon-weather" width="50px" height="50px" />
    </div>
  );
}

export default CardWeatherNormalAdditionalField;
