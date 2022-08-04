import { createSlice } from '@reduxjs/toolkit';

const uiSlice_modalHelper = createSlice({
    name: 'ui-of-modal-helper',
    initialState: {
        isActive: false
    },
    reducers: {
        setActiveStatus(state, _) {
            state.isActive = true;
        },
        setUnactiveStatus(state, _) {
            state.isActive = false;
        },
    },
});

export const actions_modalHelper = uiSlice_modalHelper.actions;

export default uiSlice_modalHelper.reducer;