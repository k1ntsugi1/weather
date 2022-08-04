import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDefaultPoints } from "../../hooks/useDefaultPoints";
import { selectors_defaultPoints } from "../../slices/data_defaultPoints";
import handlerAsyncThunk from "../../fetch/handlerAsynkThunk";
import { withTranslation } from "react-i18next";
import SpinnerMainWeather from "../spinners/SpinnerMainWeather";

import SmallCard from "./SmallCard";
import ErrorSmallCard from "./ErrorSmallCard";

function Cards({ t, setPoint }) {
    const dispatch = useDispatch();


    const { defaultPoints } = useDefaultPoints();
    const currentLang = localStorage.getItem('current-lang');
    const { loading_defaultPoints, errors_defaultPoints } = useSelector(state => state.data_defaultPoints);

    const idsFulfilled_defaultPoinst = useSelector(selectors_defaultPoints.selectIds);

    const images = require.context('../../images/cities', true, /\.(jpg|png)$/i);
    const paths = images.keys();


    useEffect(() => {
        console.log('firstload')
        handlerAsyncThunk(defaultPoints, 'weather', 'defaultPoints', dispatch)
    }, [currentLang]);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('setTimer')
            handlerAsyncThunk(defaultPoints, 'weather', 'defaultPoints', dispatch);
        }, 900000);

        const clear = (id) => () => {
            console.log('clear Timer')
            clearTimeout(id)
        };
        return clear(timeoutID);
    }, [idsFulfilled_defaultPoinst])

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
                        { status === "pending" && <SpinnerMainWeather style={ {"maxHeight": "100px", "padding": "0", "margin": "0"} } key={cityName}/> }
                        { status === "fulfilled" && <SmallCard img={img} id={id} setPoint={setPoint} key={cityName} /> }
                        { status === "rejected" && <ErrorSmallCard img={img} error={errorOfPoint} key={cityName}/> }
                    </>

                )
            })}
        </div >
    )
}

export default withTranslation()(Cards);