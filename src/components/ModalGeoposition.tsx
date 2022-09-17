import React from "react";
import { useTranslation, withTranslation } from "react-i18next";
import handlerAsyncThunk from "../services/fetch/handlerAsynkThunk";
import { actionsModalGeoposition } from "../store/slices/uiSliceModalGeoposition";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";
import { RootState } from '../store/index';

const ModalGeoposition: React.FC = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isActive, presumedPoint } = useSelector((store: RootState) => store.uiModalGeoposition);
    return (
        <div>
            <Popup 
                contentStyle={{ "position": "absolute", "top": "5%", "left": "5%" }} 
                overlayStyle={{"background": "rgb(0 0 0 / 40%)"}} open={isActive} 
                closeOnDocumentClick 
                onClose={() => dispatch(actionsModalGeoposition.setUnactiveStatus())}
            >
                <div className="p-3 border color-additional bg-main rounded" style={{ "display": "inline-block" }}>
                    <p className="mx-1 my-0">{t("modalGeoposition.positiion")} {presumedPoint}?</p>
                    <Button variant="" 
                            className=" mb-1 p-1 border-0"
                            onClick={() => dispatch(actionsModalGeoposition.setUnactiveStatus())}
                    >
                        <span className="text-decoration-underline">{t("modalGeoposition.incorrectly")}</span>
                    </Button>
                    <Button variant=""
                            className="mb-1 me-1 p-1 border-0 "
                            onClick={() => {
                                const data = { points: [presumedPoint], typeOfRequest: 'forecast', typeOfPoints: 'userPoints', statusOfPoint: 'pending' };
                                handlerAsyncThunk(data, dispatch);
                                navigate('/weather');
                                dispatch(actionsModalGeoposition.setUnactiveStatus())
                            }}
                    >
                        <span className="text-decoration-underline">{t("modalGeoposition.correctly")}</span>
                    </Button>
                </div>
            </Popup>
        </div>
    )
}

export default ModalGeoposition;