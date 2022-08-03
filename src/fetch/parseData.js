import _ from 'lodash'
const parseData = (typeOfRequest, point, data, typeOfPoints) => {
    const parser = {
        weather(data) {
            const { dt, weather, main, wind, clouds = null, rain = null, snow = null } = data;
            const date = (new Date(dt * 1000)).toString().split(' ');
            const percentOfClouds = clouds ? clouds.all : null;
            const mmOfRainLast3H = rain ? rain['3h'] : null;
            const mmOfSnowLast3H = snow ? snow['3h'] : null;
            return [
                {
                    id: _.uniqueId(`fulfilled_${point}_${typeOfRequest}_${typeOfPoints}_`),
                    city: point,
                    time: date.filter((_, index) => index === 4)
                              .join('')
                              .split(':')
                              .filter((_, index) => index < 2)
                              .join(':'),
                    day: date.filter((_, index) => index <= 3).join(' '),
                    weather: weather[0],
                    main,
                    wind,
                    percentOfClouds,
                    mmOfRainLast3H,
                    mmOfSnowLast3H
                }
            ]
        },
        forecast(data) {
            const { list } = data;
            return list.flatMap((item) =>  this.weather(item));
        },
    };

    return parser[typeOfRequest](data);
}

export default parseData;