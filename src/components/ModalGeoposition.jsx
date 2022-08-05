import React from "react";
import { withTranslation } from "react-i18next";
import handlerAsyncThunk from "../services/fetch/handlerAsynkThunk";
import { actions_modalGeoposition } from "../store/slices/uiSlice_modalGeoposition";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Button } from "react-bootstrap";

function ModalGeoposition({ t }) {
    const dispatch = useDispatch();
    const { isActive, presumedPoint } = useSelector(store => store.ui_modalGeoposition);
    return (
        <Modal show={isActive} onHide={() => dispatch(actions_modalGeoposition.setUnactiveStatus())} centered aria-labelledby="modal-geoposition">
            <Modal.Body closeButton>
                <Modal.Title>Ваша позиция: { presumedPoint }</Modal.Title>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {
                    const data = { points: [presumedPoint], typeOfRequest: 'weather', typeOfPoints:'userPoints', statusOfPoint: 'pending' };
                    handlerAsyncThunk(data, dispatch);
                    dispatch(actions_modalGeoposition.setUnactiveStatus())
                }}>да</Button>
                <Button onClick={() => dispatch(actions_modalGeoposition.setUnactiveStatus())}>нет</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default withTranslation()(ModalGeoposition)