import React from "react";
import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SearchField from "../components/HomePage/SearchField";
import SpinnerWeather from "../components/spinners/SpinnerWeather";
import { selectors_userPoints } from "../store/slices/dataSlice_userPoints";
import CardWeather_normal from "../components/cards/CardWeather_normal/CardWeather_normal";
import CardError from "../components/cards/CardError";
function WeatherPage({ t }) {
    const fulfilled_userPoints = useSelector(selectors_userPoints.selectEntities);
    const filtered_userPoints = Object.values(fulfilled_userPoints).reduce((acc, point) => {
        const { day } = point;
        acc[day] =  acc[day] ? [...acc[day], point] : [point];
        return acc;
    }, {});

    const { loading_userPoints, errors_userPoinst } = useSelector(store => store.data_userPoints)
    const [errorOfPoint] = errors_userPoinst;
    return (
        <>
            <SearchField/>
            {loading_userPoints === 'pending' && <SpinnerWeather styles={{ left: "50%", top: "50%", "animationDelay": "0s" }} size='medium' />}
            {loading_userPoints === 'rejected' && <CardError errorOfPoint={errorOfPoint}/>}
            {loading_userPoints === 'fulfilled' &&
                Object.entries(filtered_userPoints).map((point) => <CardWeather_normal point={point} key={point.day}/>)
            }
        </>
    )
}

export default withTranslation()(WeatherPage)