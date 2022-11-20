import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

const Forex = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}> Financial markets</span></p>
            </div>
            <br /> <br />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="header-financials">Want to Understand the Financial Markets?</h1>
                        <br />
                        <p className="understand-p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt itaque autem corrupti, dolorum delectus dicta ab praesentium quisquam ad vel temporibus vitae at ipsum harum, quaerat dolorem doloremque quos iure in asperiores. Optio a voluptas magnam, maxime et quaerat laboriosam voluptates quibusdam perspiciatis quos ab molestias est pariatur cumque recusandae.</p>
                        <button type="button" class="btn-financials">  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            <span class="visually-hidden">Loading...</span>
                            Get Started...</button>
                    </div>
                    <div className="col-lg-6">
                        <img className="banner" src="banner-image.svg" alt="" />
                    </div>
                </div>
            </div>


            <div className="container">
                <h1 style={{ display: "inline" }}>What do we provide? </h1>
                <br />
                <p className="provide-p col-lg-7">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt itaque autem corrupti, dolorum delectus dicta ab praesentium quisquam ad vel temporibus vitae at ipsum harum, quaerat dolorem doloremque quos iure in asperiores.Optio a voluptas magnam, maxime et quaerat laboriosam voluptates quibusdam perspiciatis quos ab molestias est pariatur cumque recusandae.
                </p>
                {/* Details */}
                <br /> <br />
                <div className="cont-provision">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="prov-img1" src="provide1.svg" alt="provide1" />
                        </div>
                        <div className="col-lg-9">
                            <h3 className="provision-h3">Advocacy Partnerships</h3>
                            <p className="provision-p col-lg-7">Become a Learn Crypto brand ambassador and be part of the journey upskilling and informing the world about cryptocurrency.</p>
                        </div>
                    </div>
                </div>

                <div className="cont-provision">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="prov-img1" src="provide1.svg" alt="provide1" />
                        </div>
                        <div className="col-lg-9">
                            <h3 className="provision-h3">Advocacy Partnerships</h3>
                            <p className="provision-p col-lg-7">Become a Learn Crypto brand ambassador and be part of the journey upskilling and informing the world about cryptocurrency.</p>
                        </div>
                    </div>
                </div>

                <div className="cont-provision">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="prov-img1" src="provide1.svg" alt="provide1" />
                        </div>
                        <div className="col-lg-9">
                            <h3 className="provision-h3">Advocacy Partnerships</h3>
                            <p className="provision-p col-lg-7">Become a Learn Crypto brand ambassador and be part of the journey upskilling and informing the world about cryptocurrency.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Forex