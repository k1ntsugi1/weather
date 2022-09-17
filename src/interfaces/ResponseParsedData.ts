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
    [key: string]: string | number | object
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