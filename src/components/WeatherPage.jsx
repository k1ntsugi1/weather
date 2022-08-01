import React from "react";
import { withTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import SpinnerMainWeather from './spinners/SpinnerMainWeather';
import SearchField from "./Home/SearchField";
import { selectorsDataResultOfSearching } from "../slices/dataResultOfSearchingSlice";
import getUrl_img from "../fetch/getUrl_img";

function WeatherPage({ t }) {
    const allPoints = useSelector(selectorsDataResultOfSearching.selectEntities);
    const activePoints = Object.values(allPoints).filter(({ id }) => id.includes('active'));
    const activeDays = activePoints.reduce((acc, point) => {
        const { day } = point;
        if (acc[day]) acc[day].push(point)
        if (!acc[day]) acc[day] = [point]
        return acc;
    }, {});
    
    const arrayOfDays = Object.entries(activeDays);
    console.log(arrayOfDays)
    const { loading } = useSelector(state => state.dataResultOfSearching);

    return (
        <>
            <SearchField />
            {loading === 'pending' && <SpinnerMainWeather style={{ "maxHeight": "200px" }} />}
            {loading === 'fulfilled' &&
                arrayOfDays.map(([day, values]) => {
                    const { id, city, time, main, weather, wind, mmOfRaingLast3H, mmOfShowLast3H, percentOfClouds } = values[0];
                    return (
                        <>
                            <h1 className="mb-2">{day}</h1>
                            <div className="weather-container container-glass b-rad-10 text-light"  key={id}>
                                <div className="back-face-of-glass b-rad-10"></div>
                                <div className="px-3 py-2 front-face-of-glass b-rad-10 ">
                                    <div className="container-data mb-2 d-flex justify-content-between">
                                        <div className=" d-flex gap-3">
                                            <div className="mt-2">
                                                <p className="m-0 h3">{city}</p>
                                                <p className="m-0 fs-6 fw-normal">{time}</p>
                                            </div>
                                            <p className="m-0 display-5 fw-bold">{main.temp}<span className="align-text-top" style={{ "fontSize": "20px" }}>O</span></p>
                                        </div>
                                        <div className="icon-container d-flex">
                                            <img src={getUrl_img(weather.icon)} alt="icon-weather" width="75px" height="75px" />
                                            <div className="d-flex flex-column">
                                                <p className="m-0 fs-4 fw-bold">{weather.description}</p>
                                                <p className="m-0 fs-6 fw-normal">Ощущается как {main.feels_like}<span className="align-text-top" style={{ "fontSize": "10px" }}>O</span></p>
                                            </div>
                                        </div>
                                        <div className="mt-1 d-flex flex-column">
                                            <p className="my-0 fs-6 fw-normal">мм Дождя - {mmOfRaingLast3H || 'none'}</p>
                                            <p className="my-0 fs-6 fw-normal">мм Снега - {mmOfShowLast3H || 'none'}</p>
                                            <p className="my-0 fs-6 fw-normal">Процент Облаков - {percentOfClouds || 'none'}</p>
                                        </div>
                                    </div>
                                    <div className="container-additional-data d-flex justify-content-between overflow-auto">
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