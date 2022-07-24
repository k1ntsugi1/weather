import React from "react";
import { withTranslation } from "react-i18next";

function Brand({t}) {
    const str = t("home.navbar.brand");
    return (
        <div className="brand-container">
            {str.split('').map((symbol) => {
                return (
                    <div className="brand-item">
                        <span>{symbol}</span>
                    </div>
                )
            })
            }
        </div>
    )
}

export default withTranslation()(Brand);