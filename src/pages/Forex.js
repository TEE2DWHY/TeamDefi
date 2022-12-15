import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { useState } from "react"
import axios from "axios"


const Forex = () => {

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phoneNumber: "", details: ""
    })


    const handleChange = (event) => {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        }
        )
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/register", formData)
            console.log(res)
            if (res.status === 200) {
                document.getElementById("submission").innerHTML = "Submitted!🎈";
                window.location = "/course-pack"
            }
            else {
                document.getElementById("submission").innerHTML = "Error";
            }
        } catch (err) {

        };

    }
    // const submission = () => {

    // }
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
                        <p className="understand-p">Without helpful resources and basic skill set, trading can become a very hard task. Most people approach the market as a get quick-rich-scheme, hence the reason while many struggle.
                            <br />
                            The financial market comprises of <em> Cryptocurrencies, Forex, Indices, Metals, Stocks </em> and lots more.
                            Having solid rudimentary to proficient knowledge can help you weather the storms.. Thats why we are here!
                        </p>
                        <a href="#financial-form"><button type="button" className="btn-financials">  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            <span className="visually-hidden">Loading...</span>
                            Get Started...</button></a>
                    </div>
                    <div className="col-lg-6">
                        <img className="banner" src="banner-image.svg" alt="" />
                    </div>
                </div>
            </div>

            <br />
            <div className="container">
                <h1 style={{ display: "inline" }}>What do we provide? </h1>
                <br /> <br />
                <p className="provide-p col-lg-7">
                    We provide value related and comprehensive courses that helps every of our students harness the ability to become profitable in the financial markets/\.
                </p>
                {/* Details */}
                <br /> <br />
                <div className="cont-provision">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="prov-img1" src="provide1.svg" alt="provide1" />
                        </div>
                        <div className="col-lg-9">
                            <h3 className="provision-h3">Tutoring from experts</h3>
                            <p className="provision-p col-lg-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt itaque autem corrupti, dolorum delectus dicta ab praesentium quisquam ad vel temporibus vitae at ipsum harum.</p>
                        </div>
                    </div>
                </div>

                <div className="cont-provision">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="prov-img1" src="Finance.gif" alt="provide1" />
                        </div>
                        <div className="col-lg-9">
                            <h3 className="provision-h3">Helpful Resource(s)</h3>
                            <p className="provision-p col-lg-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt itaque autem corrupti, dolorum delectus dicta ab praesentium quisquam ad vel temporibus vitae at ipsum harum.</p>
                        </div>
                    </div>
                </div>

                <div className="cont-provision">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="prov-img1" src="provide3.svg" alt="provide1" />
                        </div>
                        <div className="col-lg-9">
                            <h3 className="provision-h3">On-Time Market Analysis</h3>
                            <p className="provision-p col-lg-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt itaque autem corrupti, dolorum delectus dicta ab praesentium quisquam ad vel temporibus vitae at ipsum harum.</p>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <div className="cont-provision">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="prov-img2" src="funding.svg" alt="provide1" />
                        </div>
                        <div className="col-lg-9">
                            <h3 className="provision-h3">Funding</h3>
                            <p className="provision-p col-lg-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt itaque autem corrupti, dolorum delectus dicta ab praesentium quisquam ad vel temporibus vitae at ipsum harum.</p>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <div className="cont-provision">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="prov-img2" src="backtesting.svg" alt="provide1" />
                        </div>
                        <div className="col-lg-9">
                            <h3 className="provision-h3">Live Trade-Sessions</h3>
                            <p className="provision-p col-lg-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt itaque autem corrupti, dolorum delectus dicta ab praesentium quisquam ad vel temporibus vitae at ipsum harum.</p>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <div className="cont-provision">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="prov-img2" src="community.svg" alt="provide1" />
                        </div>
                        <div className="col-lg-9">
                            <h3 className="provision-h3">Community Based Learning</h3>
                            <p className="provision-p col-lg-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt itaque autem corrupti, dolorum delectus dicta ab praesentium quisquam ad vel temporibus vitae at ipsum harum.</p>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <div className="cont-provision">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="prov-img2" src="Exams.svg" alt="provide1" />
                        </div>
                        <div className="col-lg-9">
                            <h3 className="provision-h3">Test and Exams</h3>
                            <p className="provision-p col-lg-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nesciunt itaque autem corrupti, dolorum delectus dicta ab praesentium quisquam ad vel temporibus vitae at ipsum harum.</p>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <div className="container financial-form" id="financial-form">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 style={{ fontSize: "38px" }}>
                                Join us today!
                            </h1>
                            <br />
                            <p className="provision-p" style={{ opacity: "0.6" }}>
                                Get started with your journey on understanding every details of the financial markets through through education, consultancy, and bespoke solutions.
                                Proceed for a one-time sign up by filling the form below, we would take up from there. We are glad to have you around!💙
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="col-lg-6 financial-form">
                            <span className="col-lg-6" >
                                <input style={{ borderRadius: "7px", border: "2px solid #B1E1FF", padding: "20px", margin: "10px" }}
                                    type="text"
                                    placeholder="FirstName*"
                                    name="firstName"
                                    onChange={handleChange}
                                    required />
                            </span>
                            <span className="col-lg-6">
                                <input style={{ borderRadius: "7px", border: "2px solid #B1E1FF", padding: "20px" }}
                                    type="text"
                                    placeholder="LastName*"
                                    name="lastName"
                                    onChange={handleChange}
                                    required
                                />
                            </span>
                            <span className="col-lg-6" >
                                <input style={{ borderRadius: "7px", border: "2px solid #B1E1FF", padding: "20px", margin: "10px" }}
                                    type="email"
                                    placeholder="Email*"
                                    name="email"
                                    onChange={handleChange}
                                    required
                                />
                            </span>
                            <span className="col-lg-6">
                                <input style={{ borderRadius: "7px", border: "2px solid #B1E1FF", padding: "20px" }}
                                    type="text"
                                    placeholder="Phone number*"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                    required
                                />
                            </span>
                            <br /> <br />
                            <div className="col-lg-12">
                                <input style={{ borderRadius: "7px", border: "2px solid #B1E1FF", padding: "20px", display: "block", margin: "auto", width: "100%", height: "150px" }}
                                    type="text"
                                    placeholder="Have something to say??..Leave a Message..."
                                    name="details"
                                    onChange={handleChange}
                                />
                            </div>
                            <br />
                            {/* <p className="col-lg-9" style={{ opacity: "0.8" }}><input type="checkbox" />I have read and agree to the <a href="/#">Terms of Service</a> and <a href="/#">Privacy Policy</a></p> */}
                            <button className="btn-submit" id="submission"> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Forex