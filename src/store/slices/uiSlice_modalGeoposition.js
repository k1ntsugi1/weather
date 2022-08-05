import { createSlice } from '@reduxjs/toolkit';

const uiSlice_modalGeoposition = createSlice({
    name: 'ui_of_modal_geoposition',
    initialState: {
        presumedPoint: '',
        isActive: false
    },
    reducers: {
        setPresumedPoint(state, { payload: { presumedPoint } }) {
            state.presumedPoint = presumedPoint;
        },
        setActiveStatus(state, _) {
            state.isActive = true;
        },
        setUnactiveStatus(state, _) {
            state.isActive = false;
        },
    },
});

export const actions_modalGeoposition = uiSlice_modalGeoposition.actions;

export default uiSlice_modalGeoposition.reducer;