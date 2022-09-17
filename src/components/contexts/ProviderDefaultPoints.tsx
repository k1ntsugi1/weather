import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { contextDefaultPoints } from "./contextDefaultPoints";

interface Props {
    children: React.ReactNode;
}

const ProviderDefaultPoints: FC<Props> = ({ children }) => {
    const { t } = useTranslation()
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
        <contextDefaultPoints.Provider value={defaultPoints}>
            { children }
        </ contextDefaultPoints.Provider>
    )
}

export default ProviderDefaultPoints;