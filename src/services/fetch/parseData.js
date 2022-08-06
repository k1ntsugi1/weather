import _ from 'lodash'
const parseData = (typeOfRequest, point, data, typeOfPoints, currentLang) => {
    const parser = {
        weather(data) {
            const { dt, weather, main, wind, clouds = null, rain = null, snow = null } = data;
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
            const percentOfClouds = clouds ? clouds.all : null;
            const mmOfRainLast3H = rain ? rain['3h'] : null;
            const mmOfSnowLast3H = snow ? snow['3h'] : null;
            return [
                {
                    id: _.uniqueId(`fulfilled_${point}_${typeOfRequest}_${typeOfPoints}_`),
                    city: point,
                    time,
                    day,
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
            return list.flatMap((item) => this.weather(item));
        },
    };

    return parser[typeOfRequest](data);
}

export default parseData;