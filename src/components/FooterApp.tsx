import React from "react";
import { useTranslation, withTranslation } from "react-i18next";

const FooterApp:React.FC = () => {
    const { t } = useTranslation()
    return (
        <div className="container fixed-bottom bg-main color-additional" style={{"zIndex": "-1"}}>
            <div className="mx-3 row border-top border-dark">
                <div className="col-md-12">
                    <div className="d-flex">
                        <a>t</a>
                        <a>r</a>
                        <a>t</a>
                        <a>r</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withTranslation()(FooterApp)