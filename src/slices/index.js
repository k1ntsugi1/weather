import { configureStore } from '@reduxjs/toolkit';

import dataResultOfSearchingReducer from './dataResultOfSearchingSlice';
import dataOfSearchingReducer from './dataOfSearchingSlice';

export default configureStore({
    reducer: {
        dataOfSearching: dataOfSearchingReducer,
        dataResultOfSearching: dataResultOfSearchingReducer
    },
})