import React from "react";
import Img_1 from '../../assets/images/gismeteo-icons/c3_r3_st.svg';
import Img_2 from '../../assets/images/gismeteo-icons/c3_rs3.svg';
import Img_3 from '../../assets/images/gismeteo-icons/c3.svg';
import Img_4 from '../../assets/images/gismeteo-icons/d.svg';
import Img_5 from '../../assets/images/gismeteo-icons/d_c2_r1.svg'
import Img_6 from '../../assets/images/gismeteo-icons/d_c1_rs1.svg';

interface Mapping {
    [ket: string]: string
}

interface Props {
    size: string,
    styles: {
        [key: string]: string,
    }
}

const SpinnerWeather: React.FC<Props> = ({styles, size}) => {
    const mappingSizeOfCube: Mapping = {
        "big": 'container-bigCube',
        'medium': 'container-mediumCube',
        'small': 'container-smallCube',
    }
    return (
            <div className={mappingSizeOfCube[size]} style={styles}>
                <div className='cube'>
                    <div className='side front bg-cube-side'>
                        <img src={Img_1} alt="Lightning" />
                    </div>
                    <div className='side back bg-cube-side'>
                        <img src={Img_2} alt="Sun" />
                    </div>
                    <div className='side left bg-cube-side'>
                        <img src={Img_3} alt="ImgLightning2" />
                    </div>
                    <div className='side right bg-cube-side'>
                        <img src={Img_4} alt="ImgLightning3" />
                    </div>
                    <div className='side top bg-cube-side'>
                        <img src={Img_5} alt="ImgSun2" />
                    </div>
                    <div className='side bottom bg-cube-side'>
                        <img src={Img_6} alt="ImgSun3" />
                    </div>
                </div>
            </div>
    )
}

export default SpinnerWeather;