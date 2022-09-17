import { createAsyncThunk } from "@reduxjs/toolkit";

import axios, { AxiosResponse } from "axios";
import getUrl_main from "../services/fetch/getUrlMain";
import parseData from "../services/fetch/parseData";

import { ResponseFetchData } from '../interfaces/ResponseFetchData';
//import { ResponseParsedDataFunc } from '../interfaces/ResponseParsedData'
import { ParsedDataOutput } from '../interfaces/ResponseParsedData'

interface DataOfPoint {
    point: string,
    typeOfRequest: string,
    typeOfPoints: string,
}

export const fetchDataOfWeather = createAsyncThunk(
    'weather/fetchData',
    async (dataOfPoint: DataOfPoint, thunkAPI) => {
        const { currentLang } = thunkAPI.getState().uiDataOfSearching;
        const { point, typeOfRequest, typeOfPoints } = dataOfPoint

        const url = getUrl_main(typeOfRequest, point, currentLang);
        const perseDataWithKnownProps = parseData.bind(null, typeOfRequest, point, typeOfPoints, currentLang);

        try {
            const parsedData = await axios
                .get(url)
                .then<ParsedDataOutput[]>(({ data }: AxiosResponse<ResponseFetchData>)  => {
                    return typeOfRequest === 'forecast'
                        ? data.list.flatMap((listDataItem: ResponseFetchData) => perseDataWithKnownProps(listDataItem))
                        : perseDataWithKnownProps(data);
                })
            return { parsedData };
        } catch(err) {
            const code = err.response.data.cod as string;
            return thunkAPI.rejectWithValue({ code, point })
        }


    }
);