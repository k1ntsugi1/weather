import { createSlice } from '@reduxjs/toolkit';

const uiSlice_dataOfSearching = createSlice({
    name: 'data-of-searching',
    initialState: {
        currentPoint: null,
        currentLang: localStorage.getItem('current-lang') ?? 'ru',
    },
    reducers: {
        setCurrentPoint(state, { payload: { currentPoint }}) {
            state.currentPoint = currentPoint;
        },
        setCurrentLang(state, { payload: { currentLang }}) {
            state.currentLang = currentLang;
        },
    },
});

export const actions_dataOfSearching = uiSlice_dataOfSearching.actions;

export default uiSlice_dataOfSearching.reducer;