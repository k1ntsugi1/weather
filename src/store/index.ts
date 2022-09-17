import { configureStore } from '@reduxjs/toolkit';

import reducerDataDefaultPoints from './slices/dataSliceDefaultPoints';
import reducerDataUserPoinst from './slices/dataSliceUserPoints';
import reducerUiModalHelper from './slices/uiSliceModalHelper';
import reducerUiModalGeoposition from './slices/uiSliceModalGeoposition';
import reducerUiDataOfSearching from './slices/uiSliceDataOfSearching'


const store = configureStore({
    reducer: {
        dataUserPoints: reducerDataUserPoinst,
        dataDefaultPoints: reducerDataDefaultPoints,
        uiModalHelper: reducerUiModalHelper,
        uiModalGeoposition: reducerUiModalGeoposition,
        uiDataOfSearching: reducerUiDataOfSearching
    },
});

export type RootState = ReturnType<typeof store.getState> // !!!!!!

export type AppDispatch = typeof store.dispatch; // !!!!!!!!!!!!
 // !!!!!!!!!!

export default store;