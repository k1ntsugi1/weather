import { createSlice, createEntityAdapter, PayloadAction} from "@reduxjs/toolkit";
import { fetchDataOfWeather } from "../asyncThunkFetchDataOfWeather";
import { ParsedDataOutput } from '../../interfaces/ResponseParsedData';
import { RootState } from '../index';

type ErrorUserPoints = {
    code: string,
    point: string
};
interface InitialState {
    loadingUserPoints: string | null,
    errorsUserPoints: ErrorUserPoints[]
};

const adapterUserPoints = createEntityAdapter();
const myInitialState: InitialState = {loadingUserPoints: null, errorsUserPoints: []};

const dataSliceUserPoints = createSlice({
    name: 'data_userPoinst',
    initialState: adapterUserPoints.getInitialState(myInitialState),
    reducers: {
        removeDataUserPoints(state) {
            adapterUserPoints.removeAll(state);
            state.errorsUserPoints = [];
            state.loadingUserPoints = null;
        },
        removeDataRejectedUserPoints(state) {
            state.errorsUserPoints = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataOfWeather.pending, (state, { meta: { arg } }) => {
            if (arg.typeOfPoints === 'userPoints') {
                state.loadingUserPoints = 'pending';
            }
        })
        .addCase(fetchDataOfWeather.fulfilled, (state,  { meta: {arg}, payload: { parsedData } }) => {
            if(arg.typeOfPoints === 'userPoints') {
                state.loadingUserPoints = 'fulfilled';
                adapterUserPoints.addMany(state, parsedData);
            }
        })
        .addCase(fetchDataOfWeather.rejected, (state, { meta: { arg }, payload }) => {
            if(arg.typeOfPoints === 'userPoints') {
                state.loadingUserPoints = 'rejected';
                state.errorsUserPoints = [ ...state.errorsUserPoints, payload]
            }
        })
    }
});

export const selectorsUserPoints = adapterUserPoints.getSelectors((store: RootState) => store.dataUserPoints);

export const actionsUserPoints =  dataSliceUserPoints.actions;

export default  dataSliceUserPoints.reducer;