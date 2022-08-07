import React from "react";
import { withTranslation } from "react-i18next";

import { actions_modalHelper } from "../store/slices/uiSlice_modalHelper";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";

function ModalHelper({ t }) {
    const dispatch = useDispatch();
    const { isActive } = useSelector(store => store.ui_modalHelper);
    return (
        <Modal show={isActive}  onHide={() => dispatch(actions_modalHelper.setUnactiveStatus())} centered aria-labelledby="modal-helper">
            <Modal.Header  closeButton className="bg-main color-additional">
                <Modal.Title>{t("modalHelper.titleHeader")}</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-main color-additional rounded-bottom">
                <h5>{t("modalHelper.body.titleBody")}</h5>
                <ul>
                    <li>{t("modalHelper.body.checkNetwork")}</li>
                    <li>{t("modalHelper.body.checkNameOfPoint")}</li>
                </ul>
                <h6>{t("modalHelper.body.description")}</h6>
                <dl>
                    <dt>{t("modalHelper.body.401Code")}</dt>
                    <dd>{t("modalHelper.body.401Description")}</dd>
                    <dt>{t("modalHelper.body.404Code")}</dt>
                    <dd>{t("modalHelper.body.404Description")}</dd>
                    <dt>{t("modalHelper.body.429Code")}</dt>
                    <dd>{t("modalHelper.body.429Descroption")}</dd>
                    <dt>{t("modalHelper.body.500EtcCodes")}</dt>
                    <dd>{t("modalHelper.body.500EtcDescription")}</dd>
                </dl>
            </Modal.Body>
        </Modal>
    )
}

export default withTranslation()(ModalHelper)