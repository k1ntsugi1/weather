import React from "react";
import SpinnerWeather from "../spinners/SpinnerWeather";
import Cards from "./Cards";
import SearchField from "./SearchField";
import Hashtag from "./Hashtag";
import Title from "./Title";


function HomePage({setPoint}) {
    return (
        <section className="mt-5 container-welcom">
            <div className="mainFiled">
                <SpinnerWeather styles={{ left: "140px", top: "-5px" }} size='medium' />
                <Hashtag />
                <Title />
            </div>
            <div className="searchField keyfr-showTop">
                <SearchField setPoint={setPoint}/>
                <Cards setPoint={setPoint}/>
            </div>
        </section>

    )
}

export default HomePage;
