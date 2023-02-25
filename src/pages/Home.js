import React, {useEffect} from "react";
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
import { Link } from "react-router-dom";
// animation
import Animate from "../libs/Animate";
import { Typewriter} from 'react-simple-typewriter';

function Home() {
    useEffect(()=>{
       Animate();
    },[])

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
           <div data-aos="zoom-in"> <LearnCrypto /> </div> 
            {/* This data is populated by the CardData.js file and contains the courses taught by team defi using props and map method */}
            <section id="learn" data-aos="fade-up">
                <div className="course">
                    <br /> <br />
                    <h2 style={{ textAlign: "center", fontWeight: "900", lineHeight: "28px", color: "#1bd190" }} id="learning">
                    <Typewriter
                        words={['Choose a Suitable Course..', 'Get Started..', 'Stay Committed💡..', 'Repeat!']}
                        loop={0}
                        cursor
                        typeSpeed={50}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                    <br></br><br /><i class="fa-brands fa-bitcoin"></i> <i class="fa-brands fa-ethereum"></i> <i class="fa-brands fa-hive"></i></h2>
                    <div className="container">
                        <div className="row courses-content">
                            {data}
                        </div>
                    </div>
                </div>
            </section>
            <div data-aos="fade-up"><BitcoinFeatures /></div>

            <section id="Features" data-aos="fade-up">
                <br /> <br />
                <h2 style={{ textAlign: "center", fontWeight: "bolder" }}>Features <i class="fa-solid fa-chart-simple"></i></h2>
                <br />
                <div className="container">
                    <div className="row">
                        {dataFeatures}
                    </div>
                </div>
            </section>

            <br /> <br /> <br />

            <section id="financial-markets" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Our Financial Market Section</h1>
                            <br />
                            <h5 style={{ lineHeight: "1.5rem", fontSize: "16px" }}>Having proper understanding about financial markets helps relieves a lot of burdens  that a whole lot of traders and investors
                                have to battle with when getting familiar with various markets (ranging from cryptocurrencies, stocks, the foreign exchange market and all)</h5>
                            <br />
                            <p>Come on Board!</p>
                            <Link to="/financial-markets"><button className="btn btn-outline-success" type="button" style={{ padding: "10px" }}>Financial Market Section <i class="fa-solid fa-right-to-bracket"></i></button></Link>
                        </div>
                        <div className="col-lg-6">
                            <img className="img-fluid" src="Conversion rate optimization.gif" alt="" style={{ width: "80%" }} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="articles" data-aos="fade-in">
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
            <div data-aos="fade-in"><Mission /></div>
            <Footer />


        </>
    )
}

export default Home;