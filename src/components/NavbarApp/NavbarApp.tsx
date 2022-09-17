import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import SwitchTheme from "./SwitchTheme";
import { Link } from "react-router-dom";
import Brand from "../HomePage/Brand";
import { useTranslation, withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { actionsDefaultPoints } from "../../store/slices/dataSliceDefaultPoints";
import { actionsUserPoints } from "../../store/slices/dataSliceUserPoints";
import { actionsModalHelper } from "../../store/slices/uiSliceModalHelper";
import { actionsDataOfSearching } from "../../store/slices/uiSliceDataOfSearching";

import { AppDispatch, RootState } from '../../store/index';

const NavbarApp:React.FC = () => {
    const { t, i18n } = useTranslation()
    const dispatch: AppDispatch = useDispatch();
    const { currentPoint, currentLang } = useSelector((store: RootState) => store.uiDataOfSearching)
    const switchLang = (lang: string): void => {
        if(currentLang !== lang) {
            localStorage.setItem('current-lang', lang);
            i18n.changeLanguage(lang);
            dispatch(actionsDefaultPoints.removeDataDefaultPoints());
            dispatch(actionsUserPoints.removeDataUserPoints())
            dispatch(actionsDataOfSearching.setCurrentLang({currentLang: lang}))
        }
    }
    return (
        <Navbar expand="lg">
            <Container id="nav-container">
                <Link to='/'><Brand /></Link>
                <Navbar.Toggle aria-controls="navbarWeather" className="bg-additional-lighter"/>
                <Navbar.Collapse>
                    <Nav className='w-100' >
                        <Link to="about" className="mx-2 nav-link color-main-lighter">{t("home.navbar.aboutProject")}</Link>
                        <Link to="currentWeather" className="ms-2 me-auto nav-link color-main-lighter">{t("home.navbar.randomPoint")}</Link>
                        {
                            currentPoint !== '' &&
                            <Link to='weather' className="mx-2 nav-link color-main-lighter text-truncate" style={{"maxWidth": "200px"}}>
                                {t("home.navbar.currentPoint")}: {currentPoint}
                            </Link>
                        }
                        <NavDropdown title={t("home.navbar.lang.currentLang")} className="mx-2">
                            <NavDropdown.Item as="button" className="color-main-lighter" onClick={() => switchLang('ru')}>{t("home.navbar.lang.ru")}</NavDropdown.Item>
                            <NavDropdown.Item as="button" className="color-main-lighter" onClick={() => switchLang('en')}>{t("home.navbar.lang.en")}</NavDropdown.Item>
                        </NavDropdown>
                        <SwitchTheme />

                        <div className="mx-2  navbar-text" style={{ "cursor": "pointer" }} onClick={() => dispatch(actionsModalHelper.setActiveStatus())}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarApp;