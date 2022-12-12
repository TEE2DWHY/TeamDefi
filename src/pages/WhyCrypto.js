import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
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
                    <p style={{ color: "#fff" }}>Not convinced about the case for crypto? Let's see if we can change your mind💌.</p>
                    <br /> <br />
                </div>
            </div>

            <section id="ultimate-store-of-value">
                <br /> <br />
                <div className="container" style={{ textAlign: "left" }}>
                    <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}> About</span></p>
                </div>
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
                            <br /> <br />
                            <h3>Learn Crypto Basics</h3>
                            <p>Start from scratch or brush up on your knowledge withStart from scratch or brush up on your knowledge with</p>
                            <Link to="/academy"><button className="btn btn-success learn" type="submit">Start Learning</button></Link>
                        </div>
                    </div>

                </div>
                <br /> <br />
                <h2 style={{ fontWeight: "600" }}>Money printer goes <br />
                    <span style={{ color: "#1bd190" }}>BRRRR!</span></h2>
                <p>Almost half of all USD in circulation was printed in the last two years. <br />
                    As more money is created, its purchasing power declines and <br /> investors search for scarce assets like Bitcoin, which become more valuable.</p>
                <br /> <br />
                <h4>Growth of the US Dollar Money Supply</h4>
                <img className="usdollar" src="USdollarM1MoneyStock2022.webp" alt="usdollar" />
                <br /> <br />
                <a href="https://fred.stlouisfed.org/series/WM1NS">Source: Board of Governors of the <br /> Federal Reserve System (US)</a>
            </section>
            <section id="understand-crypto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Understand Crypto - TL;DR</h1>
                            <h4>If you want the short story about crypto head to our TL;DR section.</h4>
                            <p>Short answers to all the most common questions and misconceptions about crypto for anyone who doesn’t want the full story.</p>
                            <Link to="/academy"><button className="btn btn-outline-success" type="button">Learn More <i className="fa-solid fa-right-to-bracket"></i></button></Link>
                        </div>
                        <div className="col-lg-6">
                            <img className="understand-crypto" src="Understand Crypto.webp" alt="understand-crypto" />
                        </div>
                    </div>
                </div>

            </section>
            <Footer />
        </>
    )
}

export default WhyCrypto