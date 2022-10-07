import Navbar from "../components/Navbar"
function WhyCrypto() {
    return (
        <>
            <Navbar />
            <div className="Hero-Section">
                <br /> <br />
                <div className="welcome-message">
                    <h1 className="cta">Why
                        Cry<span style={{ color: "#1bd190" }}>pto??</span></h1>
                    <br />
                    <p style={{ color: "#fff" }}>Not convinced about the case for crypto? Let's see if we can change your mind💙.</p>
                    <br /> <br />
                </div>
            </div>

            <section id="ultimate-store-of-value">
                <br /> <br />
                <h2 className="ultimate">Bitcoin — the ultimate <br />store of value</h2>
                <p>In just over a decade Bitcoin has established itself as a superior store <br /> of value to gold, cherished by man for over 6,000 years.</p>
                <p style={{ fontWeight: "bold" }}>$1 Invested in Bitcoin over 12 years</p>
                <img className="bitcoin-time" src="bitcoin&time.webp" alt="bitcoin-time" />
                <p><a href="https://charts.woobull.com/bitcoin-vs-gold/">Source: Woobull Charts</a></p>
            </section>

            <section id="melting-ice">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>The US dollar is <br />like a melting ice cube</h2>
                            <p>It's purchasing power has declined by 96% since 1913.</p>
                            <p>The same thing is happening to your savings. Bitcoin fixes this. Learn how.</p>
                        </div>
                        <div className="col-lg-6">
                            <img className="ice-cube" src="ice-cube2022.gif" alt="ice-cube" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="Learn-Crypto-Basics">
                <div className="whycrypto-container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="LearnBanner" src="LearnBanner.webp" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h3>Learn Crypto Basics</h3>
                            <p>Start from scratch or brush up on your knowledge withStart from scratch or brush up on your knowledge with</p>
                            <button className="btn btn-success learn" type="submit">Start Learning</button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default WhyCrypto