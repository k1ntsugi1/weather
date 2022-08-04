import { createSlice, createEntityAdapter} from "@reduxjs/toolkit";
import { fetchDataOfWeather } from "./asyncThunk_fetchDataOfWeather";

const adapter_userPoints = createEntityAdapter();
const initialState = adapter_userPoints.getInitialState({loading_userPoints: null, errors_userPoinst: []});

const sliceOfdata_userPoinst = createSlice({
    name: 'data_userPoinst',
    initialState,
    reducers: {
        removeData_userPoints(state) {
            adapter_userPoints.removeAll(state);
            state.errors_userPoinst = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataOfWeather.pending, (state, { meta: { arg } }) => {
            if (arg.typeOfPoints === 'userPoints') {
                state.loading_userPoints = 'pending';
            }
        })
        .addCase(fetchDataOfWeather.fulfilled, (state,  { meta: {arg}, payload: { reducedData } }) => {
            if(arg.typeOfPoints === 'userPoints') {
                state.loading_userPoints = 'fulfilled';
                adapter_userPoints.addMany(state, reducedData.fulfilled);
                state.errors_userPoinst = [...state.errors_userPoinst, ...reducedData.rejected]
            }
        })
    }
});

export const selectors_userPoints = adapter_userPoints.getSelectors((store) => store.data_userPoints);

export const actions_userPoints = sliceOfdata_userPoinst.actions;

export default sliceOfdata_userPoinst.reducer;