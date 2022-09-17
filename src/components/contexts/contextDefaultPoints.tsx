import { createContext } from "react";

interface DefaultPoints {
    defaultPoints: object[],
    defaultType: string,
    statusOfPoint: string
}

const contextDefaultPoints = createContext<DefaultPoints | {}>({});

export { contextDefaultPoints };