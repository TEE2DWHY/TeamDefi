import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import "../success.css"
const Success = () => {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <div className="bg-light p-5 rounded">
                    <div className="col-sm-8 py-5 mx-auto">
                        <h1 class="display-5 fw-normal">Congratulation!💙 Registration was Successful</h1>
                        <p className="fs-5">Our team would handle every of the technicalities from here onward. For more enquiry you can reach out to our support via whatsapp here <a href="https://wa.me/2348168262613">Whatsapp link.💌</a></p>
                        <p>We are glad to have you around once again. Cheers to profitability and development</p>
                        <p>
                            <Link className="btn btn-primary" to="/" role="button">Go to HomePage &raquo;</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Success