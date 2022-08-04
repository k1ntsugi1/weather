import React from "react";
import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SearchField from "./Home/SearchField";
import getUrl_img from "../fetch/getUrl_img";
import SpinnerWeather from './spinners/SpinnerWeather'
import { selectors_userPoints } from "../slices/data_userPoints";

function WeatherPage({ t, setPoint }) {
    const fulfilled_userPoints = useSelector(selectors_userPoints.selectEntities);
    const filtered_userPoints = Object.values(fulfilled_userPoints).reduce((acc, point) => {
        const { day } = point;
        acc[day] =  acc[day] ? [...acc[day], point] : [point];
        return acc;
    }, {});

    const {loading_userPoints, errors_userPoinst} = useSelector(store => store.data_userPoints)
    return (
        <>
            <SearchField setPoint={setPoint}/>
            {loading_userPoints === 'pending' && <SpinnerWeather styles={{ left: "50%", top: "50%", "animationDelay": "0s" }} size='big' />}
            { errors_userPoinst.length !== 0 
            ? <div>Не найдено</div>
            : Object.entries(filtered_userPoints).map(([day, values]) => {
                    const { id, city, time, main, weather, wind, mmOfRaingLast3H, mmOfShowLast3H, percentOfClouds } = values[0];
                    const description = weather.description.split('')
                        .map((symbol, index) => index === 0 ? symbol.toUpperCase() : symbol)
                        .join('');
                    return (
                        <>
                            <h1 className="mb-2">{day}</h1>
                            <div className="weather-container container-glass b-rad-10 text-light" key={id}>
                                <div className="back-face-of-glass b-rad-10"></div>
                                <div className="px-3 py-2 front-face-of-glass b-rad-10 ">
                                    <div className="container-data mb-2 d-flex justify-content-start gap-1">
                                        <img src={getUrl_img(weather.icon)} alt="icon-weather" width="120px" height="120px" />
                                        <div className="me-3 main-item">
                                            <p className="m-0 h3 text-nowrap">{city}</p>
                                            <p className="m-0 fs-6 fw-normal">Время: {time}</p>
                                            <p className="m-0 display-6 fw-bold">{main.temp}<span className="align-text-top" style={{ "fontSize": "20px" }}>O</span></p>
                                        </div>
                                        <div className="me-3 description-item">
                                            <p className="m-0 h3">Описание:</p>
                                            <p className="m-0 fs-6 fw-normal text-nowrap">{description}</p>
                                            <p className="m-0 fs-6 fw-normal text-nowrap">Ощущается как {main.feels_like}<span className="align-text-top" style={{ "fontSize": "10px" }}>O</span></p>
                                            <p className="my-0 fs-6 fw-normal">Облачность: {percentOfClouds || '0'}%</p>

                                        </div>
                                        <div className="addtitional-item">
                                            <p className="my-0 h3">Осадки за три часа:</p>
                                            <p className="my-0 fs-6 fw-normal">дождь: {mmOfRaingLast3H || '0'} мм</p>
                                            <p className="my-0 fs-6 fw-normal">снег: {mmOfShowLast3H || '0'} мм</p>
                                        </div>

                                    </div>

                                    {values.length > 1
                                        ? (
                                            <div className="container-additional-data d-flex justify-content-between overflow-auto" style={{ "minWidth": "100px" }}>
                                                {values.map((item, index) => {
                                                    if (index === 0) return null;
                                                    const { id, time, main, weather } = item;
                                                    return (
                                                        <div className="additional-data-item text-center" key={id}>
                                                            <p className="m-0 fs-4 fw-normal">{time}</p>
                                                            <p className="m-0 fs-4 fw-bold">{main.temp}<span className="align-text-top" style={{ "fontSize": "10px" }}>O</span></p>
                                                            <img src={getUrl_img(weather.icon)} alt="icon-weather" width="50px" height="50px" />
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                        : (
                                            <div className="container-additional-data text-center">
                                                <p className="mt-4 display-6">Дополнительных данных о погоде нет</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

export default withTranslation()(WeatherPage)