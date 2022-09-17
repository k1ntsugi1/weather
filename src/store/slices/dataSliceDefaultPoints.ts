import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchDataOfWeather } from "../asyncThunkFetchDataOfWeather";
import _ from 'lodash';
import { RootState } from "..";

type ErrorDefaultPoints = {
    code?: string,
    point?: string // если не сделать опциональными то выдатеся ошибка
};

interface InitialState {
    loadingDefaultPoints: string[] | [],
    errorsDefaultPoints: ErrorDefaultPoints[] | []
}

type PrepairedLoading = (
    state: any,/////!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    point: string,
    firstStatus: string,
    secondStatus: string
) => (nextStrOfLoading:string) => string[];

const prepaireDefaultPoints: PrepairedLoading = (state, point, firstStatus, secondStatus) => {
    const filteredLoading = _.without(state.loadingDefaultPoints, `${firstStatus}_${point}`, `${secondStatus}_${point}`);
    const sortedByPoint = (nextStatusOfLoading: string): string[] => {
        const collection = [...filteredLoading, nextStatusOfLoading];
        return _.sortBy(collection, [function(loadingStatus) {return loadingStatus.split('_')[1]}])
    };
    return sortedByPoint;
};



const myInitialState: InitialState = { loadingDefaultPoints: [], errorsDefaultPoints: [] }

const adapterDefaultPoints = createEntityAdapter();
const initialState = adapterDefaultPoints.getInitialState(myInitialState);

const dataSliceDefaultPoints = createSlice({
    name: 'data_defaultPoints',
    initialState,
    reducers: {
        removeDataDefaultPoints(state) {
            adapterDefaultPoints.removeAll(state);
            state.errorsDefaultPoints = [];
            state.loadingDefaultPoints = [];
        },
        removeDataRejectedDefaultPoints(state) {
            state.errorsDefaultPoints = [];
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDataOfWeather.pending, (state, { meta: { arg } }) => {
            if (arg.typeOfPoints === 'defaultPoints') {
                const prepairedLoading = prepaireDefaultPoints(state, arg.point, 'fulfilled', 'rejected')(`pending_${arg.point}`);
                state.loadingDefaultPoints = prepairedLoading;
            }
        })
        .addCase(fetchDataOfWeather.fulfilled, (state, { meta: { arg }, payload: { parsedData } }) => {
           if(arg.typeOfPoints === 'defaultPoints') {
                const prepairedLoading = prepaireDefaultPoints(state, arg.point, 'pending', 'rejected')(`fulfilled_${arg.point}`);
                state.loadingDefaultPoints = prepairedLoading;
                adapterDefaultPoints.addMany(state, parsedData);
            }
        })
        .addCase(fetchDataOfWeather.rejected, (state, { meta: { arg }, payload }) => {
            if(arg.typeOfPoints === 'defaultPoints') {
                const prepairedLoading = prepaireDefaultPoints(state, arg.point, 'pending', 'fulfilled')(`rejected_${arg.point}`);
                state.loadingDefaultPoints = prepairedLoading;
                state.errorsDefaultPoints = [ ...state.errorsDefaultPoints, payload]
            }
        })
    }
});

export const selectorsDefaultPoints = adapterDefaultPoints.getSelectors((store: RootState) => store.dataDefaultPoints);

export const actionsDefaultPoints = dataSliceDefaultPoints.actions;

export default dataSliceDefaultPoints.reducer;