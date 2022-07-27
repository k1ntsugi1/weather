import { useContext } from "react";

import { DefaultPointsContext } from "../index_Contexts";

export const useDefaultPoints = () => useContext(DefaultPointsContext);