import handlerAsyncThunk from "./handlerAsynkThunk";

const handlerTimeouts = (time, data, dispatch) => {
    console.log('setTimer')
    const timeoutID = setTimeout(() => {
        handlerAsyncThunk(data, dispatch);
    }, time);

    return () => clearTimeout(timeoutID);
}

export default handlerTimeouts;