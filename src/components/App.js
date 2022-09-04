import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero-Section";
import LearnCrypto from "./LearnCrypto";
import Learn from "./Courses";
import cardData from "./CardData";


function App() {
    const data = cardData.map(function (items) {
        return <Learn
            {...items}
        />
    })
    return (
        <>
            <Navbar />
            <HeroSection />
            <LearnCrypto />
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
        </>
    )
}

export default App;