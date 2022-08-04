import React from "react";
import { withTranslation } from "react-i18next";

function CardWeather_normal_additionalField_empty({ t }) {
    return (
        <div className="container-additional-data text-center">
            <p className="mt-4 display-6">Дополнительных данных о погоде нет</p>
        </div>
    )
}

export default withTranslation()(CardWeather_normal_additionalField_empty);