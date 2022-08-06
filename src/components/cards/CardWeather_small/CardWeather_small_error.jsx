import React from "react";
import { withTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { actions_modalHelper } from "../../../store/slices/uiSlice_modalHelper";
import CardError from "../CardError";

function CardWeather_small_error({ t, img, errorOfPoint }) {
    const dispatch = useDispatch()
    return (
        <div className="container-img rotate-container" onClick={() => dispatch(actions_modalHelper.setActiveStatus())}>
            <div className="rotate-card">
                <CardError errorOfPoint={errorOfPoint} currentPage='homePage'/>
                <div className="front-face-of-card b-rad-10">
                    <img id="moscow" src={img} alt='error' className="city-img b-rad-10" />
                </div>
            </div >
        </div >
    )
}

export default withTranslation()(CardWeather_small_error);