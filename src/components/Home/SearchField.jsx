import { useFormik } from "formik";
import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { withTranslation } from "react-i18next";

function SearchField({ t }) {
    const formik = useFormik({
        initialValues: {
            point: '',
            selectByCategory: 'weather'
        }
    })
    return (
        <Form noValidate className='w-100 d-flex'>
            <InputGroup>
                <Form.Control
                    id="point"
                    name="point"
                    aria-label="searchField"
                    placeholder={t("home.searchField.placeholder")}
                    className="border-dark"
                    onChange={formik.handleChange} />
                <Form.Control.Feedback type="invalid" tooltip>
                {t("home.searchField.errorEmptyField")}
                </Form.Control.Feedback>
                <Button variant="" type="submit" className="rounded-right">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
            </InputGroup>


            <Form.Select
                size="sm"
                id="selectByCategory"
                name="selectByCategory"
                aria-label="Select type of search"
                value={formik.type}
                onChange={formik.handleChange}
                className="ms-3 w-25 border-dark" >
                <option value="weather">{t("home.searchField.selectField.currentWeather")}</option>
                <option value="forecast">{t("home.searchField.selectField.forecastWeather")}</option>
            </Form.Select>

        </Form>
    )
}

export default withTranslation()(SearchField);