import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero-Section";
import LearnCrypto from "./LearnCrypto";
import Learn from "./Courses";
import cardData from "./CardData";
import BitcoinFeatures from "./BitcoinFeatures";
import Features from "./Features";
import Articles from "./Articles";
import articleData from "./ArticleData";
import Mission from "./OurMission";
import Footer from "./Footer";

function App() {
    const data = cardData.map(function (items) {
        return <Learn
            {...items}
        />
    })

    const dataArticle = articleData.map(function (article) {
        return <Articles
            {...article}
        />
    })
    return (
        <>
            <Navbar />
            <HeroSection />
            <LearnCrypto />
            {/* This data is populated by the CardData.js file and contains the courses taught by team defi using props and map method */}
            <section id="learn">
                <div className="course">
                    <br /> <br />
                    <h2>Choose what you want to learn🕶</h2>
                    <div className="container">
                        <div className="row courses-content">
                            {data}
                        </div>
                    </div>
                </div>
            </section>
            <BitcoinFeatures />
            <Features />
            <section id="articles">
                <div className="container">
                    <div className="row articles">
                        {dataArticle}
                    </div>
                </div>
            </section>
            <br /> <br />
            <button className="btn btn-success cta articles" type="button">All articles</button>
            <Mission />
            <Footer />
        </>
    )
}

export default App;