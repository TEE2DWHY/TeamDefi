import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

const CryptocurrencyTrading = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}><Link to="/trade-crypto"> How to trade crypto/</Link> What is cryptocurrency trading?</span></p>
                <h3><b>How to trade crypto:</b> What is cryptocurrency trading?</h3>
            </div>
            <Footer />
        </>
    )
}

export default CryptocurrencyTrading