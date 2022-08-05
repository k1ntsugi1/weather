import React from "react";
import { withTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { actions_modalHelper } from "../../store/slices/uiSlice_modalHelper";


function CardError({ t, errorOfPoint }) {
    const dispatch = useDispatch();

    return (
        <div className="mt-5 d-flex justify-content-center align-items-center" style={{ "cursor": "pointer" }} onClick={() => dispatch(actions_modalHelper.setActiveStatus())}>
            <div className="container-glass b-rad-10" style={ { "minHeight": "150px", "maxWidth": "300px" } } >
                <div className="back-face-of-glass b-rad-10"></div>
                <div className="p-2 front-face-of-glass b-rad-10 fw-normal text-center">

                    <div className=""  >
                        <span className="m-0 fs-4">{t("errorOfRequest.noData")}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="pb-1 bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </div>

                    <p className="m-0 fs-4">{t("errorOfRequest.point")} {errorOfPoint.point}</p>
                    <p className="m-0 fs-4 text-secondary">{t("errorOfRequest.code")} {errorOfPoint.code}</p>
                </div>
            </div>
        </div>

    )
}

export default withTranslation()(CardError);