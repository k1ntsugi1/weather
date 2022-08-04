import { configureStore } from '@reduxjs/toolkit';

import reducerData_defaultPoints from './data_defaultPoints'
import reducerData_userPoinst from './data_userPoints'
import uiOfModalHelperReducer from './uiOfModalHelperSlice'
export default configureStore({
    reducer: {
        data_userPoints: reducerData_userPoinst,
        data_defaultPoints: reducerData_defaultPoints,
        uiOfModalHelper: uiOfModalHelperReducer
    },
})