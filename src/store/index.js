import { configureStore } from '@reduxjs/toolkit';

import reducerData_defaultPoints from './slices/dataSlice_defaultPoints';
import reducerData_userPoinst from './slices/dataSlice_userPoints';
import reducerUi_modalHelper from './slices/uiSlice_modalHelper';
import reducerUi_dataOfSearching from './slices/uiSlice_dataOfSearching'

export default configureStore({
    reducer: {
        data_userPoints: reducerData_userPoinst,
        data_defaultPoints: reducerData_defaultPoints,
        ui_modalHelper: reducerUi_modalHelper,
        ui_dataOfSearching: reducerUi_dataOfSearching
    },
})