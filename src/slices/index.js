import { configureStore } from '@reduxjs/toolkit';

import dataResultOfSearchingReducer from './dataResultOfSearchingSlice';
import dataOfSearchingReducer from './dataOfSearchingSlice';
import uiOfModalHelperReducer from './uiOfModalHelperSlice'
export default configureStore({
    reducer: {
        dataOfSearching: dataOfSearchingReducer,
        dataResultOfSearching: dataResultOfSearchingReducer,
        uiOfModalHelper: uiOfModalHelperReducer
    },
})