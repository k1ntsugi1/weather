import React from "react";
import ImgLightning from '../gismeteo-icons/new/c3_r1_st.svg';
import ImgLightning2 from '../gismeteo-icons/new/c3_rs3.svg';
import ImgLightning3 from '../gismeteo-icons/new/c3.svg';
import ImgSun from '../gismeteo-icons/new/d.svg';
import ImgSun2 from '../gismeteo-icons/new/d_c2_r1.svg'
import ImgSun3 from '../gismeteo-icons/new/d_c1_rs1.svg';

function SpinnerWeather({styles, size}) {
    const mapSize = {
        "big": 'container-bigCube',
        'medium': 'container-mediumCube',
        'small': 'container-smallCube',
    }
    return (
            <div className={mapSize[size]} style={styles}>
                <div className='cube'>
                    <div className='side front'>
                        <img src={ImgLightning} alt="Lightning" />
                    </div>
                    <div className='side back'>
                        <img src={ImgLightning3} alt="Sun" />
                    </div>
                    <div className='side left'>
                        <img src={ImgSun3} alt="ImgLightning2" />
                    </div>
                    <div className='side right'>
                        <img src={ImgLightning2} alt="ImgLightning3" />
                    </div>
                    <div className='side top'>
                        <img src={ImgSun} alt="ImgSun2" />
                    </div>
                    <div className='side bottom'>
                        <img src={ImgSun2} alt="ImgSun3" />
                    </div>
                </div>
            </div>
    )
}

export default SpinnerWeather;