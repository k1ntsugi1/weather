import { createSlice,
    createEntityAdapter,
    createAsyncThunk
} from "@reduxjs/toolkit";

import axios from "axios";

import getUrl_main from "../fetch/getUrl_main";
import parseData from "../fetch/parseData";

export const fetchDataOfWeather = createAsyncThunk(
    'weather/fetchData',
    async (defaultPoint, thunkAPI) => {
        const state = thunkAPI.getState();
        const { currentPoint,  currentType } = defaultPoint ? defaultPoint : state.dataOfSearching;
        const { currentLang} = state.dataOfSearching;
        const url = getUrl_main(currentType, currentPoint, currentLang);
        const response = await axios.get(url);
        const parsedData = parseData(currentType, currentPoint, response.data);
        return { parsedData };
    }
);

const weatherAdapter = createEntityAdapter();
const initialState = weatherAdapter.getInitialState({loading: null, error: null});

const dataResultOfSearchingSlice = createSlice({
    name: 'data-result-of-searching-slice',
    initialState,
    reducers: {
        removeItems(state, {payload: {idsForRemoving}}) {
            weatherAdapter.removeMany(state, idsForRemoving);
        },
        removeAllWeathers: weatherAdapter.removeAll,
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
            weatherAdapter.addMany(state, parsedData);
        })
        .addCase(fetchDataOfWeather.rejected, (state, {error}) => {
            console.log(error)
            state.loading = 'error';  
            state.error = error;  
        })
    }
});

export const selectorsDataResultOfSearching = weatherAdapter.getSelectors((store) => store.dataResultOfSearching);

export const actionsDataResultOfSearching = dataResultOfSearchingSlice.actions;

export default dataResultOfSearchingSlice.reducer;