import React from "react";
import { withTranslation } from "react-i18next";
import CardWeather_normal_mainField from "./CardWeather_normal_mainField";
import CardWeather_normal_additionalField from "./CardWeather_normal_additionalField";
import CardWeather_normal_additionalField_empty from "./CardWeather_normal_additionalField_empty";
function CardWeather_normal({ t, point }) {
    const [day, values] = point;
    const [value, ...rest] = values;
    return (
        <>
            <h3 className="ms-1 mt-3 color-additional opacity-animation">{day}</h3>
            <div className="my-1 weather-container container-glass b-rad-10 text-light bg-gradient-main opacity-animation">
                <div className="back-face-of-glass b-rad-10"></div>
                <div className="px-3 py-2 front-face-of-glass b-rad-10">
                    <CardWeather_normal_mainField value={value} />
                    {rest.length > 0
                        ? (
                            <div className="container-additional-data d-flex justify-content-between overflow-auto" style={{ "minWidth": "100px" }}>
                                {values.map((item) => <CardWeather_normal_additionalField item={item} key={item.id} />)}
                            </div>
                        )
                        : <CardWeather_normal_additionalField_empty />
                    }
                </div>
            </div>
        </>
    )
}

export default withTranslation()(CardWeather_normal)