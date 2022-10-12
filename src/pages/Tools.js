import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"
function Tools() {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}> Tools</span></p>
            </div>
            <br />
            <h1 style={{ fontWeight: "900", textAlign: "center" }}>Tools</h1>
            <br />
            <div className="container">
                <h2 style={{ fontWeight: "900", letterSpacing: "-.03em", lineHeight: "1.2" }}>Blockchain explorer</h2>
                <br />
                <div className="container tool">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="blockchain-logo" src="Blockchain_logo.webp" alt="blockchain-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>Blockchain</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "center" }}>
                                        <a href="https://www.blockchain.com/"><button className="visit-site"> visit site <i class="fa-solid fa-arrow-right"></i></button></a>
                                        <br /> <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px", margin: "10px" }}>Blockchain.com claims to be the most secure exchange to buy, sell and trade cryptocurrency. Trusted by millions since 2011 with over $1 Trillion in crypto transactions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="etherscan-logo" src="Etherscan_logo.webp" alt="etherscan-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>Etherscan</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "center" }}>
                                        <a href="https://etherscan.io/"><button className="visit-site"> visit site <i class="fa-solid fa-arrow-right"></i></button></a>
                                        <br /> <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px", margin: "10px" }}>Etherscan allows you to explore and search for transactions, addresses, tokens, prices and other activities taking place on the Ethereum blockchain.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
            <div className="container">
                <h2 style={{ fontWeight: "900", letterSpacing: "-.03em", lineHeight: "1.2" }}>Trading platforms</h2>
                <br />
                <div className="container tool">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="coinigy-logo" src="coinigy_logo.webp" alt="coinigy-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>Coinigy</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "center" }}>
                                        <a href="https://www.coinigy.com/"><button className="visit-site"> visit site <i class="fa-solid fa-arrow-right"></i></button></a>
                                        <br /> <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px", margin: "10px" }}>Coinigy lets you trade on every Bitcoin exchange through one account. Coinigy is a powerful and intuitive tool for managing your digital wallet portfolio.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="tradedash-logo" src="Tradedash_logo.webp" alt="tradedash-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>Tradedash</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "center" }}>
                                        <a href="https://global.bittrex.com/trade/btc-usd"><button className="visit-site"> visit site <i class="fa-solid fa-arrow-right"></i></button></a>
                                        <br /> <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px", margin: "10px" }}>Tradedash is a trading tool that provides professional and personal customers with a secure, customizable trading experience.Tradedash offers real-time data from support trading platforms. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
            <div className="container">
                <h2 style={{ fontWeight: "900", letterSpacing: "-.03em", lineHeight: "1.2" }}>Charting Tools</h2>
                <br />
                <div className="container tool">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="tradingview-logo" src="TradingView_logo.webp" alt="tradingview-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>TradingView</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "center" }}>
                                        <a href="https://www.tradingview.com/"> <button className="visit-site"> visit site <i class="fa-solid fa-arrow-right"></i></button></a>
                                        <br /> <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px", margin: "10px" }}>TradingView is a social network for traders and investors with live quotes, stock charts and expert trading ideas.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="Cryptowatch-logo" src="Cryptowat.ch_logo.webp" alt="Cryptowat.ch_logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>Cryptowat.ch</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "center" }}>
                                        <a href="https://cryptowat.ch/"><button className="visit-site"> visit site <i class="fa-solid fa-arrow-right"></i></button></a>
                                        <br /> <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px", margin: "10px" }}>Watch, analyze and trade Bitcoin, Ethereum, and more on every exchange from one terminal.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br /> <br />
            <div className="container">
                <h2 style={{ fontWeight: "900", letterSpacing: "-.03em", lineHeight: "1.2" }}>Market data</h2>
                <br />
                <div className="container tool">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="coinmarketcap-logo" src="Coinmarketcap_logo.webp" alt="coinmarketcap-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>Coinmarketcap</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "center" }}>
                                        <button className="visit-site"> visit site <i class="fa-solid fa-arrow-right"></i></button>
                                        <br /> <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px", margin: "10px" }}>Cryptocurrency market cap rankings, charts, and more.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="cryptocompare-logo" src="CryptoCompare_logo.webp" alt="cryptocompare-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>CryptoCompare</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "center" }}>
                                        <button className="visit-site"> visit site <i class="fa-solid fa-arrow-right"></i></button>
                                        <br /> <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px", margin: "10px" }}>All the latest streaming pricing data in the world of cryptocurrencies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
            <div className="container">
                <h2 style={{ fontWeight: "900", letterSpacing: "-.03em", lineHeight: "1.2" }}>Network data</h2>
                <br />
                <div className="container tool">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="Graphana-logo" src="Graphana Optech Dashboards_logo.webp" alt="Graphana-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>Graphana Optech Dashboards</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "center" }}>
                                        <button className="visit-site"> visit site <i class="fa-solid fa-arrow-right"></i></button>
                                        <br /> <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px", margin: "10px" }}>Grafana.com provides a central repository where the community can come together to discover and share dashboards.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "14px 13px 0px 0px", padding: "25px" }}>
                                    <img className="txstats-logo" src="Txstats_logo.webp" alt="txstats-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700", marginBottom: "15px" }}>Txstats</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "center" }}>
                                        <button className="visit-site"> visit site <i class="fa-solid fa-arrow-right"></i></button>
                                        <br /> <br />
                                    </div>
                                    <p style={{ opacity: "0.6", padding: "6px", fontSize: "14px", margin: "10px" }}> <br />Txstats.com provides a series of dashboards centered around a specific element of Bitcoin transactions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tools