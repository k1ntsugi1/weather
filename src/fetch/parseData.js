import _ from 'lodash'
const parseData = (type, point, data) => {
    const parser = {
        weather(data) {
            console.log(data);
            const { dt, weather, main, wind, clouds = null, rain = null, snow = null } = data;
            const date = new Date(dt * 1000);
            const percentOfClouds = clouds ? clouds.all : null;
            const mmRainLast3H = rain ? rain['3h'] : null;
            const mmSnowLast3H = snow ? snow['3h'] : null;
            return [
                {
                    id: _.uniqueId(`${type}_${point}_`),
                    city: point,
                    date: date.toString(),
                    weather: weather[0],
                    main,
                    wind,
                    percentOfClouds,
                    mmRainLast3H,
                    mmSnowLast3H
                }
            ]
        },
        forecast(data) {
            const { list } = data;
            return list.flatMap((item) => this.weather(item));
        },
    };

    return parser[type](data);
}

export default parseData;