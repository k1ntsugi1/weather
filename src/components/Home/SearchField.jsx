import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { withTranslation } from "react-i18next";

function SearchField({t}) {
    
    return (
        <Form noValidate className='w-100'>
            <Form.Group>
                <InputGroup>
                <Form.Control
                            id="searchField"
                            name="searchField"
                            aria-label="searchField"
                            placeholder={t("home.searchField.placeholder")} 
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

export default withTranslation()(SearchField);