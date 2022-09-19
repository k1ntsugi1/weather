import React from "react";
import CardWeatherNormalMainField from "./CardWeatherNormalMainField";
import CardWeatherNormalAdditionalField from "./CardWeatherNormalAdditionalField";
import CardWeatherNormalAdditionalFieldEmpty from "./CardWeatherNormalAdditionalFieldEmpty";

import { ParsedDataOutput } from '../../../interfaces/ResponseParsedData';

interface Props {
    points: ParsedDataOutput[],
}

const CardWeatherNormal: React.FC<Props> = ({ points }) => {
    const [first, ...rest] = points;
    const day = first.day;
    
    return (
        <>
            <h3 className="ms-1 mt-3 color-additional opacity-animation">{day}</h3>
            <div className="my-1 weather-container container-glass b-rad-10 text-light bg-gradient-main opacity-animation">
                <div className="back-face-of-glass b-rad-10"></div>
                <div className="px-3 py-2 front-face-of-glass b-rad-10">
                    <CardWeatherNormalMainField value={first} />
                    {rest.length > 0
                        ? (
                            <div className="container-additional-data d-flex justify-content-between overflow-auto" style={{ "minWidth": "100px" }}>
                                {rest.map((item) => <CardWeatherNormalAdditionalField item={item} key={item.id} />)}
                            </div>
                        )
                        : <CardWeatherNormalAdditionalFieldEmpty />
                    }
                </div>
            </div>
        </>
    )
}

export default CardWeatherNormal;