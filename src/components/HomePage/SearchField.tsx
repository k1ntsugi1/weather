import { useFormik } from "formik";
import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import handlerAsyncThunk from "../../services/fetch/handlerAsynkThunk";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useEffect } from "react";

function SearchField({ t }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { currentPoint, currentTypeOfRequest, currentLang } = useSelector(store => store.ui_dataOfSearching);
    
    const schemaForValidating = Yup.object().shape({
        point: Yup
            .string()
            .test({
                name: 'emptyField',
                message: t("home.searchField.errorEmptyField"),
                test: (_, testContext) => {
                    const point = testContext.parent.point ?? null;
                    console.log(point)
                    return !(point === null || point.trim() === '');
                }
            })

    });
    const formik = useFormik({
        initialValues: { point: currentPoint, typeOfRequest: currentTypeOfRequest},
        validationSchema: schemaForValidating,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            const point = values.point
                .trim()
                .split('')
                .map((symbol, index) => index === 0 ? symbol.toUpperCase() : symbol)
                .join('');
            const data = { points: [point], typeOfRequest: values.typeOfRequest, typeOfPoints: 'userPoints', statusOfPoint: 'pending' }
            handlerAsyncThunk(data, dispatch);
            navigate("/weather");
        }
    });

    useEffect(() => {
        if (currentPoint !== '') {
            formik.setFieldValue('point', currentPoint, false);
        } 
    }, [currentLang]);

    return (
        <Form noValidate className='w-100 d-flex' onSubmit={formik.handleSubmit}>
            <InputGroup>
                <Form.Control
                    id="point"
                    name="point"
                    aria-label="search-field"
                    placeholder={t("home.searchField.placeholder")}
                    className="border-dark"
                    isInvalid={!!formik.errors.point}
                    onChange={formik.handleChange} 
                    value={formik.values.point}
                    />
                <Form.Control.Feedback type="invalid" tooltip>
                    {formik.errors.point}
                </Form.Control.Feedback>
                <Button variant="" type="submit" className="rounded-right">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </Button>
            </InputGroup>
            <Form.Select
                size="sm"
                id="typeOfRequest"
                name="typeOfRequest"
                aria-label="Select type of search"
                value={formik.values.typeOfRequest}
                onChange={({ target: { value } }) => {
                    formik.setFieldValue('typeOfRequest', value, true);
                    formik.submitForm();
                }}
                className="ms-3 w-25 border-dark" >
                    <option value="weather">{t("home.searchField.selectField.currentWeather")}</option>
                    <option value="forecast">{t("home.searchField.selectField.forecastWeather")}</option>
            </Form.Select>
        </Form>   
    )
}

export default withTranslation()(SearchField);