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
                    <p style={{ color: "#fff" }}>inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..<br />
                        lorem ipsum illo inventore.</p>
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