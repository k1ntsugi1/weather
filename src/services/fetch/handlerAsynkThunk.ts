import { actionsDefaultPoints } from '../../store/slices/dataSliceDefaultPoints';
import { actionsUserPoints } from '../../store/slices/dataSliceUserPoints';

import { fetchDataOfWeather } from '../../store/asyncThunkFetchDataOfWeather';
import { actionsDataOfSearching } from '../../store/slices/uiSliceDataOfSearching';

import { IHandler } from './handlerTimeouts';

interface Mapping {
  [key: string]: () => void,
}

const handlerAsyncThunk = (data: IHandler) => {
  const {
    points, typeOfRequest, typeOfPoints, statusOfPoint, dispatch
  } = data;
  const mappingTypeOfPoints: Mapping = {
    defaultPoints: () => {
      statusOfPoint === 'rejected'
        ? dispatch(actionsDefaultPoints.removeDataRejectedDefaultPoints())
        : dispatch(actionsDefaultPoints.removeDataDefaultPoints());
    },
    userPoints: () => {
      statusOfPoint === 'rejected'
        ? dispatch(actionsUserPoints.removeDataRejectedUserPoints())
        : dispatch(actionsUserPoints.removeDataUserPoints());
      dispatch(actionsDataOfSearching.setCurrentPoint({ currentPoint: points[0] }));
      dispatch(actionsDataOfSearching.setCurrentTypeOfRequest({ currentTypeOfRequest: typeOfRequest }));
    },
  };
  mappingTypeOfPoints[typeOfPoints]();
  points.forEach((point) => dispatch(fetchDataOfWeather({ point, typeOfRequest, typeOfPoints })));
};

export default handlerAsyncThunk;
