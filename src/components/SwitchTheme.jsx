import React from "react";
import Form from 'react-bootstrap/Form';
import useTheme from "../hooks/useTheme";

function SwitchTheme() {
    const changeTheme = useTheme();
    return (
        <div className="mt-1 custom-checkbox align-self-center">
            <input type="checkbox" class="checkbox" id="id" onClick={changeTheme}/>
            <label for="id"></label>
        </div>
    )
}

export default SwitchTheme;