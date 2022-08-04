import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchDataOfWeather } from "./asyncThunk_fetchDataOfWeather";

const adapter_defaultPoints = createEntityAdapter();
const initialState = adapter_defaultPoints.getInitialState({loading_defaultPoints: null, errors_defaultPoints: []});

const sliceOfdata_defaultPoints = createSlice({
    name: 'data_defaultPoints',
    initialState,
    reducers: {
        removeData_defaultPoints(state) {
            adapter_defaultPoints.removeAll(state);
            state.errors_defaultPoints = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataOfWeather.pending, (state, { meta: { arg } }) => {
            console.log(arg)
            if (arg.typeOfPoints === 'defaultPoints') {
                state.loading_defaultPoints = 'pending';
            }
        })
        .addCase(fetchDataOfWeather.fulfilled, (state, { meta: { arg }, payload: { reducedData } }) => {
           if(arg.typeOfPoints === 'defaultPoints') {
                state.loading_defaultPoints = 'fulfilled';
                adapter_defaultPoints.addMany(state, reducedData.fulfilled);
                state.errors_defaultPoints = [...state.errors_defaultPoints, ...reducedData.rejected]
            }
        })
    }
});

export const selectors_defaultPoints = adapter_defaultPoints.getSelectors((store) => store.data_defaultPoints);

export const actions_defaultPoints = sliceOfdata_defaultPoints.actions;

export default sliceOfdata_defaultPoints.reducer;