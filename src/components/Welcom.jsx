import React from "react";
import SpinnerWeather from "./SpinnerWeather";
import WelcomCards from "./WelcomCards";
import SearchField from "./SearchField";
function Welcom() {
    return (
        <section className="container-welcom">
            <div className="mainField">
                <SpinnerWeather styles={{ left: "140px", top: "-20px" }} size='medium' />
                <div className='container-hashtag'>
                    
                    <div className='line1'></div>
                    <div className='line2'></div>
                    <div className='line3'></div>
                    <div className='line4'></div>
                </div>
                <div className="container-title">
                    <span>Найди</span>
                    <span>Свою</span>
                    <span>погоду</span>
                </div>
            </div>
            <WelcomCards />
            <SearchField />
        </section>

    )
}

export default Welcom;
