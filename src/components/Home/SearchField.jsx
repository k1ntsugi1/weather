import { useFormik } from "formik";
import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import { batch, useDispatch, useSelector } from "react-redux";
import { actionsDataOfSearching } from "../../slices/dataOfSearchingSlice";
import { selectorsDataResultOfSearching, actionsDataResultOfSearching, fetchDataOfWeather } from "../../slices/dataResultOfSearchingSlice";

function SearchField({ t }) {
    const ids = useSelector(selectorsDataResultOfSearching.selectIds);
    const previousPoint = useSelector(state => state.dataOfSearching.currentPoint)
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            point: '',
            type: 'weather'
        },
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            const currentPoint = values
                .point
                .trim()
                .split('')
                .map((symbol, index) => index === 0 ? symbol.toUpperCase() : symbol)
                .join('');
            const currentType = values.type.trim();
            const idsForRemoving = ids.filter((id) => id.includes(`${values.type}_${values.point}`) ||  id.includes(`${values.type}_${previousPoint}`));
            batch(() => {
                dispatch(actionsDataOfSearching.setCurrentPoint({ currentPoint }));
                dispatch(actionsDataOfSearching.setCurrentType({ currentType }));
                dispatch(actionsDataResultOfSearching.removeItems({ idsForRemoving }));
                dispatch(fetchDataOfWeather())
            })
        }
    })
    return (
        <Form noValidate className='w-100 d-flex' onSubmit={formik.handleSubmit}>
            <InputGroup>
                <Form.Control
                    id="point"
                    name="point"
                    aria-label="search-field"
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
                id="type"
                name="type"
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