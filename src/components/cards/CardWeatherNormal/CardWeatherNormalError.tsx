
import React from "react";
import { withTranslation } from "react-i18next";
import { useAppDispatch } from "../../../store/hooks";
import { actionsModalHelper } from "../../../store/slices/uiSliceModalHelper";
import CardError from "../CardError";

interface Props {
    errorOfPoint: {
        code: string,
        point: string,
    }
}

const  CardWeatherNormalError: React.FC<Props> = ({ errorOfPoint }) => {
    const dispatch = useAppDispatch();
    return (
        <div className="mt-5 d-flex justify-content-center align-items-center" style={{ "cursor": "pointer" }} onClick={() => dispatch(actionsModalHelper.setActiveStatus())}>
            <CardError errorOfPoint={errorOfPoint} currentPage='weatherPage' styles={{ "minHeight": "100px", "maxWidth": "250px" }}/>
        </div>

    )
}

export default CardWeatherNormalError;