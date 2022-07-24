import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import SwitchTheme from "./SwitchTheme";

function NavbarWeather() {
    return (
        <Navbar expand="lg" fixed="top">
            <Container>
                <Navbar.Brand></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarWeather" />
                <Navbar.Collapse>
                    <Nav className='w-100 d-flex justify-content-between'>
                        <div className='d-flex justify-content-start'>
                            <Nav.Link href="#">О проекте</Nav.Link>
                            <Nav.Link>Случайная город</Nav.Link>
                            <NavDropdown title="Язык">
                                <NavDropdown.Item>Русский</NavDropdown.Item>
                                <NavDropdown.Item>Английский</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                        <div className="d-flex justify-content-between align-middle">
                            <SwitchTheme />
                            <Navbar.Text className="ps-3">
                                Текущий город: Москва
                            </Navbar.Text>
                        </div>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarWeather;