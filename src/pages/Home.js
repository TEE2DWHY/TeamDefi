import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero-Section";
import LearnCrypto from "../components/LearnCrypto";
import Learn from "../components/Courses";
import cardData from "../components/CardData";
import BitcoinFeatures from "../components/BitcoinFeatures";
import Features from "../components/Features";
import FeatureData from "../components/FeatureData";
import Articles from "../components/Articles";
import articleData from "../components/ArticleData";
import Mission from "../components/OurMission";
import Footer from "../components/Footer";

function Home() {
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
                    <h2 style={{ textAlign: "center", fontWeight: "bolder" }}>Our Courses... <br></br><br /><i class="fa-brands fa-bitcoin"></i> <i class="fa-brands fa-ethereum"></i> <i class="fa-brands fa-hive"></i></h2>
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
                <h2 style={{ textAlign: "center", fontWeight: "bolder" }}>Learn Crypto features <i class="fa-solid fa-chart-simple"></i></h2>
                <br />
                <div className="container">
                    <div className="row">
                        {dataFeatures}
                    </div>
                </div>
            </section>

            <section id="articles">
                <div className="container">
                    <h2 style={{ textAlign: "center", borde: "none", fontWeight: "bolder" }}>Articles <i class="fa-solid fa-book-open"></i></h2>
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

export default Home;