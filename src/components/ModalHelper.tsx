import React from "react";
import { useTranslation } from "react-i18next";

import { actionsModalHelper } from "../store/slices/uiSliceModalHelper";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { Modal } from "react-bootstrap";


const ModalHelper: React.FC = () => {
    const { t } = useTranslation()
    const dispatch = useAppDispatch();
    const { isActive } = useAppSelector(store => store.uiModalHelper);
    return (
        <Modal show={isActive}  onHide={() => dispatch(actionsModalHelper.setUnactiveStatus())} centered aria-labelledby="modal-helper">
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

export default ModalHelper;