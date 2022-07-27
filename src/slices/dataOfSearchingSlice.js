import { createSlice } from '@reduxjs/toolkit';

const dataOfSearchingSlice = createSlice({
    name: 'data-of-searching',
    initialState: {
        currentPoint: null,
        currentLang: localStorage.getItem('current-lang') ?? 'ru',
        currentType: null,
    },
    reducers: {
        setCurrentPoint(state, { payload: { currentPoint }}) {
            state.currentPoint = currentPoint;
        },
        setCurrentLang(state, { payload: { currentLang }}) {
            state.currentLang = currentLang;
        },
        setCurrentType(state, { payload: { currentType }}) {
            state.currentType = currentType;
        }
    },
});

export const actionsDataOfSearching = dataOfSearchingSlice.actions;

export default dataOfSearchingSlice.reducer;