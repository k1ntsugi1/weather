import React from "react";
import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SpinnerMainWeather from './spinners/SpinnerMainWeather';

function WeatherPage({t}) {
    const {currentPoint, currentType} = useSelector(state => state.dataOfSearching.currentType)
    return (
        <div className="container"><SpinnerMainWeather /></div>
    )
}

export default withTranslation()(WeatherPage)