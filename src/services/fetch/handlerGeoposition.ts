import axios from 'axios';
import { toast } from 'react-toastify';
import getUrlAdditional from './getUrlAdditional';
import parserDataGeoposition from './parserDataGeoposition';
import { actionsModalGeoposition } from '../../store/slices/uiSliceModalGeoposition';
import { useTranslation } from 'react-i18next';
import { AppDispatch } from '../../store';

const handlerGeoposition = async (data: GeolocationPosition, currentLang: string, dispatch: AppDispatch): Promise<void> => {
  const { t } = useTranslation()
  const { coords: { latitude, longitude } } = data;
  const url = getUrlAdditional(latitude, longitude);

  try {
    const response = await axios.get(url); // any response
    const presumedPoint = parserDataGeoposition(response.data, currentLang); // any props here
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
