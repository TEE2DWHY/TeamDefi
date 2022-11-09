import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"


const BitcoinLimitation = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}>Crypto Basics</span>/<span style={{ opacity: "0.6" }}>Bitcoins Limitation</span></p>
                <br />
                <h1>Crypto Basics: Bitcoin's limitations</h1>
            </div>
            <img className="crypto-basics" src="Crypto Basics 3x1.webp" alt="" />
            <div className="container">
                <h1>What you'll learn</h1>
            </div>
            <br />
            <div className="container" style={{ opacity: "0.6" }}>
                <ul>
                    <li>An introduction to the Blockchain Trilemma</li>
                    <li>Why Bitcoin struggles as a medium of exchange</li>
                    <li>How forks, layer two applications & altcoins attempt to solve the trilemma</li>
                    <li>The future of Bitcoin</li>
                </ul>
                <p>If you’ve worked your way through the two previous articles in this section you should have learned the following key things. </p>
                <ul>
                    <li>Cryptocurrency fulfills all the characteristics of sound money.</li>
                    <li>Bitcoin was the first, and most influential, cryptocurrency.</li>
                    <li>Its creator was Satoshi Nakamoto - publishing its blueprint in 2008.</li>
                    <li>How Bitcoin works to achieve a digitally scarce form of money.</li>
                </ul>
                <br />
                The achievements of Bitcoin’s creator will likely be considered as important as the invention of the internet or personal computer. Not simply a new form of money, but an entirely new way of thinking about money.
                <br /> <br />
                <p>As ingenious as the Bitcoin whitepaper was, it wasn’t perfect. </p>
                <p>This problem is known as the Bitcoin trilemma; how to achieve the three core functions of an ideal cryptocurrency:</p>
                <br /> <br />
                <ol>
                    <li>Security - Can it provide a secure, trustworthy & reliable monetary system</li>
                    <li>Scalability - Can it support increasing numbers of users with no compromise on speed or convenience?</li>
                    <li>Decentralisation - Can it continue to function without a central point of control.</li>
                </ol>
            </div>
        </>
    )
}

export default BitcoinLimitation