import React from "react";
import { withTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { actionsUiModalHelper } from "../../slices/uiOfModalHelperSlice";

function ErrorSmallCard({t, img, error}) {
    const dispatch = useDispatch()
    return (
        <div className="container-img rotate-container" onClick={() => dispatch(actionsUiModalHelper.setActiveStatus())}>
            <div className="rotate-card">
                <div className="back-face-of-card container-glass b-rad-10">
                    <div className="back-face-of-glass b-rad-10"></div>
                    <div className="px-3 front-face-of-glass b-rad-10 d-flex justify-content-center align-items-center text-nowrap">
                        <p className="m-0 fs-6">{error.error.message}</p>
                    </div>
                </div>
                <div className="front-face-of-card b-rad-10">
                    <img id="moscow" src={img} alt='error' className="city-img b-rad-10" />
                </div>
            </div >
        </div >
    )
}

export default withTranslation()(ErrorSmallCard);