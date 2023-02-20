import { usecrypto } from "../components/Data"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"


const UseCrypto = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <h2>How to Use Crypto</h2>
                <div className="row">
                    {usecrypto.map((use) => (
                        <div className="col-lg-4" key={use.id}>
                            <div className="card course-card" style={{ height: "380px", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                <div className="card-body">
                                    <h5 className="card-title" style={{ fontWeight: "bolder" }}>{use.courseTitle}</h5>
                                    <h6 className="card-subtitle mb-2" style={{ margin: "40px 0", padding: "10px" }}>{use.courseContent}</h6>
                                </div>
                                <Link to={use.link}><button className="k-b" type="button">Learn it now</button></Link>
                            </div>
                        </div>

                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default UseCrypto