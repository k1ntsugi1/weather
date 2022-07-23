import React from "react";

function SpinnerMainWeather() {
    return (
        <div className="container-spinner-main-weather container-glass b-rad-10">
            <div className='back-face-of-glass b-rad-10'></div>
            <div className="front-face-of-glass d-flex justify-content-around b-rad-10">
                <div className="first-block">
                    <div className="item-spinner b-rad-10">
                        <div className="spinner b-rad-10"></div>
                    </div>
                    <div className="item-spinner b-rad-10">
                        <div className="spinner b-rad-10"></div>
                    </div>
                    <div className="item-spinner b-rad-10">
                        <div className="spinner b-rad-10"></div>
                    </div>
                </div>
                <div className="second-block">
                    <div className="item-spinner b-rad-10">
                        <div className="spinner b-rad-10"></div>
                    </div>
                    <div className="item-spinner b-rad-10">
                        <div className="spinner b-rad-10"></div>
                    </div>
                    <div className="item-spinner b-rad-10">
                        <div className="spinner b-rad-10"></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SpinnerMainWeather;