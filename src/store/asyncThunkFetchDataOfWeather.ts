import { createAsyncThunk } from "@reduxjs/toolkit";

import axios, { AxiosResponse } from "axios";
import getUrlMain from "../services/fetch/getUrlMain";
import parseData from "../services/fetch/parseData";

import { ResponseFetchData } from '../interfaces/ResponseFetchData';
import { ParsedDataOutput } from '../interfaces/ResponseParsedData'
import { RootState } from './index'

interface DataOfPoint {
    point: string,
    typeOfRequest: string,
    typeOfPoints: string,
}

interface FullfilledRequest {
    parsedData: ParsedDataOutput[]
}

interface ThunkAPI {
    state: RootState,
    rejectValue: {
        point: string,
        code: string,
    },
}

export const fetchDataOfWeather = createAsyncThunk<FullfilledRequest, DataOfPoint, ThunkAPI>(
    'weather/fetchData',
    async (dataOfPoint, thunkAPI) => {
        const { currentLang } = thunkAPI.getState().uiDataOfSearching;
        const { point, typeOfRequest, typeOfPoints } = dataOfPoint

        const url = getUrlMain(typeOfRequest, point, currentLang);
        const parseDataWithKnownProps = parseData.bind(null, typeOfRequest, point, typeOfPoints, currentLang);

        try {
            const parsedData = await axios
                .get(url)
                .then<ParsedDataOutput[]>(({ data }: AxiosResponse<ResponseFetchData>)  => {
                    return typeOfRequest === 'forecast'
                        ? data.list.flatMap((listDataItem: ResponseFetchData) => parseDataWithKnownProps(listDataItem))
                        : parseDataWithKnownProps(data);
                })
            return { parsedData };
        } catch(err) {
            const code = err.response.data.cod as string;
            return thunkAPI.rejectWithValue({ code, point })
        }


    }
);