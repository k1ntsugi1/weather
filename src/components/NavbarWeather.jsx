import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import SwitchTheme from "./SwitchTheme";
import { Link } from "react-router-dom";
import Brand from "./Home/Brand";
import { withTranslation } from "react-i18next";


function NavbarWeather({ t, i18n }) {
    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
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
                        <Navbar.Text className="mx-2">
                            {t("home.navbar.currentPoint")}: Москва
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default withTranslation()(NavbarWeather);