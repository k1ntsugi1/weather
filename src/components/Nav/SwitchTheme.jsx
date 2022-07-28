import React from "react";
import Form from 'react-bootstrap/Form';
import { withTranslation } from "react-i18next";
import useTheme from "../../hooks/useTheme";

function SwitchTheme({t}) {
    const changeTheme = useTheme();
    return (
        <div className="mx-2 d-flex">
            <span className="pe-2 navbar-text">{t("home.navbar.theme")}</span>
            <div className="mt-1 custom-checkbox align-self-center">
                <input type="checkbox" className="checkbox" id="checkbox" onClick={changeTheme} />
                <label htmlFor="checkbox"></label>
            </div>
        </div>

    )
}

export default withTranslation()(SwitchTheme);