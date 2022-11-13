import React from "react"
import { Link } from "react-router-dom"


function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <section id="footer">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-6 col-md-2 mb-3">
                                <h5 style={{ color: "#fff", opacity: "0.6" }}>Consider</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><Link to="crypto-basics" className="nav-link p-0" style={{ color: "#fff" }}>Crypto Basics</Link></li>
                                    <li className="nav-item mb-2"><Link to="/earn-crypto" className="nav-link p-0" style={{ color: "#fff" }}>Earning Crypto</Link></li>
                                    <li className="nav-item mb-2"><Link to="/whycrypto" className="nav-link p-0" style={{ color: "#fff" }}>Why Crypto</Link></li>
                                    <li className="nav-item mb-2"><Link to="/trade-crypto" className="nav-link p-0" style={{ color: "#fff" }}>Trading Crypto</Link></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Crypto Criticisms</a></li>
                                </ul>
                            </div>

                            <div className="col-6 col-md-2 mb-3">
                                <h5 style={{ color: "#fff", opacity: "0.6" }}>Resources</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Home</a></li>
                                    <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0" style={{ color: "#fff" }}>Blog</Link></li>
                                    <li className="nav-item mb-2"><Link to="/tools" className="nav-link p-0" style={{ color: "#fff" }}>Tools</Link></li>
                                    <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0" style={{ color: "#fff" }}>About</Link></li>
                                    <li className="nav-item mb-2"><a href="https://wa.me/+2348168262613" className="nav-link p-0" style={{ color: "#fff" }}>Contact Us</a></li>
                                </ul>
                            </div>

                            <br /> <br />
                            <div className="col-md-6 offset-md-1 mb-3">
                                <h5>BE PART OF OUR COMMUNITY <i class="fa-solid fa-people-group" style={{ color: "#fff" }}></i></h5>
                                <p>Get monthly digest of whats new and exciting about cryptocurrencies from us.</p>
                                <button className="nav-link active footer" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ textAlign: "center" }}><i class="fa-brands fa-telegram" style={{ marginRight: "5px", fontSize: "16px" }}></i> JOIN COMMUNITY</button>
                                {/* Modal */}
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h1 class="modal-title fs-5" id="exampleModalLabel" style={{ fontSize: "14px" }}>Hello Mate <i class="fa-solid fa-hands-clapping"></i></h1>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body" style={{ fontSize: "14px" }}>
                                                Due to our policies in ensuring that only interested/serious participants are found on our social media platforms, we strongly recommend you get in touch with one of our admins.
                                                <br />
                                                We promise that the process isn't a tedious one. We're happy to have you around!😊💙
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{ fontSize: "14px" }}>Close</button>
                                                <a href="https://wa.me/+2349032533461"><button type="button" class="btn btn-primary" style={{ fontSize: "14px" }}>Get in touch</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between py-4 my-4 border-top">
                            <p style={{ fontSize: "14px" }}>© {year} Team Defi, Inc. All rights reserved.</p>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Footer;