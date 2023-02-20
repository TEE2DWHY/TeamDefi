import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { buildcrypto } from "../components/Data"

const BuildCrypto = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <h2>How to Build with Crypto</h2>
                <div className="row">
                    {buildcrypto.map((build) => (
                        <div className="col-lg-4" key={build.id}>
                            <div className="card course-card" style={{ height: "380px", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontWeight: "bolder" }}>{build.courseTitle}</h5>
                                    <h6 className="card-subtitle mb-2" style={{ margin: "40px 0", padding: "10px" }}>{build.courseContent}</h6>
                                </div>
                                <Link to={build.link}><button className="k-b" type="button">Learn it now</button></Link>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BuildCrypto