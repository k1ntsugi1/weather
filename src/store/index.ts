import { configureStore } from '@reduxjs/toolkit';

import reducerDataDefaultPoints from './slices/dataSliceDefaultPoints';
import reducerDataUserPoinst from './slices/dataSliceUserPoints';
import reducerUiModalHelper from './slices/uiSliceModalHelper';
import reducerUiModalGeoposition from './slices/uiSliceModalGeoposition';
import reducerUiDataOfSearching from './slices/uiSliceDataOfSearching'

export default configureStore({
    reducer: {
        dataUserPoints: reducerDataUserPoinst,
        dataDefaultPoints: reducerDataDefaultPoints,
        uiModalHelper: reducerUiModalHelper,
        uiModalGeoposition: reducerUiModalGeoposition,
        uiMataOfSearching: reducerUiDataOfSearching
    },
})