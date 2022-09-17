type WeatherItem = {
  "id": number,
  "main": string,
  "description": string,
  "icon": string
}

export interface ResponseFetchData {
  "coord": {
    "lon": number,
    "lat": number
  },
  "weather": WeatherItem[],
  "base"?: string,
  "main": {
    "temp": number,
    "feels_like": number,
    "temp_min": number,
    "temp_max": number,
    "pressure": number,
    "humidity": number,
    "sea_level": number,
    "grnd_level": number
  },
  "visibility": number,
  "wind": {
    "speed": number,
    "deg": number,
    "gust": number
  },
  "rain"?: {
    "1h"?: number
    "3h"?: number,
  },
  "snow"?: {
    "1h"?: number
    "3h"?: number,
  },
  "clouds"?: {
    "all": number
  },
  "dt": number,
  "sys": {
    "type": number,
    "id": number,
    "message"?: number,
    "country": string,
    "sunrise": number,
    "sunset": number
  },
  "timezone"?: number,
  "id": number,
  "name": string,
  "cod": number,
  "list"?: ResponseFetchData[],
  "city": {
    "coord": {
      "lat": number,
      "lon": number,
    },
    "country": string,
    "id": number,
    "name": string,
    "population": number,
    "sunrise": number,
    "sunset": number,
    "timeaone": number,
  },
  "cnt": number,
  "message": number,
}



// type ItemOfList = {
//   "clouds": {
//     "all": number,
//   },
//   "dt": number,
//   "dt_txt": string,
//   "main": {
//     "temp": number,
//     "feels_like": number,
//     "temp_min": number,
//     "temp_max": number,
//     "pressure": number,
//     "humidity": number,
//     "sea_level": number,
//     "grnd_level": number
//   },
//   "pop": number,
//   "sys": {
//     "pod": string,
//   },
//   "visibility": number,
//   "weather": WeatherItem[],
//   "wind": {
//     "speed": number,
//     "deg": number,
//     "gust": number,
//   }
// }