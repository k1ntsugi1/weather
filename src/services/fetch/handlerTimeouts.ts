import { AppDispatch } from "../../store";
import handlerAsyncThunk from "./handlerAsynkThunk";

export interface IHandler {
    points: string[],
    typeOfRequest: string,
    typeOfPoints: string,
    statusOfPoint: string,
    dispatch: AppDispatch
}


const handlerTimeouts = (time: number, data: IHandler) => {
    const timeoutID = setTimeout(() => {
        handlerAsyncThunk(data);
    }, time);

    return () => clearTimeout(timeoutID);
}

export default handlerTimeouts;