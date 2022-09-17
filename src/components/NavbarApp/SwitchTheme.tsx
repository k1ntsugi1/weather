import React, {useState, useEffect} from "react";
import { useTranslation, withTranslation } from "react-i18next";

const SwitchTheme: React.FC = () => {
    const { t } = useTranslation();
    const [theme, setTheme] = useState(
        localStorage.getItem('current-theme') ?? 'light'
    );

    const handlerTheme = () => theme === "light" ? setTheme('dark') : setTheme('light')

    useEffect(()=> {
        document.querySelector('html').setAttribute('data-theme', theme);
        localStorage.setItem('current-theme', theme);
    }, [theme])

    return (
        <div className="mx-2 d-flex">
            <span className="pe-2 navbar-text color-main-lighter">{t("home.navbar.theme")}</span>
            <div className="mt-1 custom-checkbox align-self-center">
                <input type="checkbox" className="checkbox" id="checkbox" onClick={() => handlerTheme()} />
                <label htmlFor="checkbox"></label>
            </div>
        </div>

    )
}

export default SwitchTheme;