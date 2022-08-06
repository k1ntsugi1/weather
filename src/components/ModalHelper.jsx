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
                <Modal.Title>Ошибки</Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-main color-additional rounded-bottom">
                <h4>Общие рекомендации исправления:</h4>
                <ul>
                    <li>Проверьте интернет соединение</li>
                    <li>Проверьте корректность название точки поиска</li>
                </ul>
                <h5>Описание ошибок:</h5>
                <dl>
                    <dt>401 - изменена форма подписки на OpenWeather API</dt>
                    <dd>Исправление доступно только разработчику</dd>
                    <dt>404 - не верно указано название точки поиска</dt>
                    <dd>Для исправления посмотрите общие рекомендации</dd>
                    <dt>429 - произведено более 60 запросов за прошедшую минуту или более 1000 за сутки</dt>
                    <dd>Произведите запрос позже</dd>
                    <dt>500, 502, 503, 504 - ошибка со стороны API</dt>
                    <dd>Мы здесь бессильны :(</dd>
                </dl>
            </Modal.Body>
        </Modal>
    )
}

export default withTranslation()(ModalHelper)