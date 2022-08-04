import { actions_defaultPoints } from "../slices/data_defaultPoints";
import { actions_userPoints } from "../slices/data_userPoints";

import { fetchDataOfWeather } from "../slices/asyncThunk_fetchDataOfWeather";
import { batch } from "react-redux";

const handlerAsyncThunk = (points, typeOfRequest, typeOfPoints, dispatch ) => {
    console.log('start thunk')
    const mapping_removeData = {
        'defaultPoints': () => dispatch(actions_defaultPoints.removeData_defaultPoints()),
        'userPoints': () => dispatch(actions_userPoints.removeData_userPoints()),
    }
    batch(() => {
        mapping_removeData[typeOfPoints]();
        points.forEach((point) => dispatch(fetchDataOfWeather({point, typeOfRequest, typeOfPoints})));
    })

}

export default handlerAsyncThunk;