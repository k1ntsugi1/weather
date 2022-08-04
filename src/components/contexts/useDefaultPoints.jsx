import { useContext } from "react";

import { context_defaultPoints } from "./context_defaultPoints";

export const useDefaultPoints = () => useContext(context_defaultPoints);