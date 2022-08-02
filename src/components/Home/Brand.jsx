import React from "react";
import { withTranslation } from "react-i18next";

function Brand({t}) {
    const str = t("home.navbar.brand");
    return (
        <div className="brand-container">
            {str.split('').map((symbol, index) => {
                return (
                    <div className="brand-item" key={index}>
                        <span>{symbol}</span>
                    </div>
                )
            })
            }
        </div>
    )
}

export default withTranslation()(Brand);