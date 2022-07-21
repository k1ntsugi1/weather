import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

function Nav() {
    return (
        <div id="nav" className="pt-2 w-100 d-flex justify-content-end">
            <Form noValidate className="w-75">
                <Form.Group>
                    <InputGroup>
                    <Form.Control 
                                id="searchWeather"
                                name="searchWeather"
                                type="text"
                                placeholder="введите город"
                                area-label="поиск города" />
                    <Form.Control.Feedback type="invalid" tooltip></Form.Control.Feedback>
                    <Button variant="primary" type="submit" className="rounded-right">поиск</Button>
                    </InputGroup>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Nav;