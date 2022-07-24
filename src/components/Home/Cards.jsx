import React from "react";
import ImgMoscow from '../../images/cities/moscow.jpg';
import ImgSaintP from '../../images/cities/saintP.jpg';
import ImgKazan from '../../images/cities/kazan.png'
import ImgKaliningrad from '../../images/cities/kaliningrad.jpg'
import ImgChelyabinsk from '../../images/cities/chelyabinsk.jpg'
import ImgSochi from '../../images/cities/sochi.jpg'
import ImgRayzan from '../../images/cities/rayzan.jpg';
import ImgEkaterinburg from '../../images/cities/ekaterinburg.jpg';
import ImgUfa from '../../images/cities/ufa.jpg';
function Cards() {
    return (
        <div className="container-cities">
            <div className="container-img rotate-container">
                <div className="rotate-card">
                    <div className="back-face-of-card container-glass b-rad-10">
                        <div className="back-face-of-glass b-rad-10"></div>
                        <div className="front-face-of-glass b-rad-10 d-flex">
                            <div className="d-flex flex-column text-center">
                                <div className="h2">+23</div>
                                <div>Москва</div>
                            </div>
                            <img src={require('../../gismeteo-icons/new/d_c1_rs1.svg')} alt="" width='80px' height='80px' />
                        </div>
                    </div>
                    <div className="front-face-of-card b-rad-10">
                        <img id="moscow" src={ImgMoscow} alt="ImgMoscow" className="city-img b-rad-10" />
                    </div>
                </div>
            </div>
            <div className="container-img rotate-container">
                <div className="rotate-card">
                    <div className="back-face-of-card container-glass b-rad-10">
                        <div className="back-face-of-glass b-rad-10"></div>
                        <div className="front-face-of-glass b-rad-10 d-flex">
                            <div className="d-flex flex-column text-center">
                                <div className="h2">+23</div>
                                <div>Москва</div>
                            </div>
                            <img src={require('../../gismeteo-icons/new/d_c1_rs1.svg')} alt="" width='80px' height='80px' />
                        </div>
                    </div>
                    <div className="front-face-of-card b-rad-10">
                        <img id="saintP" src={ImgSaintP} alt="ImgSaintP" className="city-img b-rad-10" />
                    </div>
                </div>
            </div>
            <div className="container-img rotate-container">
                <div className="rotate-card">
                    <div className="back-face-of-card container-glass b-rad-10">
                        <div className="back-face-of-glass b-rad-10"></div>
                        <div className="front-face-of-glass b-rad-10 d-flex">
                            <div className="d-flex flex-column text-center">
                                <div className="h2">+23</div>
                                <div>Москва</div>
                            </div>
                            <img src={require('../../gismeteo-icons/new/d_c1_rs1.svg')} alt="" width='80px' height='80px' />
                        </div>
                    </div>
                    <div className="front-face-of-card b-rad-10">
                        <img id="kazan" src={ImgKazan} alt="ImgKazan" className="city-img b-rad-10" />
                    </div>
                </div>
            </div>
            <div className="container-img rotate-container">
                <div className="rotate-card">
                    <div className="back-face-of-card container-glass b-rad-10">
                        <div className="back-face-of-glass b-rad-10"></div>
                        <div className="front-face-of-glass b-rad-10 d-flex">
                            <div className="d-flex flex-column text-center">
                                <div className="h2">+23</div>
                                <div>Москва</div>
                            </div>
                            <img src={require('../../gismeteo-icons/new/d_c1_rs1.svg')} alt="" width='80px' height='80px' />
                        </div>
                    </div>
                    <div className="front-face-of-card b-rad-10">
                        <img id="kaliningrad" src={ImgKaliningrad} alt="ImgKaliningrad" className="city-img b-rad-10" />
                    </div>
                </div>
            </div>
            <div className="container-img rotate-container">
                <div className="rotate-card">
                    <div className="back-face-of-card container-glass b-rad-10">
                        <div className="back-face-of-glass b-rad-10"></div>
                        <div className="front-face-of-glass b-rad-10 d-flex">
                            <div className="d-flex flex-column text-center">
                                <div className="h2">+23</div>
                                <div>Москва</div>
                            </div>
                            <img src={require('../../gismeteo-icons/new/d_c1_rs1.svg')} alt="" width='80px' height='80px' />
                        </div>
                    </div>
                    <div className="front-face-of-card b-rad-10">
                        <img id="chelyabinsk" src={ImgChelyabinsk} alt="ImgChelyabinsk" className="city-img b-rad-10" />
                    </div>
                </div>
            </div>
            <div className="container-img rotate-container">
                <div className="rotate-card">
                    <div className="back-face-of-card container-glass b-rad-10">
                        <div className="back-face-of-glass b-rad-10"></div>
                        <div className="front-face-of-glass b-rad-10 d-flex">
                            <div className="d-flex flex-column text-center">
                                <div className="h2">+23</div>
                                <div>Москва</div>
                            </div>
                            <img src={require('../../gismeteo-icons/new/d_c1_rs1.svg')} alt="" width='80px' height='80px' />
                        </div>
                    </div>
                    <div className="front-face-of-card b-rad-10">
                        <img id="sochi" src={ImgSochi} alt="ImgSochi" className="city-img b-rad-10" />
                    </div>
                </div>
            </div>
            <div className="container-img rotate-container">
                <div className="rotate-card">
                    <div className="back-face-of-card container-glass b-rad-10">
                        <div className="back-face-of-glass b-rad-10"></div>
                        <div className="front-face-of-glass b-rad-10 d-flex">
                            <div className="d-flex flex-column text-center">
                                <div className="h2">+23</div>
                                <div>Москва</div>
                            </div>
                            <img src={require('../../gismeteo-icons/new/d_c1_rs1.svg')} alt="" width='80px' height='80px' />
                        </div>
                    </div>
                    <div className="front-face-of-card b-rad-10">
                        <img id="sochi" src={ImgEkaterinburg} alt="ImgEkaterinburg" className="city-img b-rad-10" />
                    </div>
                </div>
            </div>
            <div className="container-img rotate-container">
                <div className="rotate-card">
                    <div className="back-face-of-card container-glass b-rad-10">
                        <div className="back-face-of-glass b-rad-10"></div>
                        <div className="front-face-of-glass b-rad-10 d-flex">
                            <div className="d-flex flex-column text-center">
                                <div className="h2">+23</div>
                                <div>Москва</div>
                            </div>
                            <img src={require('../../gismeteo-icons/new/d_c1_rs1.svg')} alt="" width='80px' height='80px' />
                        </div>
                    </div>
                    <div className="front-face-of-card b-rad-10">
                        <img id="sochi" src={ImgRayzan} alt="ImgRayzan" className="city-img b-rad-10" />
                    </div>
                </div>
            </div>
            <div className="container-img rotate-container">
                <div className="rotate-card">
                    <div className="back-face-of-card container-glass b-rad-10">
                        <div className="back-face-of-glass b-rad-10"></div>
                        <div className="front-face-of-glass b-rad-10 d-flex">
                            <div className="d-flex flex-column text-center">
                                <div className="h2">+23</div>
                                <div>Москва</div>
                            </div>
                            <img src={require('../../gismeteo-icons/new/d_c1_rs1.svg')} alt="" width='80px' height='80px' />
                        </div>
                    </div>
                    <div className="front-face-of-card b-rad-10">
                        <img id="sochi" src={ImgUfa} alt="ImgUfa" className="city-img b-rad-10" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;