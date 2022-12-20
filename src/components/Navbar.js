import React from "react";
import "../index.css"
import { Link } from "react-router-dom"

function Navbar() {
    const user = false
    return (
        <nav className="navbar navbar-expand-lg nav-header" >

            <div className="container-fluid">
                <a className="navbar-brand" href="/#" style={{ color: " #fff" }}><img className="logo" src="blockchain.png" alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="/#" style={{ color: "#fff" }}>Home</Link>
                        </li>
                        <li className="nav-item position-relative">
                            <Link to={user ? "/academy" : "/sign-in"} className="nav-link" style={{ color: " #fff" }}>Academy
                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                                    new
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tools" className="nav-link" style={{ color: " #fff" }}>Tools</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" style={{ color: " #fff" }}>About</Link>
                        </li>
                    </ul>

                    <button className="nav-link active nav-nav join-community" aria-current="page" href="/#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-brands fa-telegram" style={{ marginRight: "5px", fontSize: "16px" }}></i> JOIN COMMUNITY</button>
                    {/* Modal */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ fontSize: "14px" }}>Hello Mate <i className="fa-solid fa-hands-clapping"></i></h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" style={{ fontSize: "14px" }}>
                                    Due to our policies in ensuring that only interested/serious participants are found on our social media platforms, we strongly recommend you get in touch with one of our admins.
                                    <br />
                                    We promise that the process isn't a tedious one. We're happy to have you around!😊💙
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ fontSize: "14px" }}>Close</button>
                                    <a href="https://wa.me/+2349032533461"><button type="button" class="btn btn-primary" style={{ fontSize: "14px" }}>Get in touch</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;

