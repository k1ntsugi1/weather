import React from "react";
import { useTranslation, withTranslation } from "react-i18next";

const Title: React.FC = () => {
    const { t } = useTranslation()
    const str = t("home.title");
    return (
        <div className="container-title color-additional">
            {str.split(' ').map((word, index) => <span key={index}>{word}</span>)}
    </div>
    )
}

export default Title