import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchDataOfWeather } from "../asyncThunk_fetchDataOfWeather";
import _ from 'lodash';

const filterLoading_defaultPoints = (state, point, firstStatus, secondStatus) => {
    return _.without(state.loading_defaultPoints, `${firstStatus}_${point}`, `${secondStatus}_${point}`)
}

const adapter_defaultPoints = createEntityAdapter();
const initialState = adapter_defaultPoints.getInitialState({loading_defaultPoints: [], errors_defaultPoints: []});

const dataSlice_defaultPoints = createSlice({
    name: 'data_defaultPoints',
    initialState,
    reducers: {
        removeData_defaultPoints(state) {
            adapter_defaultPoints.removeAll(state);
            state.errors_defaultPoints = [];
            state.loading_defaultPoints = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataOfWeather.pending, (state, { meta: { arg } }) => {
            if (arg.typeOfPoints === 'defaultPoints') {
                const filteredLoading = filterLoading_defaultPoints(state, arg.point, 'fulfilled', 'rejected');
                state.loading_defaultPoints = [...filteredLoading, `pending_${arg.point}`];
            }
        })
        .addCase(fetchDataOfWeather.fulfilled, (state, { meta: { arg }, payload: { parsedData } }) => {
           if(arg.typeOfPoints === 'defaultPoints') {
                const filteredLoading = filterLoading_defaultPoints(state, arg.point, 'pending', 'rejected');
                state.loading_defaultPoints = [...filteredLoading, `fulfilled_${arg.point}`];
                adapter_defaultPoints.addMany(state, parsedData);
            }
        })
        .addCase(fetchDataOfWeather.rejected, (state, { meta: { arg }, payload }) => {
            if(arg.typeOfPoints === 'defaultPoints') {
                const filteredLoading = filterLoading_defaultPoints(state, arg.point, 'pending', 'fulfilled');
                state.loading_defaultPoints = [...filteredLoading, `rejected_${arg.point}`];
                state.errors_defaultPoints = [ ...state.errors_defaultPoints, payload]
            }
        })
    }
});

export const selectors_defaultPoints = adapter_defaultPoints.getSelectors((store) => store.data_defaultPoints);

export const actions_defaultPoints = dataSlice_defaultPoints.actions;

export default dataSlice_defaultPoints.reducer;