import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import SwitchTheme from "./SwitchTheme";
import { Link } from "react-router-dom";
import Brand from "../Home/Brand";
import { withTranslation } from "react-i18next";
import { actionsDataOfSearching } from "../../slices/dataOfSearchingSlice";
import { batch, useDispatch, useSelector } from "react-redux";
import { actionsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice";

function NavbarWeather({ t, i18n , point}) {
    const dispatch = useDispatch();
    const switchLang = (lang) => {
        localStorage.setItem('current-lang', lang);
        i18n.changeLanguage(lang);
        dispatch(actionsDataResultOfSearching.removeAllWeathers());
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
                            <NavDropdown.Item as="button" onClick={() => switchLang('ru')}>{t("home.navbar.lang.ru")}</NavDropdown.Item>
                            <NavDropdown.Item as="button" onClick={() => switchLang('en')}>{t("home.navbar.lang.en")}</NavDropdown.Item>
                        </NavDropdown>
                        <SwitchTheme />
                        {
                            point &&
                            <Link to='weather' className="mx-2 nav-link">
                                { t("home.navbar.currentPoint")}: {point} 
                            </Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default withTranslation()(NavbarWeather);