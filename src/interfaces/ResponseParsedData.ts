import { ResponseFetchData } from './ResponseFetchData';

export interface ParsedDataOutput {
    weather: {
        "id": number,
        "main": string,
        "description": string,
        "icon": string
    }
    main: {
        [temp: string]: number
    },
    wind: {
        [key: string]: number,
    },
    id: string,
    city: string,
    time: string,
    day: string,
    percentOfClouds: number,
    mmOfRainLast3H: number,
    mmOfSnowLast3H: number,
}

export interface ResponseParsedDataFunc {
    (
        typeOfRequest: string,
        point: string,
        typeOfPoints: string,
        currentLang: string,
        data: ResponseFetchData,
    ): ParsedDataOutput[]
} 

// id: _.uniqueId(`fulfilled_${point}_${typeOfRequest}_${typeOfPoints}_`),
// city: point,
// time,
// day,
//       weather: currentWeather,
//       main,
// wind,
// percentOfClouds,
// mmOfRainLast3H,
// mmOfSnowLast3H,