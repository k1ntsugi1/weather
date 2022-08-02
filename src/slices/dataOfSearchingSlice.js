import { createSlice } from '@reduxjs/toolkit';

const dataOfSearchingSlice = createSlice({
    name: 'data-of-searching',
    initialState: {
        currentPoint: null,
    },
    reducers: {
        setCurrentPoint(state, { payload: { currentPoint }}) {
            state.currentPoint = currentPoint;
        },
    },
});

export const actionsDataOfSearching = dataOfSearchingSlice.actions;

export default dataOfSearchingSlice.reducer;