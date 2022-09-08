import React from "react"


function Footer() {
    const year = new Date().getFullYear()
    return (
        <>
            <section id="footer">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Home</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Features</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>About</a></li>
                                </ul>
                            </div>

                            <div className="col-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Home</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Features</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>About</a></li>
                                </ul>
                            </div>

                            <div className="col-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Home</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Features</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>Pricing</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>FAQs</a></li>
                                    <li className="nav-item mb-2"><a href="/#" className="nav-link p-0" style={{ color: "#fff" }}>About</a></li>
                                </ul>
                            </div>


                            <div className="col-4 offset-1">
                                <form>
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>Monthly digest of whats new and exciting from us.</p>
                                    <div className="d-flex w-100 gap-2">
                                        <label for="newsletter1" className="visually-hidden">Email address</label>
                                        <input id="newsletter1" type="email" className="form-control" placeholder="Email address" required />
                                        <button className="btn btn-primary" type="button">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="d-flex justify-content-between py-4 my-4 border-top">
                            <p>© {year} Team Defi, Inc. All rights reserved.</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3"><a className="link-dark" href="/#"><svg className="bi" width="24" height="24"><use href="#twitter"></use></svg></a></li>
                                <li className="ms-3"><a className="link-dark" href="/#"><svg className="bi" width="24" height="24"><use href="#instagram"></use></svg></a></li>
                                <li className="ms-3"><a className="link-dark" href="/#"><svg className="bi" width="24" height="24"><use href="#facebook"></use></svg></a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </section>
        </>
    )
}

export default Footer;