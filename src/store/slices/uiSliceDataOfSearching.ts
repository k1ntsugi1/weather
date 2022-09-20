import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CyrillicToTranslit from 'cyrillic-to-translit-js';

const uiSliceDataOfSearching = createSlice({
    name: 'data_of_searching',
    initialState: {
        currentPoint: '',
        currentTypeOfRequest: 'weather',
        currentLang: localStorage.getItem('current-lang') ?? 'ru',
    },
    reducers: {
        setCurrentPoint(state, { payload: { currentPoint } }: PayloadAction<{ currentPoint: string }>) {
            state.currentPoint = currentPoint;
        },
        setCurrentTypeOfRequest(state, { payload: { currentTypeOfRequest } }: PayloadAction<{ currentTypeOfRequest: string }>) {
            state.currentTypeOfRequest = currentTypeOfRequest;
        },
        setCurrentLang(state, { payload: { currentLang } }: PayloadAction<{ currentLang: string }>) {
            const currentPoint = state.currentPoint;
            //const translit = new CyrillicToTranslit(); //@types undefined

            state.currentLang = currentLang;
            // state.currentPoint = currentLang === 'en'
            //     ? translit.transform(currentPoint)
            //     : translit.reverse(currentPoint)
        },
    },
});

export const actionsDataOfSearching = uiSliceDataOfSearching.actions;

export default uiSliceDataOfSearching.reducer;