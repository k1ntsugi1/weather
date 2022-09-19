import React, { useEffect } from "react";

import { useDefaultPoints } from "../contexts/useDefaultPoints";
import { selectorsDefaultPoints } from "../../store/slices/dataSliceDefaultPoints";
import handlerAsyncThunk from "../../services/fetch/handlerAsynkThunk";
import SpinnerCard from "../spinners/SpinnerCard";

import CardWeatherSmall from "../cards/CardWeatherSmall/CardWeatherSmall";
import CardWeatherSmallError from "../cards/CardWeatherSmall/CardWeatherSmallError";

import handlerTimeouts from "../../services/fetch/handlerTimeouts";

import { useAppDispatch, useAppSelector } from "../../store/hooks"; 



const Cards: React.FC = () => {
    const dispatch = useAppDispatch();


    const defaultPoints = useDefaultPoints();
    const { currentLang } = useAppSelector(store => store.uiDataOfSearching);
    const { loadingDefaultPoints, errorsDefaultPoints } = useAppSelector(store => store.dataDefaultPoints);

    const rejectedDefaultPoints = errorsDefaultPoints.map(((error)=> error.point))
    const idsFulfilledDefaultPoints = useAppSelector(selectorsDefaultPoints.selectIds);

    const images = require.context('../../assets/images/cities', true, /\.(jpg|png)$/i);

    const paths = images.keys();

    const dataForDefaultPoints = { points: defaultPoints, typeOfRequest: 'weather', typeOfPoints:'defaultPoints', dispatch};
    const dataForUserPoints = {points: rejectedDefaultPoints, typeOfRequest: 'weather', typeOfPoints:'defaultPoints',  statusOfPoint: 'rejected', dispatch};

    useEffect(() => {
        handlerAsyncThunk({...dataForDefaultPoints, statusOfPoint: 'pending'})
    }, [currentLang]);

    useEffect(() => {
        if ( idsFulfilledDefaultPoints.length) {
            const clearCurrentTimeout = handlerTimeouts(900000, {...dataForDefaultPoints, statusOfPoint: 'fulfilled'})
            return clearCurrentTimeout;
        }
    }, [idsFulfilledDefaultPoints])

    useEffect(() => {
        if ( rejectedDefaultPoints.length > 0 ) {
            const clearCurrentTimeout = handlerTimeouts(9000, dataForUserPoints)
            return clearCurrentTimeout;
        }
    }, [rejectedDefaultPoints])

    return (
        <div className="container-cities">
            { loadingDefaultPoints.map((point) => {
                const [ status, cityName ] = point.split('_');
                const imgPath = paths.find((path) => path.includes(cityName));
                const img = images(imgPath) as string;
                const errorOfPoint = errorsDefaultPoints.find((error) => error.point === cityName) ?? null;
                const id = idsFulfilledDefaultPoints.find((id: string) => id.includes(cityName)) as string;
                return (
                    <>
                        { status === "pending" && <SpinnerCard style={ {"maxHeight": "100px", "padding": "0", "margin": "0"} } key={cityName}/> }
                        { status === "fulfilled" && <CardWeatherSmall img={img} id={id} key={cityName} /> }
                        { status === "rejected" && <CardWeatherSmallError img={img} errorOfPoint={errorOfPoint} key={cityName} /> }
                    </>

                )
            })}
        </div >
    )
}

export default Cards;