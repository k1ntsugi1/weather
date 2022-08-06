import React from "react";
import { withTranslation } from "react-i18next";
import getUrl_img from "../../../services/fetch/getUrl_img";

function CardWeather_noraml_mainField({ t, value }) {
    const { city, time, day, main, weather, wind, mmOfRaingLast3H, mmOfShowLast3H, percentOfClouds } = value;
    const description = weather.description.split('')
        .map((symbol, index) => index === 0 ? symbol.toUpperCase() : symbol)
        .join('');
    return (
        <div className="container-data mb-2 d-flex justify-content-start gap-1 fw-normal">
            <img src={getUrl_img(weather.icon)} alt="icon-weather" width="120px" height="120px" />
            <div className="d-flex flex-row justify-content-between flex-wrap flex-grow-1">
                <div className="me-3 main-item ">
                    <p className="m-0 h3 text-nowrap">{city}</p>
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
                    <p className="my-0 fs-6">{t("weatherPage.rain")} {mmOfRaingLast3H || '0'} мм</p>
                    <p className="my-0 fs-6">{t("weatherPage.snow")} {mmOfShowLast3H || '0'} мм</p>
                </div>
                <h3 className="text-decoration-underline color-additional">{day}</h3>
            </div>

        </div>
    )
}

export default withTranslation()(CardWeather_noraml_mainField)