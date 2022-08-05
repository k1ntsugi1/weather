import { createSlice } from '@reduxjs/toolkit';
import CyrillicToTranslit from 'cyrillic-to-translit-js';



const uiSlice_dataOfSearching = createSlice({
    name: 'data_of_searching',
    initialState: {
        currentPoint: '',
        currentTypeOfRequest: 'weather',
        currentLang: localStorage.getItem('current-lang') ?? 'ru',
    },
    reducers: {
        setCurrentPoint(state, { payload: { currentPoint } }) {
            state.currentPoint = currentPoint;
        },
        setCurrentTypeOfRequest(state, { payload: { currentTypeOfRequest } }) {
            state.currentTypeOfRequest = currentTypeOfRequest;
        },
        setCurrentLang(state, { payload: { currentLang } }) {
            const currentPoint = state.currentPoint;
            const translit = new CyrillicToTranslit();

            state.currentLang = currentLang;
            state.currentPoint = currentLang === 'en'
                ? translit.transform(currentPoint)
                : translit.reverse(currentPoint)
        },
    },
});

export const actions_dataOfSearching = uiSlice_dataOfSearching.actions;

export default uiSlice_dataOfSearching.reducer;