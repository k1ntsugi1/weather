import { createSlice } from '@reduxjs/toolkit';

const dataSlice_idsTimeouts = createSlice({
    name: 'data_of_ids_timeouts',
    initialState: {
        ids_timeouts: []
    },
    reducers: {
        setID_timeouts(state, { payload: { timeoutID }}) {
            state.ids_timeouts = [...state.ids_timeouts, timeoutID];
        },
        removeAll_timeouts(state) {
            state.ids_timeouts = [];
        }
    },
});

export const actions_idsTimeouts = dataSlice_idsTimeouts.actions;

export default dataSlice_idsTimeouts.reducer;