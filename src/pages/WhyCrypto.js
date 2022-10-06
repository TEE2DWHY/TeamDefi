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
                <h2 className="ultimate">Bitcoin — the ultimate <br />store of value</h2>
                <p>In just over a decade Bitcoin has established itself as a superior store <br /> of value to gold, cherished by man for over 6,000 years.</p>
                <p style={{ fontWeight: "bold" }}>$1 Invested in Bitcoin over 12 years</p>
            </section>
        </>
    )
}

export default WhyCrypto