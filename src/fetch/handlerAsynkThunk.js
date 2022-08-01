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

    const idsForRemoving = ids.filter((id) => id.includes(`active`));
    
    batch(() => {
        dispatch(actionsDataOfSearching.setCurrentPoint({ currentPoint }));
        dispatch(actionsDataOfSearching.setCurrentType({ currentType }));
        dispatch(actionsDataResultOfSearching.removeItems({idsForRemoving}));
        dispatch(fetchDataOfWeather())
    })
}

export default handlerAsyncThunk;