import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

function SearchField() {
    
    return (
        <Form novalidate className="keyfr-showTop">
            <Form.Group>
                <InputGroup>
                <Form.Control
                            id="searchField"
                            name="searchField"
                            aria-label="searchField"
                            placeholder="Поиск" 
                            className="border-black"/>
                <Form.Control.Feedback type="invalid" tooltip>
                    sdgsadg
                </Form.Control.Feedback>
                <Button variant="" type="submit" className="btn rounded-right border-black">
                        <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
                </InputGroup>
            </Form.Group>
        </Form>
    )
}

export default SearchField;