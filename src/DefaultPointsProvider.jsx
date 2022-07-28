import React from "react";
import { withTranslation } from "react-i18next";
import { DefaultPointsContext } from "./index_Contexts";

function DefaultPointsProvider({ t, children }) {
    const defaultPoints = {
        defaultPoints: [
            t('defaultPoints.moscow'),
            t('defaultPoints.saintP'),
            t('defaultPoints.chelyabinsk'),
            t('defaultPoints.ekaterinburg'),
            t('defaultPoints.kaliningrad'),
            t('defaultPoints.kazan'),
            t('defaultPoints.rayzan'),
            t('defaultPoints.sochi'),
            t('defaultPoints.ufa'),
        ],
        defaultType: 'weather'
    }
    return (
        <DefaultPointsContext.Provider value={defaultPoints}>
            { children }
        </ DefaultPointsContext.Provider>
    )
}

export default withTranslation()(DefaultPointsProvider)