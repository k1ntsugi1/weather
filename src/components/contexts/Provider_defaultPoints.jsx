import React from "react";
import { withTranslation } from "react-i18next";
import { context_defaultPoints } from "./context_defaultPoints";

function Provider_defaultPoints({ t, children }) {
    const defaultPoints = {
        defaultPoints: [
            t('defaultPoints.moscow'),
            t('defaultPoints.saintP'),
            t('defaultPoints.chelyabinsk'),
            t('defaultPoints.ekaterinburg'),
            t('defaultPoints.kaliningrad'),
            t('defaultPoints.kazan'),
            t('defaultPoints.ryazan'),
            t('defaultPoints.sochi'),
            t('defaultPoints.ufa'),
        ],
        defaultType: 'weather',
        statusOfPoint: 'disabled'
    }
    return (
        <context_defaultPoints.Provider value={defaultPoints}>
            { children }
        </ context_defaultPoints.Provider>
    )
}

export default withTranslation()(Provider_defaultPoints)