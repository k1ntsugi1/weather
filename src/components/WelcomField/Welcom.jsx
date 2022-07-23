import React from "react";
import SpinnerWeather from "../SpinnerWeather";
import Cards from "./Cards";
import SearchField from "./SearchField";
import Hashtag from "./Hashtag";
import Title from "./Title";
import Prompt from "./Prompt";


function Welcom() {
    return (
        <section className="container-welcom">
            <div className="mainFiled">
                <SpinnerWeather styles={{ left: "140px", top: "-5px" }} size='medium' />
                <Hashtag />
                <Title />
            </div>
            <div className="searchField keyfr-showTop">
                <SearchField/>
                <Cards />
            </div>
        </section>

    )
}

export default Welcom;
