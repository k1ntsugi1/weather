import { useContext } from "react";

import { contextDefaultPoints } from "./contextDefaultPoints";

export const useDefaultPoints = () => useContext(contextDefaultPoints);