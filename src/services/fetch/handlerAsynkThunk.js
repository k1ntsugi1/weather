import { actions_defaultPoints } from "../../store/slices/dataSlice_defaultPoints";
import { actions_userPoints } from "../../store/slices/dataSlice_userPoints";

import { fetchDataOfWeather } from "../../store/asyncThunk_fetchDataOfWeather";
import { batch } from "react-redux";
import { actions_dataOfSearching } from "../../store/slices/uiSlice_dataOfSearching";

const handlerAsyncThunk = (points, typeOfRequest, typeOfPoints, dispatch) => {
    console.log('start thunk')
    const mapping_removeData = {
        'defaultPoints': () => dispatch(actions_defaultPoints.removeData_defaultPoints()),
        'userPoints': () => {
            dispatch(actions_userPoints.removeData_userPoints()),
            dispatch(actions_dataOfSearching.setCurrentPoint({ currentPoint: points[0] }))
        },
    };
    mapping_removeData[typeOfPoints]();
    points.forEach((point) => dispatch(fetchDataOfWeather({ point, typeOfRequest, typeOfPoints })));

}

export default handlerAsyncThunk;