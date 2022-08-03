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
                 .catch((error) => [{error: error.response.data, id: `rejected_${point}_${typeOfPoints}_${currentTypeOfRequest}`}])
        });

        const responsesData = await Promise.all(promises);
        return { responsesData: responsesData.flat() };
    }
);

const weatherAdapter = createEntityAdapter();
const initialState = weatherAdapter.getInitialState({loading: null, errors: []});

const dataResultOfSearchingSlice = createSlice({
    name: 'data-result-of-searching-slice',
    initialState,
    reducers: {
        removeItems(state, {payload: {idsForRemoving}}) {
            weatherAdapter.removeMany(state, idsForRemoving);
        },
        removeAllWeathers(state) {
            weatherAdapter.removeAll(state);
            state.errors = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataOfWeather.pending, (state) => {
            state.loading = 'pending';
        })
        .addCase(fetchDataOfWeather.fulfilled, (state, { payload: { responsesData } }) => {
            state.loading = 'fulfilled';
            const filteredData = responsesData.reduce((acc,item) => {
                const statusOfRequest = item.id.split('_')[0];
                acc[statusOfRequest] = [...acc[statusOfRequest], item];
                return acc;
            }, { fulfilled: [], rejected: [] });
             weatherAdapter.addMany(state, filteredData.fulfilled);
             state.errors = [...state.errors, ...filteredData.rejected]
        })
    }
});

export const selectorsDataResultOfSearching = weatherAdapter.getSelectors((store) => store.dataResultOfSearching);

export const actionsDataResultOfSearching = dataResultOfSearchingSlice.actions;

export default dataResultOfSearchingSlice.reducer;