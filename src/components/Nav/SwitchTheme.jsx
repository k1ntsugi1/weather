import React from "react";
import Form from 'react-bootstrap/Form';
import useTheme from "../../hooks/useTheme";

function SwitchTheme() {
    const changeTheme = useTheme();
    return (
        <div className="mx-2 d-flex">
            <span className="pe-2 navbar-text">Тема:</span>
            <div className="mt-1 custom-checkbox align-self-center">
                <input type="checkbox" className="checkbox" id="checkbox" onClick={changeTheme} />
                <label htmlFor="checkbox"></label>
            </div>
        </div>

    )
}

export default SwitchTheme;