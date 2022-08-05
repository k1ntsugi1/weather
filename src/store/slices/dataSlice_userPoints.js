import { createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import { fetchDataOfWeather } from "../asyncThunk_fetchDataOfWeather";

const adapter_userPoints = createEntityAdapter();
const initialState = adapter_userPoints.getInitialState({loading_userPoints: null, errors_userPoints: []});

const dataSlice_userPoinst = createSlice({
    name: 'data_userPoinst',
    initialState,
    reducers: {
        removeData_userPoints(state) {
            adapter_userPoints.removeAll(state);
            state.errors_userPoints = [];
            state.loading_userPoints = null;
        },
        removeData_rejectedUserPoints(state) {
            state.errors_userPoints = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataOfWeather.pending, (state, { meta: { arg } }) => {
            if (arg.typeOfPoints === 'userPoints') {
                state.loading_userPoints = 'pending';
            }
        })
        .addCase(fetchDataOfWeather.fulfilled, (state,  { meta: {arg}, payload: { parsedData } }) => {
            if(arg.typeOfPoints === 'userPoints') {
                state.loading_userPoints = 'fulfilled';
                adapter_userPoints.addMany(state, parsedData);
            }
        })
        .addCase(fetchDataOfWeather.rejected, (state, { meta: { arg }, payload }) => {
            if(arg.typeOfPoints === 'userPoints') {
                state.loading_userPoints = 'rejected';
                state.errors_userPoints = [ ...state.errors_userPoints, payload]
            }
        })
    }
});

export const selectors_userPoints = adapter_userPoints.getSelectors((store) => store.data_userPoints);

export const actions_userPoints =  dataSlice_userPoinst.actions;

export default  dataSlice_userPoinst.reducer;