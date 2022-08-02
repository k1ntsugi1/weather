import React from "react";
import { withTranslation } from "react-i18next";

function Title({t}) {
    const str = t("home.title");
    return (
        <div className="container-title">
            {str.split(' ').map((word, index) => <span key={index}>{word}</span>)}
    </div>
    )
}

export default withTranslation()(Title)