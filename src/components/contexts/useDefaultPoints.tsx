import { useContext } from "react";

import { context_defaultPoints } from "./contextDefaultPoints";

export const useDefaultPoints = () => useContext(context_defaultPoints);