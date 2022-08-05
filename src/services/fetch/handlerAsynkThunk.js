import { actions_defaultPoints } from "../../store/slices/dataSlice_defaultPoints";
import { actions_userPoints } from "../../store/slices/dataSlice_userPoints";

import { fetchDataOfWeather } from "../../store/asyncThunk_fetchDataOfWeather";
import { actions_dataOfSearching } from "../../store/slices/uiSlice_dataOfSearching";

const handlerAsyncThunk = (data, dispatch) => {
    const {points, typeOfRequest, typeOfPoints, statusOfPoint } = data;
    const mapping_typeOfPoints = {
        'defaultPoints': () => {
            statusOfPoint === 'rejected'
            ? dispatch(actions_defaultPoints.removeData_rejectedDefaultPoints())
            : dispatch(actions_defaultPoints.removeData_defaultPoints());
        },
        'userPoints': () => {
            statusOfPoint === 'rejected' 
            ? dispatch(actions_userPoints.removeData_rejectedUserPoints())
            : dispatch(actions_userPoints.removeData_userPoints());
            dispatch(actions_dataOfSearching.setCurrentPoint({ currentPoint: points[0] }));
            dispatch(actions_dataOfSearching.setCurrentTypeOfRequest({ currentTypeOfRequest: typeOfRequest }))
        },
    };
    mapping_typeOfPoints[typeOfPoints]();
    points.forEach((point) => dispatch(fetchDataOfWeather({ point, typeOfRequest, typeOfPoints })));

}

export default handlerAsyncThunk;