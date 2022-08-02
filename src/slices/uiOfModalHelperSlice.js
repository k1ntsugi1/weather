import { createSlice } from '@reduxjs/toolkit';

const uiOfModalHelperSlice = createSlice({
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

export const actionsUiModalHelper = uiOfModalHelperSlice.actions;

export default uiOfModalHelperSlice.reducer;