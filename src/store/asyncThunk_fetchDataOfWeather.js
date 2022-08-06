import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import getUrl_main from "../services/fetch/getUrl_main";
import parseData from "../services/fetch/parseData";

export const fetchDataOfWeather = createAsyncThunk(
    'weather/fetchData',
    async (dataOfPoint, thunkAPI) => {
        const { currentLang } = thunkAPI.getState().ui_dataOfSearching;
        const { point, typeOfRequest, typeOfPoints } = dataOfPoint

        const url = getUrl_main(typeOfRequest, point, currentLang);
        try {
            const parsedData = await axios.get(url).then((response) => parseData(typeOfRequest, point, response.data, typeOfPoints, currentLang))
            return { parsedData };
        } catch(err) {
            console.log('error')
            return thunkAPI.rejectWithValue({ code: err.response.data.cod, point })
        }


    }
);