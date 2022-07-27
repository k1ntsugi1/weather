import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import SwitchTheme from "./SwitchTheme";
import { Link } from "react-router-dom";
import Brand from "../Home/Brand";
import { withTranslation } from "react-i18next";
import { actionsDataOfSearching } from "../../slices/dataOfSearchingSlice";
import { batch, useDispatch, useSelector } from "react-redux";
import { actionsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice";

function NavbarWeather({ t, i18n }) {
    const dispatch = useDispatch();
    const { currentPoint } = useSelector((state) => state.dataOfSearching)
    const changeLang = (lang) => {
        localStorage.setItem('current-lang', lang);
        i18n.changeLanguage(lang);
        batch(() => {
            dispatch(actionsDataResultOfSearching.removeAllWeathers());
            dispatch(actionsDataOfSearching.setCurrentLang({ currentLang: lang }));
        })
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
                        <NavDropdown title={t("home.navbar.lang.currentLang")} className="mx-2">
                            <NavDropdown.Item as="button" onClick={() => changeLang('ru')}>{t("home.navbar.lang.ru")}</NavDropdown.Item>
                            <NavDropdown.Item as="button" onClick={() => changeLang('en')}>{t("home.navbar.lang.en")}</NavDropdown.Item>
                        </NavDropdown>
                        <SwitchTheme />
                        {
                            currentPoint &&
                            <Navbar.Text className="mx-2">
                                { t("home.navbar.currentPoint")}: {currentPoint} 
                            </Navbar.Text>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default withTranslation()(NavbarWeather);