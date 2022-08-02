import { createSlice,
    createEntityAdapter,
    createAsyncThunk
} from "@reduxjs/toolkit";

import axios from "axios";

import getUrl_main from "../fetch/getUrl_main";
import parseData from "../fetch/parseData";

export const fetchDataOfWeather = createAsyncThunk(
    'weather/fetchData',
    async (dataOfPoint) => {
        
        const { points,  currentTypeOfRequest, typeOfPoints } = dataOfPoint 
        const currentLang = localStorage.getItem('current-lang')

        const promises = points.map((point) => {
            const url = getUrl_main(currentTypeOfRequest, point, currentLang)
            return axios.get(url)
                 .then((response) => parseData(currentTypeOfRequest, point, response.data, typeOfPoints))
                 .catch((error) => [{error, id: `error_${point}_${typeOfPoints}_${currentTypeOfRequest}`}])
        });

        const responsesData = await Promise.all(promises);

        return { responsesData };
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
        .addCase(fetchDataOfWeather.fulfilled, (state, { payload: { responsesData } }) => {
            state.loading = 'fulfilled';
            state.error = null;
            responsesData.forEach((data) => weatherAdapter.addMany(state, data));
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