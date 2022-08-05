import React from "react";
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import SearchField from "../components/HomePage/SearchField";
import SpinnerWeather from "../components/spinners/SpinnerWeather";
import { selectors_userPoints } from "../store/slices/dataSlice_userPoints";
import CardWeather_normal from "../components/cards/CardWeather_normal/CardWeather_normal";
import CardError from "../components/cards/CardError";
import { useEffect } from "react";
import handlerAsyncThunk from "../services/fetch/handlerAsynkThunk";
import handlerTimeouts from "../services/fetch/handlerTimeouts";
import { ThreeDots } from 'react-loader-spinner'

function WeatherPage({ t }) {
    const dispatch = useDispatch();
    const fulfilled_userPoints = useSelector(selectors_userPoints.selectEntities);
    const filtered_userPoints = Object.values(fulfilled_userPoints).reduce((acc, point) => {
        const { day } = point;
        acc[day] = acc[day] ? [...acc[day], point] : [point];
        return acc;
    }, {});

    const { loading_userPoints, errors_userPoints } = useSelector(store => store.data_userPoints)
    const errorOfPoint = errors_userPoints.length > 0 ? errors_userPoints[0] : null;
    const rejected_userPoint = errorOfPoint ? errorOfPoint.point : null;

    useEffect(() => {
        if (errorOfPoint) {
            const data = { points: [rejected_userPoint], typeOfRequest: 'weather', typeOfPoints: 'userPoints', statusOfPoint: 'rejected' }
            const clearCurrentTimeout = handlerTimeouts(9000, data, dispatch)
            return clearCurrentTimeout;
        }
    }, [errorOfPoint]);

    return (
        <>
            <SearchField />
            {loading_userPoints === 'pending' 
            && <div className="mt-5 d-flex justify-content-center">
                <ThreeDots
                height="80"
                width="80"
                color='lightblue'
                ariaLabel='three-dots-loading'
                wrapperStyle
                wrapperClass
            />
                </div>}
            {loading_userPoints === 'rejected' && <CardError errorOfPoint={errorOfPoint} />}
            {loading_userPoints === 'fulfilled' &&
                Object.entries(filtered_userPoints).map((point) => <CardWeather_normal point={point} key={point.day} />)
            }
        </>
    )
}

export default withTranslation()(WeatherPage)