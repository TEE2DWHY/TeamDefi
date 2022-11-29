import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"

const Books = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}> Books</span></p>
            </div>
            <br />
            <div className="container" style={{ textAlign: "center" }}>
                <h1 style={{ fontWeight: "900" }}>Crypto Books</h1>
                <p style={{ opacity: "0.6", padding: "0 30px" }}>What are the best crypto books for newcomers looking to learn about the subject? Team De-Fi is compiling the list of crypto books to help you quickly scale the learning curve.</p>
            </div>
            <br />
            <div className="container">
                <div className="container tool">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="books-img" src="bitcoin standard_2.webp" alt="blockchain-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-9">
                                        <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>The Bitcoin Standard</h4>
                                    </div>
                                    <div className="col-lg-3" style={{ textAlign: "center" }}>
                                        <a href="https://www.amazon.co.uk/Bitcoin-Standard-Decentralized-Alternative-Central/dp/1119473861"><button className="visit-site"> visit site <i className="fa-solid fa-arrow-right"></i></button></a>
                                        <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px" }}>If you're looking for a well reasoned argument for Bitcoin, read the Bitcoin Standard. Regarded as one of the best cases for Bitcoin it analyses the historical context, the economic properties and future implications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="books-img" src="Mastering Bitcoin_2.webp" alt="etherscan-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-9">
                                        <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>Mastering Bitcoin (Andreas Antonopoulos)</h4>
                                    </div>
                                    <div className="col-lg-3" style={{ textAlign: "center" }}>
                                        <a href="https://www.amazon.co.uk/Mastering-Bitcoin-Unlocking-Digital-Cryptocurrencies/dp/1449374042"><button className="visit-site"> visit site <i className="fa-solid fa-arrow-right"></i></button></a>
                                        <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px" }}>Mastering Bitcoin is one of the most comprehensive and thoughtful guides to what Bitcoin is, and how it works. Great for anyone thinking about it from a coding perspective.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="container">
                <br />
                <div className="container tool">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="books-img" src="Infinite Machine_2.webp" alt="blockchain-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-9">
                                        <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>The Infinite Machine (Camila Russo)</h4>
                                    </div>
                                    <div className="col-lg-3" style={{ textAlign: "center" }}>
                                        <a href="https://www.amazon.co.uk/Moon-Camila-Russo/dp/0062886142"><button className="visit-site"> visit site <i className="fa-solid fa-arrow-right"></i></button></a>
                                        <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px" }}>A great insight into the origins and history of Ethereum written as a narrative focused on the characters, their motivations and the drama, rather than technical details. If you like Michael Lewis (Flashboys, The Big Short) you’ll love this.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="books-img" src="PriceTmrw_2.webp" alt="etherscan-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-9">
                                        <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>The Price of Tomorrow (Jeff Booth)</h4>
                                    </div>
                                    <div className="col-lg-3" style={{ textAlign: "center" }}>
                                        <a href="https://www.amazon.co.uk/Price-Tomorrow-Deflation-Abundant-Future/dp/1999257405"><button className="visit-site"> visit site <i className="fa-solid fa-arrow-right"></i></button></a>
                                        <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px" }}>Mastering Bitcoin is one of the most comprehensive and thoughtful guides to what Bitcoin is, and how it works. Great for anyone thinking about it from a coding perspective.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <br />
                <div className="container tool">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="books-img" src="Where does Money Come From_2.webp" alt="blockchain-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-9">
                                        <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>Where does money come from? (Josh Ryan-Collins)</h4>
                                    </div>
                                    <div className="col-lg-3" style={{ textAlign: "center" }}>
                                        <a href="https://www.amazon.co.uk/Where-Does-Money-Come-Ryan-Collins/dp/1521043892"><button className="visit-site"> visit site <i className="fa-solid fa-arrow-right"></i></button></a>
                                        <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px" }}>Crypto is described as the antidote to uncontrolled central bank money printing, but what does that really mean, and where does money actually come from? Read this book for an answer that is fascinating and surprising in equal parts.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="books-img" src="WhenMoneyDies_2.webp" alt="etherscan-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-9">
                                        <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>When Money Dies (Adam Ferguson)</h4>
                                    </div>
                                    <div className="col-lg-3" style={{ textAlign: "center" }}>
                                        <a href="https://www.amazon.co.uk/When-Money-Dies-nightmare-Hyper-Inflation/dp/1906964440"><button className="visit-site"> visit site <i className="fa-solid fa-arrow-right"></i></button></a>
                                        <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px" }}>To really 'get' crypto you have to imagine what life would be like if money stopped working. Adam Ferguson's brilliant account of hyperinflation in the Weimar Republic details what happens when money dies. Spoiler alert.....it isn't pretty.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <br />
                <div className="container tool">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="books-img" src="guide-to-investing.png" alt="blockchain-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-9">
                                        <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>Guide to investing in crypto (Olorunfemi Tayo)</h4>
                                    </div>
                                    <div className="col-lg-3" style={{ textAlign: "center" }}>
                                        <a href="https://selar.co/zzz6"><button className="visit-site"> visit site <i className="fa-solid fa-arrow-right"></i></button></a>
                                        <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px" }}>Olorunfemi Tayo here segregates the difference between approaching the market as an investor and a trader. This material is recommended for any beginner who is willing to take the investor path in the world of cryptocurrencies.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="books-img" src="graeber-debt-first-500yrs.webp" alt="etherscan-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-9">
                                        <h4 style={{ fontWeight: "700", marginBottom: "15px" }}>Debt: The First 5,000 years (David Graeber)</h4>
                                    </div>
                                    <div className="col-lg-3" style={{ textAlign: "center" }}>
                                        <a href="https://www.amazon.co.uk/David-Graeber/e/B001IQXM5K"><button className="visit-site"> visit site <i className="fa-solid fa-arrow-right"></i></button></a>
                                        <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px" }}>David Graeber examines the history of money, debunking many widely held ideas along the way, and tracing its roots to the concept of debt across social, religious and economy relationships.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
            <Link to="/academy"><h2 className="tool-visit"><span className="k-b">Proceed to Academy? </span><i className="fa-solid fa-arrow-right"></i></h2></Link>
            <Footer />
        </>

    )
}

export default Books