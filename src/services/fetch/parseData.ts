import _ from 'lodash';

import { ResponseParsedDataFunc } from '../../interfaces/ResponseParsedData';

type PlainProp = string | number | null;
// думаю здесь можно будет сделать перегрузку
const parseData: ResponseParsedDataFunc = (typeOfRequest, point, typeOfPoints, currentLang, data) => {
      const {
        dt, weather, main, wind, clouds = null, rain = null, snow = null,
      } = data;

      const date = (new Date(dt * 1000));
      const day = currentLang === 'ru'
        ? new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(date).toUpperCase()
        : new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date).toUpperCase();

      const time = date.toString()
        .split(' ')
        .filter((_, index) => index === 4)
        .join('')
        .split(':')
        .filter((_, index) => index < 2)
        .join(':');

      const percentOfClouds: PlainProp = clouds?.all ?? null;
      const mmOfRainLast3H: PlainProp = (rain ? rain['3h'] : null);
      const mmOfSnowLast3H: PlainProp = (snow ? snow['3h'] : null);
      const currentWeather = weather[0] ?? null;
      return [
        {
          id: _.uniqueId(`fulfilled_${point}_${typeOfRequest}_${typeOfPoints}_`),
          city: point,
          time,
          day,
          weather: currentWeather,
          main,
          wind,
          percentOfClouds,
          mmOfRainLast3H,
          mmOfSnowLast3H,
        },
      ];
};

export default parseData;
