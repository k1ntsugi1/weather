import { actionsDefaultPoints } from '../../store/slices/dataSliceDefaultPoints';
import { actionsUserPoints } from '../../store/slices/dataSliceUserPoints';

import { fetchDataOfWeather } from '../../store/asyncThunkFetchDataOfWeather';
import { actionsDataOfSearching } from '../../store/slices/uiSliceDataOfSearching';

const handlerAsyncThunk = (data, dispatch) => {
  const {
    points, typeOfRequest, typeOfPoints, statusOfPoint,
  } = data;
  const mapping_typeOfPoints = {
    defaultPoints: () => {
      statusOfPoint === 'rejected'
        ? dispatch(actionsDefaultPoints.removeData_rejectedDefaultPoints())
        : dispatch(actionsDefaultPoints.removeData_defaultPoints());
    },
    userPoints: () => {
      statusOfPoint === 'rejected'
        ? dispatch(actionsUserPoints.removeData_rejectedUserPoints())
        : dispatch(actionsUserPoints.removeData_userPoints());
      dispatch(actionsDataOfSearching.setCurrentPoint({ currentPoint: points[0] }));
      dispatch(actionsDataOfSearching.setCurrentTypeOfRequest({ currentTypeOfRequest: typeOfRequest }));
    },
  };
  mapping_typeOfPoints[typeOfPoints]();
  points.forEach((point) => dispatch(fetchDataOfWeather({ point, typeOfRequest, typeOfPoints })));
};

export default handlerAsyncThunk;
