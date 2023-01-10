import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"

const Privacy = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px", textAlign: "left" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}> Privacy</span></p>
                <br /> <br />
                <h1 style={{ fontWeight: "bold" }}>Privacy Policy</h1>
                <br />
                <h5>By using our website, you accept and agree to our Terms and Conditions including our Privacy Policy.</h5>
                <br /> <br />
                <p style={{ fontWeight: "bold" }}>Personal information we collect</p>
                <p style={{ opacity: "0.6" }}>Team De-Fi only gathers personal information with the user's permission. The amount of information gathered must only be sufficient to achieve the specified goals.
                    We require your email, full name, and phone number in order to establish an account on our website. We might also gather data about traffic. For instance, cookies, device information, and location and other communication data (such as IP address).
                </p>
                <br /> <br />
                <p style={{ fontWeight: "bold" }}>Purpose</p>
                <p style={{ opacity: "0.6" }}>Our main goal in gathering personal data about you is to give you a safe, comfortable, effective, and customized experience. Your personal information won't be kept by us any longer than is required by law or for business needs. We utilize the data we gather from our services to deliver, maintain, safeguard, and improve them as well as to create new ones, safeguard our website, and safeguard the privacy of our users.</p>
                <br /> <br />
                <p style={{ fontWeight: "bold" }}>Deleting the account</p>
                <p style={{ opacity: "0.6" }}></p>
            </div>
            <Footer />
        </>
    )
}

export default Privacy