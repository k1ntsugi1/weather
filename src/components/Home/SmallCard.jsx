import React from "react";
import { withTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import getUrl_img from "../../fetch/getUrl_img";
import { useDispatch, useSelector } from "react-redux";
import { selectorsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice";
import handlerAsyncThunk from "../../fetch/handlerAsynkThunk";

function SmallCard({ t, id, img, setPoint, ids}) {
    const allPoints = useSelector(selectorsDataResultOfSearching.selectEntities);
    const dispatch = useDispatch()
    const { city, weather, main } = allPoints[id];
    const navigate = useNavigate()
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
                    <img id="moscow" src={img} alt={city} className="city-img b-rad-10" />
                </div>
            </div >
        </div >
    )
}

export default withTranslation()(SmallCard)