import React from "react";
import { useTranslation, withTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import getUrlImg from "../../../services/fetch/getUrlImg";
import handlerAsyncThunk from "../../../services/fetch/handlerAsynkThunk";
import { selectorsDefaultPoints } from "../../../store/slices/dataSliceDefaultPoints";
import { useAppSelector, useAppDispatch } from '../../../store/hooks';
import { ParsedDataOutput } from '../../../interfaces/ResponseParsedData';

interface ICardWeatherSmall {
    [key: string]: string
}

const CardWeatherSmall: React.FC<ICardWeatherSmall> = ({id, img}) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const navigate = useNavigate()

    const fulfilledDefaultPoinst = useAppSelector(selectorsDefaultPoints.selectEntities);
    const { city, weather, main } = fulfilledDefaultPoinst[id] as ParsedDataOutput;
    const data = { points: [city], typeOfRequest: 'forecast', typeOfPoints:'userPoints', statusOfPoint: 'pending', dispatch }
    return (
        <div className="container-img rotate-container opacity-animation" key={id} onClick={() => {
            handlerAsyncThunk(data);
            navigate("/weather");
        }
        }>
            <div className="rotate-card">
                <div className="back-face-of-card container-glass b-rad-10 bg-gradient-main">
                    <div className="back-face-of-glass b-rad-10 "></div>
                    <div className="px-3 front-face-of-glass b-rad-10 d-flex justify-content-between align-items-center text-nowrap fw-normal">
                        <div className="w-50 d-flex flex-column text-start">
                            <p className="m-0 h4">{city as string}</p>
                            <p className="m-0 fs-6">{t("home.cards.temp")}</p>
                            <p className="m-0 fs-6">{t("home.cards.feelsLike")}</p>
                            <p className="m-0 fs-6 text-muted">{weather.description}</p>
                        </div>
                        <img src={getUrlImg(weather.icon)} alt="icon-weather" className="icon-weather" width='70px' height='70px' />
                        <div className="mt-1 ms-3 me-auto d-flex flex-column">
                            <p className="m-0 fs-6">{main.feels_like}<span className="deg">O</span></p>
                            <p className="m-0 fs-6">{main.temp}<span className="deg">O</span></p>
                        </div>
                    </div>
                </div>
                <div className="front-face-of-card b-rad-10">
                    <img id="moscow" src={img} alt={city as string} className="city-img b-rad-10" />
                </div>
            </div >
        </div >
    )
}

export default CardWeatherSmall;