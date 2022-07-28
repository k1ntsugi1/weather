import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { useDefaultPoints } from "../../hooks/useDefaultPoints";
import { fetchDataOfWeather, selectorsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice";
import getUrl_img from "../../fetch/getUrl_img";
import handlerAsyncThunk from "../../fetch/handlerAsynkThunk";
import { useNavigate } from "react-router-dom";
import { withTranslation } from "react-i18next";

function Cards({t}) {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const { defaultPoints, defaultType } = useDefaultPoints();
    const currentType  =  useSelector(state => state.dataOfSearching.currentType) ?? defaultType;

    const ids = useSelector(selectorsDataResultOfSearching.selectIds);
    const idsDefaultType = ids.filter((id) => id.includes(`${defaultType}`));
    const idsDefaultPoints = idsDefaultType.filter((id) => defaultPoints.find((point) => id.includes(point)));

    const allPoints = useSelector(selectorsDataResultOfSearching.selectEntities);

    const images = require.context('../../images/cities', true, /\.(jpg|png)$/i);
    const paths = images.keys();
    useEffect(() => {
        if(idsDefaultPoints.length === 0) defaultPoints.forEach((point) => dispatch(fetchDataOfWeather({ currentPoint: point, currentType: defaultType })))
    }, [defaultPoints])
    return (
        <div className="container-cities">
            {idsDefaultPoints.map((id) => {
                const { city, weather, main } = allPoints[id];
                const imgPath = paths.find((path) => path.includes(city))
                return (
                    <div className="container-img rotate-container" key={id} onClick={() => {
                        handlerAsyncThunk(defaultPoints, city, city, currentType, ids, dispatch);
                        navigate("/weather");
                        } 
                    }>
                        <div className="rotate-card">
                            <div className="back-face-of-card container-glass b-rad-10">
                                <div className="back-face-of-glass b-rad-10"></div>
                                <div className="px-3 front-face-of-glass b-rad-10 d-flex justify-content-between">
                                <div className="w-50 d-flex flex-column text-start">
                                        <p className="m-0 h4">{city}</p>
                                        <p className="m-0 fs-6">{t("home.cards.temp")}</p>
                                        <p className="m-0 fs-6">{t("home.cards.feelsLike")}</p>
                                        <p className="m-0 fs-6 fw-light text-muted">{weather.description}</p>
                                    </div>
                                    <img src={getUrl_img(weather.icon)} alt="icon-weather" className="icon-weather" width='70px' height='70px'/>
                                    <div className="mt-1 ms-3 me-auto d-flex flex-column">
                                        <p className="m-0 fs-6">{main.feels_like}<span className="deg">O</span></p>
                                        <p className="m-0 fs-6">{main.temp}<span className="deg">O</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="front-face-of-card b-rad-10">
                                <img id="moscow" src={images(imgPath)} alt="ImgMoscow" className="city-img b-rad-10" />
                            </div>
                        </div >
                    </div >
                )
            })}
        </div >
    )
}

export default withTranslation()(Cards);