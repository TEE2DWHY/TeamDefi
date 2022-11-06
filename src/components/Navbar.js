import React from "react";
import "../index.css"
import { Link } from "react-router-dom"

function Navbar() {
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
                        <li className="nav-item">
                            <Link to="/academy" className="nav-link" style={{ color: " #fff" }}>Academy</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tools" className="nav-link" style={{ color: " #fff" }}>Tools</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" style={{ color: " #fff" }}>About</Link>
                        </li>
                    </ul>

                    <button className="nav-link active nav-nav join-community" aria-current="page" href="/#"><i class="fa-brands fa-telegram" style={{ marginRight: "5px", fontSize: "16px" }}></i> JOIN COMMUNITY</button>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;

