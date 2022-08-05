import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDefaultPoints } from "../contexts/useDefaultPoints";
import { selectors_defaultPoints } from "../../store/slices/dataSlice_defaultPoints";
import handlerAsyncThunk from "../../services/fetch/handlerAsynkThunk";
import { withTranslation } from "react-i18next";
import SpinnerCard from "../spinners/SpinnerCard";

import CardWeather_small from "../cards/CardWeather_small/CardWeather_small";
import CardWeather_small_error from "../cards/CardWeather_small/CardWeather_small_error";

import handlerTimeouts from "../../services/fetch/handlerTimeouts";

function Cards({ t }) {
    const dispatch = useDispatch();


    const { defaultPoints } = useDefaultPoints();
    const { currentLang } = useSelector(store => store.ui_dataOfSearching);
    const { loading_defaultPoints, errors_defaultPoints } = useSelector(state => state.data_defaultPoints);

    const rejected_defaultPoints = errors_defaultPoints.map(((error)=> error.point))
    const idsFulfilled_defaultPoinst = useSelector(selectors_defaultPoints.selectIds);

    const images = require.context('../../assets/images/cities', true, /\.(jpg|png)$/i);

    const paths = images.keys();


    useEffect(() => {
        const data = { points: defaultPoints, typeOfRequest: 'weather', typeOfPoints:'defaultPoints', statusOfPoint: 'pending' };
        handlerAsyncThunk(data, dispatch)
    }, [currentLang]);

    useEffect(() => {
        if ( idsFulfilled_defaultPoinst.length > 0 ) {
            const data = { points: defaultPoints, typeOfRequest: 'weather', typeOfPoints:'defaultPoints',  statusOfPoint: 'fulfilled'}
            const clearCurrentTimeout = handlerTimeouts(900000, data, dispatch)
            return clearCurrentTimeout;
        }
    }, [idsFulfilled_defaultPoinst])

    useEffect(() => {
        if ( rejected_defaultPoints.length > 0 ) {
            const data = {points: rejected_defaultPoints, typeOfRequest: 'weather', typeOfPoints:'defaultPoints',  statusOfPoint: 'rejected'}
            const clearCurrentTimeout = handlerTimeouts(9000, data, dispatch)
            return clearCurrentTimeout;
        }
    }, [rejected_defaultPoints])

    return (
        <div className="container-cities">
            { loading_defaultPoints.map((point) => {
                const [ status, cityName ] = point.split('_');
                const imgPath = paths.find((path) => path.includes(cityName));
                const img = images(imgPath);
                const errorOfPoint = errors_defaultPoints.find((error) => error.point === cityName) ?? null;
                const id = idsFulfilled_defaultPoinst.find((id) => id.includes(cityName))
                return (
                    <>
                        { status === "pending" && <SpinnerCard style={ {"maxHeight": "100px", "padding": "0", "margin": "0"} } key={cityName}/> }
                        { status === "fulfilled" && <CardWeather_small img={img} id={id} key={cityName} /> }
                        { status === "rejected" && <CardWeather_small_error img={img} errorOfPoint={errorOfPoint} key={cityName}/> }
                    </>

                )
            })}
        </div >
    )
}

export default withTranslation()(Cards);