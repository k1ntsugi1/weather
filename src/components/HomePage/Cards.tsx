import React, { useEffect } from "react";

import { useDefaultPoints } from "../contexts/useDefaultPoints";
import { selectorsDefaultPoints } from "../../store/slices/dataSliceDefaultPoints";
import handlerAsyncThunk from "../../services/fetch/handlerAsynkThunk";
import SpinnerCard from "../spinners/SpinnerCard";

import CardWeatherSmall from "../cards/CardWeatherSmall/CardWeatherSmall";
import CardWeatherSmallError from "../cards/CardWeatherSmall/CardWeatherSmallError";

import handlerTimeouts from "../../services/fetch/handlerTimeouts";

import { useAppDispatch, useAppSelector } from "../../store/hooks"; 
import { AppDispatch } from "../../store";

// type Callback = (
//     points: string[],
//     typeOfRequest: string,
//     typeOfPoints: string,
//     statusOfPoint: string,
//     dispatch: AppDispatch) => void | number;

const Cards: React.FC = () => {
    const dispatch = useAppDispatch();


    const defaultPoints = useDefaultPoints();
    const { currentLang } = useAppSelector(store => store.uiDataOfSearching);
    const { loadingDefaultPoints, errorsDefaultPoints } = useAppSelector(store => store.dataDefaultPoints);

    const rejectedDefaultPoints = errorsDefaultPoints.map(((error)=> error.point))
    const idsFulfilledDefaultPoints = useAppSelector(selectorsDefaultPoints.selectIds);

    const images = require.context('../../assets/images/cities', true, /\.(jpg|png)$/i);

    const paths = images.keys();

    // const handlerPointsWithKnownData = (typeOfRequest: string, typeOfPoints: string, dispatch: AppDispatch) => {
    //     return (callback: Callback, points: string[], statusOfPoint: string): void | number => { 
    //         return callback(points, typeOfRequest, typeOfPoints, statusOfPoint, dispatch)
    //     };
    // };

    // const bindedHandlerDefaultPoints = handlerPointsWithKnownData('weather', 'defaultPoints', dispatch)
    const dataForDefaultPoints = { points: defaultPoints, typeOfRequest: 'weather', typeOfPoints:'defaultPoints'};
    const dataForUserPoints = {points: rejectedDefaultPoints, typeOfRequest: 'weather', typeOfPoints:'defaultPoints',  statusOfPoint: 'rejected'};

    useEffect(() => {
        //const data = { points: defaultPoints, typeOfRequest: 'weather', typeOfPoints:'defaultPoints', statusOfPoint: 'pending' };
        handlerAsyncThunk({...dataForDefaultPoints, statusOfPoint: 'pending'}, dispatch)
    }, [currentLang]);

    useEffect(() => {
        if ( idsFulfilledDefaultPoints.length > 0 ) {
            //const data = { points: defaultPoints, typeOfRequest: 'weather', typeOfPoints:'defaultPoints',  statusOfPoint: 'fulfilled'}
            const clearCurrentTimeout = handlerTimeouts(900000, {...dataForDefaultPoints, statusOfPoint: 'fulfilled'}, dispatch)
            return clearCurrentTimeout;
        }
    }, [idsFulfilledDefaultPoints])

    useEffect(() => {
        if ( rejectedDefaultPoints.length > 0 ) {
            //const data = {points: rejectedDefaultPoints, typeOfRequest: 'weather', typeOfPoints:'defaultPoints',  statusOfPoint: 'rejected'}
            const clearCurrentTimeout = handlerTimeouts(9000, dataForUserPoints, dispatch)
            return clearCurrentTimeout;
        }
    }, [rejectedDefaultPoints])

    return (
        <div className="container-cities">
            { loadingDefaultPoints.map((point) => {
                const [ status, cityName ] = point.split('_');
                const imgPath = paths.find((path) => path.includes(cityName));
                const img = images(imgPath);
                const errorOfPoint = errorsDefaultPoints.find((error) => error.point === cityName) ?? null;
                const id = idsFulfilledDefaultPoints.find((id) => String(id).includes(cityName))
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