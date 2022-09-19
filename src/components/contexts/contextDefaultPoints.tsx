import { createContext } from "react";

type DefaultPoints =  string[];
const contextDefaultPoints = createContext<DefaultPoints>([]);

export { contextDefaultPoints };