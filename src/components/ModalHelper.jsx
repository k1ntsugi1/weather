import React from "react";
import { withTranslation } from "react-i18next";

import { actionsUiModalHelper } from "../slices/uiOfModalHelperSlice";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

function ModalHelper({ t }) {
    const dispatch = useDispatch();
    const { isActive } = useSelector(store => store.uiOfModalHelper);
    console.log(isActive, 'isActive')
    return (
        <Modal show={isActive} onHide={() => dispatch(actionsUiModalHelper.setUnactiveStatus())} centered aria-labelledby="modal-helper">
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body</Modal.Body>
        </Modal>
    )
}

export default withTranslation()(ModalHelper)