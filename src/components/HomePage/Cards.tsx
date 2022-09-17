import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useDefaultPoints } from "../contexts/useDefaultPoints";
import { selectorsDefaultPoints } from "../../store/slices/dataSliceDefaultPoints";
import handlerAsyncThunk from "../../services/fetch/handlerAsynkThunk";
import { useTranslation, withTranslation } from "react-i18next";
import SpinnerCard from "../spinners/SpinnerCard";

import CardWeather_small from "../cards/CardWeather_small/CardWeather_small";
import CardWeather_small_error from "../cards/CardWeather_small/CardWeather_small_error";

import handlerTimeouts from "../../services/fetch/handlerTimeouts";

import { RootState } from '../../store/index';

const Cards: React.FC = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch();


    const { defaultPoints } = useDefaultPoints();
    const { currentLang } = useSelector((store: RootState) => store.uiDataOfSearching);
    const { loadingDefaultPoints, errorsDefaultPoints } = useSelector((store: RootState) => store.dataDefaultPoints);

    const rejected_defaultPoints = errorsDefaultPoints.map(((error)=> error.point))
    const idsFulfilled_defaultPoinst = useSelector(selectorsDefaultPoints.selectIds);

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
            { loadingDefaultPoints.map((point) => {
                const [ status, cityName ] = point.split('_');
                const imgPath = paths.find((path) => path.includes(cityName));
                const img = images(imgPath);
                const errorOfPoint = errorsDefaultPoints.find((error) => error.point === cityName) ?? null;
                const id = idsFulfilled_defaultPoinst.find((id) => id.includes(cityName))
                return (
                    <>
                        { status === "pending" && <SpinnerCard style={ {"maxHeight": "100px", "padding": "0", "margin": "0"} } key={cityName}/> }
                        { status === "fulfilled" && <CardWeather_small img={img} id={id} key={cityName} /> }
                        { status === "rejected" && <CardWeather_small_error img={img} errorOfPoint={errorOfPoint} key={cityName} /> }
                    </>

                )
            })}
        </div >
    )
}

export default Cards;