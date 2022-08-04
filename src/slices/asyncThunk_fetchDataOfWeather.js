import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import getUrl_main from "../fetch/getUrl_main";
import parseData from "../fetch/parseData";

export const fetchDataOfWeather = createAsyncThunk(
    'weather/fetchData',
    async (dataOfPoint) => {
        console.log(1);
        const { points,  typeOfRequest, typeOfPoints } = dataOfPoint 
        const currentLang = localStorage.getItem('current-lang')

        const promises = points.map((point) => {
            const url = getUrl_main(typeOfRequest, point, currentLang)
            return axios.get(url)
                 .then((response) => parseData(typeOfRequest, point, response.data, typeOfPoints))
                 .catch((error) => [{error: error.response.data, id: `rejected_${point}_${typeOfPoints}_${typeOfRequest}`}])
        });

        const responsesData = await Promise.all(promises);
        console.log(responsesData)
        const reducedData = responsesData.flat().reduce((acc,item) => {
            const statusOfRequest = item.id.split('_')[0];
            acc[statusOfRequest] = [...acc[statusOfRequest], item];
            return acc;
        }, { fulfilled: [], rejected: [] });

        return { reducedData };
    }
);