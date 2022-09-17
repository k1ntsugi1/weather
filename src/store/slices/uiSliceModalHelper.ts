import { createSlice } from '@reduxjs/toolkit';

const uiSliceModalHelper = createSlice({
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

export const actionsModalHelper = uiSliceModalHelper.actions;

export default uiSliceModalHelper.reducer;