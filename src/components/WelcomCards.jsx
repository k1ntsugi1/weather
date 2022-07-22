import React from "react";
import ImgMoscow from '../images/cities/moscow.jpg';
import ImgSaintP from '../images/cities/saintP.jpg';
import ImgKazan from '../images/cities/kazan.png'
import ImgKaliningrad from '../images/cities/kaliningrad.jpg'
import ImgChelyabinsk from '../images/cities/chelyabinsk.jpg'
import ImgSochi from '../images/cities/sochi.jpg'
function WelcomCards() {
    return (
        <div className="container-cities">
            <div className="container-img" data-name-city="Москва">
                <div className="backface"></div>
                <img id="moscow" src={ImgMoscow} alt="ImgMoscow" className="city-item" />
            </div>
            <div className="container-img" data-name-city="Санкт-петербург">
                <div className="backface"></div>
                <img id="saintP" src={ImgSaintP} alt="ImgSaintP" className="city-item" />
                
            </div>
            <div className="container-img" data-name-city="Казань">
                <div className="backface"></div>
                <img id="kazan" src={ImgKazan} alt="ImgKazan" className="city-item" />
               
            </div>
            <div className="container-img" data-name-city="Калининград">
                <div className="backface"></div>
                <img id="kaliningrad" src={ImgKaliningrad} alt="ImgKaliningrad" className="city-item" />
            </div>
            <div className="container-img" data-name-city="Челябинск">
                <div className="backface"></div>
                <img id="chelyabinsk" src={ImgChelyabinsk} alt="ImgChelyabinsk" className="city-item" />
            </div>
            <div className="container-img" data-name-city="Сочи">
                <div className="backface"></div>
                <img id="sochi" src={ImgSochi} alt="ImgSochi" className="city-item" />
            </div>






        </div>
    )
}

export default WelcomCards;