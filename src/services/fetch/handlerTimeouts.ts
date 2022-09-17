import handlerAsyncThunk from "./handlerAsynkThunk";

const handlerTimeouts = (time, data, dispatch) => {
    const timeoutID = setTimeout(() => {
        handlerAsyncThunk(data, dispatch);
    }, time);

    return () => clearTimeout(timeoutID);
}

export default handlerTimeouts;