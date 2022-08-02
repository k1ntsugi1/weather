import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useDefaultPoints } from "../../hooks/useDefaultPoints";
import { selectorsDataResultOfSearching } from "../../slices/dataResultOfSearchingSlice";
import handlerAsyncThunk from "../../fetch/handlerAsynkThunk";
import { withTranslation } from "react-i18next";
import SpinnerMainWeather from "../spinners/SpinnerMainWeather";

import SmallCard from "./SmallCard";
import ErrorSmallCard from "./ErrorSmallCard";

function Cards({ t, setPoint }) {
    const dispatch = useDispatch();

    const { defaultPoints } = useDefaultPoints();
    const currentLang = localStorage.getItem('current-lang');
    const { loading } = useSelector(state => state.dataResultOfSearching);

    const ids = useSelector(selectorsDataResultOfSearching.selectIds);
    const idsDefaultPoints = ids.filter((id) => id.includes('defaultPoints'));

    const images = require.context('../../images/cities', true, /\.(jpg|png)$/i);
    const paths = images.keys();


    useEffect(() => {
        console.log('firstload')
        handlerAsyncThunk(defaultPoints, 'weather', 'defaultPoints', ids, dispatch)
    }, [currentLang]);

    useEffect(() => {
        const timeoutID = setTimeout(() => {
            console.log('setTimer')
            handlerAsyncThunk(defaultPoints, 'weather', 'defaultPoints', ids, dispatch);
        }, 900000);

        const clear = (id) => () => {
            console.log('clear Timer')
            clearTimeout(id)
        };
        return clear(timeoutID);
    }, [idsDefaultPoints])

    return (
        <div className="container-cities">
            {loading === 'pending'
                ? defaultPoints.map((_, index) => <SpinnerMainWeather key={index}/>)
                : idsDefaultPoints.map((id) => {
                    const cityName = id.split('_')[1];
                    const imgPath = paths.find((path) => path.includes(cityName));
                    const img = images(imgPath);
                    return (
                        id.includes('error') 
                        ? <ErrorSmallCard img={img} key={id}/>
                        : <SmallCard img={img} id={id} ids={ids} setPoint={setPoint} key={id}/>
                    )
                })
            }
        </div >
    )
}

export default withTranslation()(Cards);