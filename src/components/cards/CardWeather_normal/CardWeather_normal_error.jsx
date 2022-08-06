
import React from "react";
import { withTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { actions_modalHelper } from "../../../store/slices/uiSlice_modalHelper";
import CardError from "../CardError";

function CardWeather_normal_error({ t, errorOfPoint }) {
    const dispatch = useDispatch();
    return (
        <div className="mt-5 d-flex justify-content-center align-items-center" style={{ "cursor": "pointer" }} onClick={() => dispatch(actions_modalHelper.setActiveStatus())}>
            <CardError errorOfPoint={errorOfPoint} currentPage='weatherPage' styles={{ "minHeight": "100px", "maxWidth": "200px" }}/>
        </div>

    )
}

export default withTranslation()(CardWeather_normal_error);