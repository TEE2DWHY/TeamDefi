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
                <p style={{ opacity: "0.6" }}>Your personal information is kept on file by Team De-Fi for as long as is necessary to grant you access to the website's services. You might be able to deactivate your user account if you no longer want to use our application by emailing a request to <a href="mailto:decentralizedfinancing101@gmail.com">decentralizedfinancing101@gmail.com</a>. If you want to permanently remove your personal information from our servers, let us know in the email.</p>
                <br /> <br />
                <p style={{ fontWeight: "bold" }}>Changes</p>
                <p style={{ opacity: "0.6" }}>There will be periodic updates to both the Terms & Conditions and this Privacy Policy. Any updates or modifications will be posted on the website. To make sure you are familiar with the most recent version of the Terms, we urge you to check this page from time to time.
                    You can contact <a href="mailto:decentralizedfinancing101@gmail.com">decentralizedfinancing101@gmail.com</a> with any requests, questions, or concerns regarding the processing of your personal data.</p>
            </div>
            <Footer />
        </>
    )
}

export default Privacy