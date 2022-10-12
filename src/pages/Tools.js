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
            <br /> <br />
            <div className="container">
                <h3 style={{ fontWeight: "900" }}>Blockchain Explorer</h3>
                <br />
                <div className="container tool">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="tools-cont tools-card">
                                <div className="img-cont" style={{ backgroundColor: "#467df9", height: "80px", width: "100%", borderRadius: "7px", padding: "25px" }}>
                                    <img className="blockchain-logo" src="Blockchain_logo.webp" alt="blockchain-logo" />
                                </div>
                                <div className="row" style={{ padding: "15px", marginTop: "5px" }}>
                                    <div className="col-lg-6">
                                        <h3 style={{ fontWeight: "700" }}>Blockchain</h3>
                                    </div>
                                    <div className="col-lg-6" style={{ textAlign: "right" }}>
                                        <button className="btn btn-outline-success" type="button" style={{ padding: "6px" }}>visit site <i class="fa-solid fa-share"></i></button>
                                    </div>
                                </div>
                                <br />
                                <p style={{ opacity: "0.6", padding: "6px" }}>Blockchain.com claims to be the most secure exchange to buy, sell and trade cryptocurrency.</p>
                                <br />
                            </div>
                        </div>
                        <div className="col-lg-6">

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Tools