import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero-Section";
import LearnCrypto from "./LearnCrypto";
import Learn from "./Courses";
import cardData from "./CardData";
import BitcoinFeatures from "./BitcoinFeatures";
import Features from "./Features";
import FeatureData from "./FeatureData";
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

    const dataFeatures = FeatureData.map(function (features) {
        return <Features
            {...features}
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
                    <h2 style={{ textAlign: "center" }}>Choose what you want to learn🕶</h2>
                    <div className="container">
                        <div className="row courses-content">
                            {data}
                        </div>
                    </div>
                </div>
            </section>
            <BitcoinFeatures />
            <section id="Features">
                <br /> <br />
                <h2 style={{ textAlign: "center" }}>Learn Crypto features </h2>
                <br />
                <div className="container">
                    <div className="row">
                        {dataFeatures}
                    </div>
                </div>
            </section>

            <section id="articles">
                <div className="container">
                    <h2 style={{ textAlign: "center" }}>Articles <i class="fa-solid fa-book-open"></i></h2>
                    <div className="row articles">
                        {dataArticle}
                    </div>
                </div>
            </section>
            <br /> <br />
            <div style={{ textAlign: "center" }}>
                <button className="btn btn-success cta" type="button">All articles</button>
            </div>

            <Mission />
            <Footer />


        </>
    )
}

export default App;