import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GeoposPayload {
    presumedPoint: string,
} 

const uiSliceModalGeoposition = createSlice({
    name: 'ui_of_modal_geoposition',
    initialState: {
        presumedPoint: '',
        isActive: false
    },
    reducers: {
        setPresumedPoint(state, { payload: { presumedPoint } }: PayloadAction<GeoposPayload>) {
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

export const actionsModalGeoposition = uiSliceModalGeoposition.actions;

export default uiSliceModalGeoposition.reducer;