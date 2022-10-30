import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/Hero-Section";
import LearnCrypto from "../components/LearnCrypto";
import Learn from "../components/Courses";
import courseSection from "../components/Data";
import BitcoinFeatures from "../components/BitcoinFeatures";
import Features from "../components/Features";
import { FeatureData } from "../components/Data";
import Articles from "../components/Articles";
import { articleData } from "../components/Data";
import Mission from "../components/OurMission";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"

function Home() {
    const data = courseSection.map(function (items) {
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
                    <h2 style={{ textAlign: "center", fontWeight: "900", lineHeight: "28px", color: "#181818;" }}>Choose want you want to learn <br></br><br /><i class="fa-brands fa-bitcoin"></i> <i class="fa-brands fa-ethereum"></i> <i class="fa-brands fa-hive"></i></h2>
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
                <h2 style={{ textAlign: "center", fontWeight: "bolder" }}>Features <i class="fa-solid fa-chart-simple"></i></h2>
                <br />
                <div className="container">
                    <div className="row">
                        {dataFeatures}
                    </div>
                </div>
            </section>

            <section id="articles">
                <div className="container">
                    <h2 style={{ textAlign: "center", border: "none", fontWeight: "bolder" }}>Articles <i class="fa-solid fa-book-open"></i></h2>
                    <div className="row articles">
                        {dataArticle}
                    </div>
                </div>
            </section>
            <br /> <br />
            <div style={{ textAlign: "center" }}>
                <Link to="/blog"><button className="btn btn-success articles" type="button">All articles</button></Link>
            </div>

            <Mission />
            <Footer />


        </>
    )
}

export default Home;