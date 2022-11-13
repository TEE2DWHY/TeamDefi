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
                                    <li className="nav-item mb-2"><Link to="/blog" className="nav-link p-0" style={{ color: "#fff" }}>Blog</Link></li>
                                    <li className="nav-item mb-2"><Link to="/tools" className="nav-link p-0" style={{ color: "#fff" }}>Tools</Link></li>
                                    <li className="nav-item mb-2"><a href="https://selar.co/zzz6" className="nav-link p-0" style={{ color: "#fff" }}>Books</a></li>
                                    <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0" style={{ color: "#fff" }}>About</Link></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Podcast</a></li>
                                </ul>
                            </div>

                            <br /> <br />
                            <div className="col-md-6 offset-md-1 mb-3">
                                <form>
                                    <h5>BE PART OF OUR COMMUNITY <i class="fa-solid fa-people-group" style={{ color: "#fff" }}></i></h5>
                                    <p>Get monthly digest of whats new and exciting about cryptocurrencies from us.</p>
                                    <div className="d-flex w-100 gap-2">
                                        <label for="newsletter1" className="visually-hidden">Email address</label>
                                        <input id="newsletter1" type="email" className="form-control" placeholder="Email address" required />
                                        <button className="btn btn-primary" type="button">Subscribe</button>
                                    </div>
                                </form>
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