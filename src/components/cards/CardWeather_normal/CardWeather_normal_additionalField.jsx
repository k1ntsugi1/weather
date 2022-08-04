import React from "react";
import { withTranslation } from "react-i18next";
import getUrl_img from "../../../services/fetch/getUrl_img";

function CardWeather_normal_additionalField({t, item}) {
    const { id, time, main, weather } = item;
    return (
        <div className="additional-data-item text-center" key={id}>
            <p className="m-0 fs-4 fw-normal">{time}</p>
            <p className="m-0 fs-4 fw-bold">{main.temp}<span className="align-text-top" style={{ "fontSize": "10px" }}>O</span></p>
            <img src={getUrl_img(weather.icon)} alt="icon-weather" width="50px" height="50px" />
        </div>
    )
}

export default withTranslation()(CardWeather_normal_additionalField)