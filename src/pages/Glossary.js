import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Glossary() {
    return (
        <>
            <section>
                <Navbar />
                <div className="container glossary-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Home <span style={{ color: "#007aff", opacity: "0.6" }}>/
                                Glossary of terms </span> <br /> <br /> <span style={{ color: "#1c96eb" }}>316 GLOSSARY DEFINITIONS OF COMMON CRYPTO TERMS </span></p>
                            <h1 className="h1-glossary">Glossary <br />of terms</h1>
                            <p>Get familiar with various cryptocurrecy <br /> terminologies by checking through our glossary.</p>
                        </div>
                        <div className="col-lg-6">
                            <img className="bitcoin" src="bitcoin.gif" alt="" />
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>

    )
}

export default Glossary;