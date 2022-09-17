import React from "react";
import { withTranslation } from "react-i18next";
import handlerAsyncThunk from "../services/fetch/handlerAsynkThunk";
import { actions_modalGeoposition } from "../store/slices/uiSliceModalGeoposition";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";

function ModalGeoposition({ t }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isActive, presumedPoint } = useSelector(store => store.ui_modalGeoposition);
    return (
        <div>
            <Popup 
                contentStyle={{ "position": "absolute", "top": "5%", "left": "5%" }} 
                overlayStyle={{"background": "rgb(0 0 0 / 40%)"}} open={isActive} 
                closeOnDocumentClick 
                onClose={() => dispatch(actions_modalGeoposition.setUnactiveStatus())}
            >
                <div className="p-3 border color-additional bg-main rounded" style={{ "display": "inline-block" }}>
                    <p className="mx-1 my-0">{t("modalGeoposition.positiion")} {presumedPoint}?</p>
                    <Button variant="" 
                            className=" mb-1 p-1 border-0"
                            onClick={() => dispatch(actions_modalGeoposition.setUnactiveStatus())}
                    >
                        <span className="text-decoration-underline">{t("modalGeoposition.incorrectly")}</span>
                    </Button>
                    <Button variant=""
                            className="mb-1 me-1 p-1 border-0 "
                            onClick={() => {
                                const data = { points: [presumedPoint], typeOfRequest: 'forecast', typeOfPoints: 'userPoints', statusOfPoint: 'pending' };
                                handlerAsyncThunk(data, dispatch);
                                navigate('/weather');
                                dispatch(actions_modalGeoposition.setUnactiveStatus())
                            }}
                    >
                        <span className="text-decoration-underline">{t("modalGeoposition.correctly")}</span>
                    </Button>
                </div>
            </Popup>
        </div>
    )
}

export default withTranslation()(ModalGeoposition)