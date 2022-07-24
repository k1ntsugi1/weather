import React from "react";
import SpinnerWeather from "../spinners/SpinnerWeather";
import Cards from "./Cards";
import SearchField from "./SearchField";
import Hashtag from "./Hashtag";
import Title from "./Title";


function Home() {
    return (
        <section className="container-welcom container">
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

export default Home;
