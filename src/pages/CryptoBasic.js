import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { cryptoBasics } from "../components/Data";
import { Link } from "react-router-dom"
function CryptoBasic() {
    return (
        <>
            <section>
                <Navbar />
                <br /> <br />
                <div className="container" id="cryptobasics">
                    <h2>Crypto Basics</h2>
                    <div className="row">
                        {cryptoBasics.map((basics) => (
                            <div className="col-lg-4">
                                <div className="card course-card" style={{ height: "380px", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                    <div className="card-body">
                                        <h5 className="card-title" style={{ fontWeight: "bolder" }}>{basics.courseTitle}</h5>
                                        <h6 className="card-subtitle mb-2" style={{ margin: "40px 0", padding: "10px" }}>{basics.courseContent}</h6>
                                    </div>
                                    <Link to={basics.link}><button className="k-b" type="button">Learn it now</button></Link>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
                <Footer />
            </section>
        </>

    )
}

export default CryptoBasic;