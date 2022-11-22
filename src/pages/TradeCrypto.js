import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { tradecrypto } from "../components/Data"
import { Link } from "react-router-dom"


const TradeCrypto = () => {
    return (
        <>
            <Navbar />
            <br /> <br />

            <div className="container">
                <h2>How to Trade Crypto</h2>
                <div className="row">
                    {tradecrypto.map((trade) => (
                        <div className="col-lg-4">
                            <div className="card course-card" style={{ height: "380px", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontWeight: "bolder" }}>{trade.courseTitle}</h5>
                                    <h6 className="card-subtitle mb-2" style={{ margin: "40px 0", padding: "10px" }}>{trade.courseContent}</h6>
                                </div>
                                <Link to={trade.link}><button className="k-b" type="button">Learn it now</button></Link>
                            </div>
                        </div>

                    ))}
                </div>
                <br /> <br />
                <Link to="/financial-markets"><h2 className="tool-visit"><span className="k-b">Our Financial <br /> Market Section </span><i className="fa-solid fa-arrow-right"></i></h2></Link>
            </div>
            <Footer />
        </>
    )
}

export default TradeCrypto