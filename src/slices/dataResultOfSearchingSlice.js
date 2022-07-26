import { createSlice,
    createEntityAdapter,
    createAsyncThunk
} from "@reduxjs/toolkit";

import axios from "axios";

import getUrl_main from "../fetch/getUrl_main";
import parseData from "../fetch/parseData";

export const fetchDataOfWeather = createAsyncThunk(
    'weather/fetchData',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const { currentPoint, currentLang, type } = state.dataOfSearching;

        const url = getUrl_main(type, currentPoint, currentLang);
        const response = await axios.get(url);
        const parsedData = parseData(response.data);
        return {type, parsedData};
    }
);

const weatherAdapter = createEntityAdapter();
const initialState = weatherAdapter.getInitialState({loading: null, error: null});

const dataResultOfSearchingSlice = createSlice({
    name: 'data-result-of-searching-slice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataOfWeather.pending, (state) => {
            state.loading = 'pending';
            state.error = null;
        })
        .addCase(fetchDataOfWeather.fulfilled, (state, { payload: { parsedData } }) => {
            state.loading = 'fulfilled';
            state.error = null;
            booksAdapter.upsertMany(state, parsedData);
        })
        .addCase(fetchDataOfWeather.rejected, (state, {error}) => {
            state.loading = 'error';  
            state.error = error;  
        })
    }
});

export const selectorsDataResultOfSearching = weatherAdapter.getSelectors((store) => store.dataResultOfSearching);

export const actionsDataResultOfSearching = dataResultOfSearchingSlice.actions;

export default dataResultOfSearchingSlice.reducer;