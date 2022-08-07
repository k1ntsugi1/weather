import getUrl_additional from "./getUrl_additional";
import parserData_geoposition from "./parserData_geoposition";
import { actions_modalGeoposition } from "../../store/slices/uiSlice_modalGeoposition";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';

const handlerGeoposition = async (data, currentLang, dispatch, t) => {
    const { coords: { latitude, longitude } } = data;
    const url = getUrl_additional(latitude, longitude);
    try {
        const response = await axios.get(url);
        const presumedPoint = parserData_geoposition(response.data, currentLang);
        dispatch(actions_modalGeoposition.setPresumedPoint({ presumedPoint }));
        dispatch(actions_modalGeoposition.setActiveStatus());
    } catch {
        toast(`😲 ${t("toastText.undefinedPoint")}!`, {
            className: "bg-main color-additional",
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }

};

export default handlerGeoposition;