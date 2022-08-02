import { actionsDataOfSearching } from "../slices/dataOfSearchingSlice";
import { actionsDataResultOfSearching } from "../slices/dataResultOfSearchingSlice";
import { fetchDataOfWeather } from "../slices/dataResultOfSearchingSlice";
import { batch } from "react-redux";

const handlerAsyncThunk = (points, currentTypeOfRequest, typeOfPoints, ids, dispatch ) => {
    console.log('start thunk')
    const idsParsed = ids.reduce((acc, id) => {
        const typeOfPoint = id.includes(`defaultPoints`) ? 'defaultPoints' : 'userPoints';
        acc[typeOfPoint] = acc[typeOfPoint] ? [...acc[typeOfPoint], id] : [id]
        return acc;
    }, { });
    batch(() => {
        dispatch(actionsDataResultOfSearching.removeItems({idsForRemoving: idsParsed[typeOfPoints] ?? [] }));
        dispatch(fetchDataOfWeather({points, currentTypeOfRequest, typeOfPoints}));
    })

}

export default handlerAsyncThunk;