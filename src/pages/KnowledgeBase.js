import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { cryptoBasics } from "../components/Data"
import { EarnCrypto, tradeCrypto, useCrypto, buildCrypto } from "../components/Data"


const KnowledgeBase = (props) => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container" style={{ textAlign: "left" }}>
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}>KnowledgeBase</span></p>
            </div>
            <br /><br />
            <h1 style={{ textAlign: "center", fontSize: "44px", fontWeight: "600", color: "#181818", marginBottom: "40px" }}>Knowledge Base</h1>

            <div className="container" id="cryptobasics">
                <h2>Step 1: Crypto Basics</h2>
                <div className="row">
                    {cryptoBasics.map((basics) => (
                        <div className="col-lg-4">
                            <div className="card course-card" style={{ borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{basics.courseTitle}</h5>
                                    <h6 className="card-subtitle mb-2" style={{ margin: "40px 0", padding: "10px" }}>{basics.courseContent}</h6>
                                </div>
                                <Link to={basics.link}><button className="k-b" type="button">Learn it now</button></Link>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

            <br /> <br />
            <div className="container">
                <h2>Step 2: How to Earn Crypto</h2>
                <div className="row">
                    {EarnCrypto.map((earn) => (
                        <div className="col-lg-4">
                            <div className="card course-card" style={{ width: "", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{earn.courseTitle}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{earn.courseContent}</h6>
                                    <Link to={earn.link}><button className="btn btn-success cta" type="button">Learn it now</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <br /> <br />
            <div className="container">
                <h2>Step 3: How to trade Crypto</h2>
                <div className="row">
                    {tradeCrypto.map((trade) => (
                        <div className="col-lg-4">
                            <div className="card course-card" style={{ width: "", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{trade.courseTitle}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{trade.courseContent}</h6>
                                    <Link to={trade.link}><button className="btn btn-success cta" type="button">Learn it now</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <br /> <br />
            <div className="container">
                <h2>Step 4: How to Use Crypto</h2>
                <div className="row">
                    {useCrypto.map((use) => (
                        <div className="col-lg-4">
                            <div className="card course-card" style={{ width: "", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{use.courseTitle}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{use.courseContent}</h6>
                                    <Link to={use.link}><button className="btn btn-success cta" type="button">Learn it now</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <br /> <br />
            <div className="container">
                <h2>Step 5: How to build crypto</h2>
                <div className="row">
                    {buildCrypto.map((build) => (
                        <div className="col-lg-4">
                            <div className="card course-card" style={{ width: "", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{build.courseTitle}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{build.courseContent}</h6>
                                    <Link to={build.link}><button className="btn btn-success cta" type="button">Learn it now</button></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default KnowledgeBase