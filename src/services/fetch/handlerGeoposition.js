import getUrl_additional from "./getUrl_additional";
import parserData_geoposition from "./parserData_geoposition";
import { actions_modalGeoposition } from "../../store/slices/uiSlice_modalGeoposition";
import axios from "axios";

const handlerGeoposition = async (data, currentLang, dispatch) => {
    console.log(data, 'data')
    const {coords: { latitude, longitude }} = data;
    const url = getUrl_additional(latitude, longitude);
    const response = await axios.get(url).catch((error) => console.log(error, 'error geoposition'));
    const presumedPoint = parserData_geoposition(response.data, currentLang);
    dispatch(actions_modalGeoposition.setPresumedPoint({ presumedPoint }));
    dispatch(actions_modalGeoposition.setActiveStatus());
};

export default handlerGeoposition;