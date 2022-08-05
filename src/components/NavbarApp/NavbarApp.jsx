import React from "react";
import { Navbar, Container, Nav, NavDropdown, Button } from "react-bootstrap";
import SwitchTheme from "./SwitchTheme";
import { Link } from "react-router-dom";
import Brand from "../HomePage/Brand";
import { withTranslation } from "react-i18next";
import { batch, useDispatch, useSelector } from "react-redux";
import { actions_defaultPoints } from "../../store/slices/dataSlice_defaultPoints";
import { actions_userPoints } from "../../store/slices/dataSlice_userPoints";
import { actions_modalHelper } from "../../store/slices/uiSlice_modalHelper";
import { actions_dataOfSearching } from "../../store/slices/uiSlice_dataOfSearching";


function NavbarApp({ t, i18n }) {
    const dispatch = useDispatch();
    const { currentPoint } = useSelector(store => store. ui_dataOfSearching)
    const switchLang = (lang) => {
        localStorage.setItem('current-lang', lang);
        i18n.changeLanguage(lang);
        dispatch(actions_defaultPoints.removeData_defaultPoints());
        dispatch(actions_userPoints.removeData_userPoints())
        dispatch(actions_dataOfSearching.setCurrentLang({currentLang: lang}))
        dispatch(actions_dataOfSearching.setCurrentPoint({currentPoint: null}))

    }
    return (
        <Navbar expand="lg">
            <Container id="nav-container">
                <Link to='/'><Brand /></Link>
                <Navbar.Toggle aria-controls="navbarWeather" />
                <Navbar.Collapse>
                    <Nav className='w-100'>
                        <Link to="about" className="mx-2 nav-link">{t("home.navbar.aboutProject")}</Link>
                        <Link to="currentWeather" className="ms-2 me-auto nav-link">{t("home.navbar.randomPoint")}</Link>
                        {
                            currentPoint &&
                            <Link to='weather' className="mx-2 nav-link">
                                {t("home.navbar.currentPoint")}: {currentPoint}
                            </Link>
                        }
                        <NavDropdown title={t("home.navbar.lang.currentLang")} className="mx-2">
                            <NavDropdown.Item as="button" onClick={() => switchLang('ru')}>{t("home.navbar.lang.ru")}</NavDropdown.Item>
                            <NavDropdown.Item as="button" onClick={() => switchLang('en')}>{t("home.navbar.lang.en")}</NavDropdown.Item>
                        </NavDropdown>
                        <SwitchTheme />

                        <div className="navbar-text" style={{ "cursor": "pointer" }} onClick={() => dispatch(actions_modalHelper.setActiveStatus())}>
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

export default withTranslation()(NavbarApp);