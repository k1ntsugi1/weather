import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDefaultPoints } from "../../hooks/useDefaultPoints";
import { fetchDataOfWeather, selectorsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice";
import getUrl_img from "../../fetch/getUrl_img";
import handlerAsyncThunk from "../../fetch/handlerAsynkThunk";
import { useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";
import SpinnerMainWeather from "../spinners/SpinnerMainWeather";

function Cards({ t, setPoint }) {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const { defaultPoints } = useDefaultPoints();
    const currentLang = localStorage.getItem('current-lang');
    const allPoints = useSelector(selectorsDataResultOfSearching.selectEntities);
    const { loading } = useSelector(state => state.dataResultOfSearching);

    const ids = useSelector(selectorsDataResultOfSearching.selectIds);
    const idsDefaultPoints = ids.filter((id) => id.includes('defaultPoints'));
        console.log(idsDefaultPoints);
    const images = require.context('../../images/cities', true, /\.(jpg|png)$/i);
    const paths = images.keys();


    useEffect(() => {
        if (idsDefaultPoints.length === 0) handlerAsyncThunk(defaultPoints, 'weather', 'defaultPoints', ids, dispatch)
    }, [currentLang]);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('setTimer')
            handlerAsyncThunk(defaultPoints, 'weather', 'defaultPoints', ids, dispatch);
        }, 90000);

        const clear = (id) => () => {
            console.log('clear Timer')
            clearTimeout(id)
        };

        return clear(timeoutID);
    }, [idsDefaultPoints])

    return (
        <div className="container-cities">
            {loading === 'pending'
                ? <SpinnerMainWeather />
                : idsDefaultPoints.map((id) => {
                    const { city, weather, main } = allPoints[id];
                    const imgPath = paths.find((path) => path.includes(city))
                    return (
                        <div className="container-img rotate-container" key={id} onClick={() => {
                            handlerAsyncThunk([city], 'forecast', 'userPoints', ids, dispatch);
                            navigate("/weather");
                            setPoint(city);
                        }
                        }>
                            <div className="rotate-card">
                                <div className="back-face-of-card container-glass b-rad-10">
                                    <div className="back-face-of-glass b-rad-10"></div>
                                    <div className="px-3 front-face-of-glass b-rad-10 d-flex justify-content-between align-items-center text-nowrap">
                                        <div className="w-50 d-flex flex-column text-start">
                                            <p className="m-0 h4">{city}</p>
                                            <p className="m-0 fs-6">{t("home.cards.temp")}</p>
                                            <p className="m-0 fs-6">{t("home.cards.feelsLike")}</p>
                                            <p className="m-0 fs-6 fw-light text-muted">{weather.description}</p>
                                        </div>
                                        <img src={getUrl_img(weather.icon)} alt="icon-weather" className="icon-weather" width='70px' height='70px' />
                                        <div className="mt-1 ms-3 me-auto d-flex flex-column">
                                            <p className="m-0 fs-6">{main.feels_like}<span className="deg">O</span></p>
                                            <p className="m-0 fs-6">{main.temp}<span className="deg">O</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="front-face-of-card b-rad-10">
                                    <img id="moscow" src={images(imgPath)} alt={city} className="city-img b-rad-10" />
                                </div>
                            </div >
                        </div >
                    )
                })
            }
        </div >
    )
}

export default withTranslation()(Cards);