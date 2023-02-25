import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
// libs
import Animate from "../libs/Animate"
// import TextChange from "../libs/TextChange"
import { Typewriter} from 'react-simple-typewriter';

const Subscription = () => {
    useEffect(()=>{
        Animate();
     },[])

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
        const fullName = `${formData.lastName} - ${formData.firstName} `;
        const userEmail = formData.email;
        const userNumber = formData.phoneNumber;
        const message = formData.details;
        const phoneNum = +2348168262613;
        const url = `https://api.whatsapp.com/send?phone=${phoneNum}&text=${encodeURIComponent(`MAILING LIST\nFullName: ${fullName}\nEmail: ${userEmail}\nPhoneNumber: ${userNumber}Message: ${message}`)}`;
        window.open(url);

    }

  return (
    <>
          <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}> Technologies</span></p>
            </div>
            <br /> <br />
            <div className="container" data-aos="slide-up">
                <div className="row">
                    <div className="col-lg-6">
                        <h1 className="header-financials">Want to Get On-Board in the World of 
                        <span style={{marginLeft:"15px", color:"#1bd190"}}>
                        <Typewriter
                            words={['Tech?', 'Web3?', 'Design']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={800}
                        />
                        </span>
                        </h1>
                        <br />
                        <p className="understand-p">Without efficient and helpful training/resources, Becoming good at any skill set can becomes a very hard task. Most people approach the tech industry as a get quick-rich-scheme, hence the reason while many fail to stick through the tough times.
                            <br />
                            The Tech industry is really a wide niche. It comprises of <em> CyberSecurity, Server Side Dev, Client Side Dev, Web3, UI/UX</em> and lots more.
                           Building real-life project, coupled with adequate mentorship is the fastest to move from <b>Amateur to Pro</b>.. Thats why we are here!
                        </p>
                        <a href="#financial-form"><button type="button" className="btn-financials">  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                            <span className="visually-hidden">Loading...</span>
                            Get Started...</button></a>
                    </div>
                    <div className="col-lg-6">
                        <img className="web3 img-fluid" src="web3.webp" alt="web3" />
                    </div>
                </div>
            </div>

            <br />
            <div className="container">
                <h1 style={{ display: "inline" }}>What do we provide? </h1>
                <br /> <br />
                <p className="provide-p col-lg-7">
                    We provide value related and comprehensive courses that helps every of our students harness the ability to become efficient in their respective niche/\.
                </p>
                {/* Details */}
                <br /> <br />
                <div className="cont-provision" data-aos="slide-up">
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

                <div className="cont-provision" data-aos="slide-up">
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

                <div className="cont-provision" data-aos="slide-up">
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
                <div className="cont-provision" data-aos="slide-up">
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
                <div className="cont-provision" data-aos="slide-up">
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
                <div className="cont-provision" data-aos="slide-up">
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
                                Get started with your journey on becoming a proficient Tech-Bro or Tech-Sis😁 through education, consultancy, and bespoke solutions.
                                Proceed for a one-time sign up to get updates from us via our mailing system before our full launch! <i class="fa-solid fa-rocket"></i>. Fill the form below, we would take it up from there. We look forward to this amazing journey with you!💙
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
                            <span className="notice">Our database is down at the moment. You'll be redirected to our whatsapp line for now. Thank you <i class="fa-solid fa-hand-holding-heart"></i> </span>
                            {/* <p className="col-lg-9" style={{ opacity: "0.8" }}><input type="checkbox" />I have read and agree to the <a href="/#">Terms of Service</a> and <a href="/#">Privacy Policy</a></p> */}
                            <button className="btn-submit" id="submission"> Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <div data-aos="footer"><Footer /></div>
    </>
  )
}

export default Subscription