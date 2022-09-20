import React from "react";
import { useTranslation } from "react-i18next";

function Brand() {
    const { t } = useTranslation()
    const str = t("home.navbar.brand");
    return (
        <div className="brand-container">
            {str.split('').map((symbol, index) => {
                return (
                    <div className="brand-item bg-brand color-brand" key={index}>
                        <span>{symbol}</span>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Brand;