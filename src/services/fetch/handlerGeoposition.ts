import axios from 'axios';
import { toast } from 'react-toastify';
import getUrl_additional from './getUrlAdditional';
import parserData_geoposition from './parserDataGeoposition';
import { actionsModalGeoposition } from '../../store/slices/uiSliceModalGeoposition';
import { useTranslation } from 'react-i18next';

const handlerGeoposition = async (data, currentLang: string, dispatch) => {
  const { t } = useTranslation()
  const { coords: { latitude, longitude } } = data;
  const url = getUrl_additional(latitude, longitude);
  try {
    const response = await axios.get(url);
    const presumedPoint = parserData_geoposition(response.data, currentLang);
    dispatch(actionsModalGeoposition.setPresumedPoint({ presumedPoint }));
    dispatch(actionsModalGeoposition.setActiveStatus());
  } catch {
    toast(`😲 ${t('toastText.undefinedPoint')}!`, {
      className: 'bg-main color-additional',
      position: 'top-center',
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
};

export default handlerGeoposition;
