import { createContext } from "react";

interface DefaultPoints {
    defaultPoints?: string[],
    defaultType?: string,
    statusOfPoint?: string
}

const contextDefaultPoints = createContext<DefaultPoints | {}>({});

export { contextDefaultPoints };