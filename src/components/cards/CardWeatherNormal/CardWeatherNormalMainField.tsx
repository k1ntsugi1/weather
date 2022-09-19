import React from "react";
import { useTranslation } from "react-i18next";
import getUrl_img from "../../../services/fetch/getUrlImg";
import { ParsedDataOutput } from '../../../interfaces/ResponseParsedData';

interface Props {
    value: ParsedDataOutput,
}

const CardWeatherNormalMainField: React.FC<Props> = ({ value }) => {
    const { t } = useTranslation();
    const { city, time, main, weather, wind, mmOfRainLast3H, mmOfSnowLast3H, percentOfClouds } = value;
    const description = weather.description.split('')
        .map((symbol, index) => index === 0 ? symbol.toUpperCase() : symbol)
        .join('');
    return (
        <div className="container-data mb-2 d-flex justify-content-start fw-normal">
            <img src={getUrl_img(weather.icon)} className="main-icon" alt="icon-weather" />
                <div className="me-3 main-item ">
                    <p className="m-0 h3 text-truncate" >{city}</p>
                    <p className="m-0 fs-6">{t("weatherPage.time")} {time}</p>
                    <p className="m-0 display-6 fw-bold">{main.temp}<span className="align-text-top" style={{ "fontSize": "20px" }}>O</span></p>
                </div>
                <div className="me-3 description-item">
                    <p className="m-0 h3">{t("weatherPage.description")}</p>
                    <p className="m-0 fs-6 text-nowrap">{description}</p>
                    <p className="m-0 fs-6 text-nowrap">{t("weatherPage.feelsLike")} {main.feels_like}<span className="align-text-top" style={{ "fontSize": "10px" }}>O</span></p>
                    <p className="my-0 fs-6">{t("weatherPage.cloudiness")} {percentOfClouds || '0'}%</p>

                </div>
                <div className="addtitional-item">
                    <p className="my-0 h3">{t("weatherPage.precipitation_last3H")}</p>
                    <p className="my-0 fs-6">{t("weatherPage.rain")} {mmOfRainLast3H || '0'} мм</p>
                    <p className="my-0 fs-6">{t("weatherPage.snow")} {mmOfSnowLast3H || '0'} мм</p>
                </div>

        </div>
    )
}

export default CardWeatherNormalMainField;