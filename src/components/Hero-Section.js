import React from "react";
import "../index.css"

function HeroSection() {
    return (
        <>
            <div className="Hero-Section">
                <br /> <br />
                <div className="welcome-message">
                    <h1 className="cta">Welcome to
                        <br /> Our Aca<span style={{ color: "#1bd190" }}>demy</span></h1>
                    <br />
                    <p style={{ color: "#fff", padding: "0 20px" }}>At Team DeFi we introduce our users to the world of cryptocurrency.<br />
                        One of the major obstacles to understanding crypto is that it is both complex and unfamiliar.
                        <br /><span style={{ fontStyle: "italic" }}>Have no fears. We're here to help! <i className="fa-solid fa-handshake-angle" style={{ color: "#fff" }}></i></span></p>
                    <img className="learn-img" src="learn.png" alt="" />
                    <br />
                    <form action="#" method="post">
                        <span className="CTA"><input className="cta" type="email" placeholder="SatoshiNakamoto@gmail.com" required /> <button className="btn btn-success subscribe" type="submit">Subscribe</button></span>
                    </form>
                    <br /> <br /> <br /> <br /> <br />
                </div>
            </div>

        </>
    )
}

export default HeroSection