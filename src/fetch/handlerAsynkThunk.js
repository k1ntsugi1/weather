import { actionsDataOfSearching } from "../slices/dataOfSearchingSlice";
import { actionsDataResultOfSearching } from "../slices/dataResultOfSearchingSlice";
import { fetchDataOfWeather } from "../slices/dataResultOfSearchingSlice";
import { batch } from "react-redux";

const handlerAsyncThunk = (defaultPoints, point, previousPoint, type, ids, dispatch) => {

    const currentPoint = point
        .trim()
        .split('')
        .map((symbol, index) => index === 0 ? symbol.toUpperCase() : symbol)
        .join('');
    const currentType = type.trim();
    console.log( defaultPoints.includes(currentPoint), defaultPoints, currentPoint, previousPoint, type)
    const idsForRemoving = ids.filter((id) => {
        if(id.includes(`${currentType}_${currentPoint}`))  return true;
        if(defaultPoints.includes(currentPoint)) return false;
        if(id.includes(`${currentType}_${previousPoint}`))  return true;

    });
    batch(() => {
        dispatch(actionsDataOfSearching.setCurrentPoint({ currentPoint }));
        dispatch(actionsDataOfSearching.setCurrentType({ currentType }));
        dispatch(actionsDataResultOfSearching.removeItems({idsForRemoving}));
        dispatch(fetchDataOfWeather())
    })
}

export default handlerAsyncThunk;