import handlerAsyncThunk from "./handlerAsynkThunk";
import { actions_idsTimeouts } from "../../store/slices/dataSlice_idsTimeouts";

const handlerTimeouts = (time, data, dispatch) => {
    console.log('setTimer')
    const timeoutID = setTimeout(() => {
        handlerAsyncThunk(data, dispatch);
    }, time);

    dispatch(actions_idsTimeouts.setID_timeouts({timeoutID}))

    return () => clearTimeout(timeoutID);
}

export default handlerTimeouts;