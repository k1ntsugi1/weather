import React from "react";
import { withTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import getUrl_img from "../../../services/fetch/getUrl_img";
import { useDispatch, useSelector } from "react-redux";
import handlerAsyncThunk from "../../../services/fetch/handlerAsynkThunk";
import { selectors_defaultPoints } from "../../../store/slices/dataSlice_defaultPoints";

function CardWeather_small({ t, id, img}) {
    const fulfilled_defaultPoinst = useSelector(selectors_defaultPoints.selectEntities);
    const dispatch = useDispatch()
    const { city, weather, main } = fulfilled_defaultPoinst[id];
    const navigate = useNavigate()
    const data = { points: [city], typeOfRequest: 'forecast', typeOfPoints:'userPoints', statusOfPoint: 'pending' }
    return (
        <div className="container-img rotate-container" key={id} onClick={() => {
            handlerAsyncThunk(data, dispatch);
            navigate("/weather");
        }
        }>
            <div className="rotate-card">
                <div className="back-face-of-card container-glass b-rad-10 bg-gradient-main">
                    <div className="back-face-of-glass b-rad-10 "></div>
                    <div className="px-3 front-face-of-glass b-rad-10 d-flex justify-content-between align-items-center text-nowrap fw-normal">
                        <div className="w-50 d-flex flex-column text-start">
                            <p className="m-0 h4">{city}</p>
                            <p className="m-0 fs-6">{t("home.cards.temp")}</p>
                            <p className="m-0 fs-6">{t("home.cards.feelsLike")}</p>
                            <p className="m-0 fs-6 text-muted">{weather.description}</p>
                        </div>
                        <img src={getUrl_img(weather.icon)} alt="icon-weather" className="icon-weather" width='70px' height='70px' />
                        <div className="mt-1 ms-3 me-auto d-flex flex-column">
                            <p className="m-0 fs-6">{main.feels_like}<span className="deg">O</span></p>
                            <p className="m-0 fs-6">{main.temp}<span className="deg">O</span></p>
                        </div>
                    </div>
                </div>
                <div className="front-face-of-card b-rad-10">
                    <img id="moscow" src={img} alt={city} className="city-img b-rad-10" />
                </div>
            </div >
        </div >
    )
}

export default withTranslation()(CardWeather_small)