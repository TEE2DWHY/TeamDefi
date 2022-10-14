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
                            {/* <Router>
                                <Link to="/lol" className="nav-link" style={{ color: " #fff" }}>Link</Link>
                                <Routes>
                                    <Route path="/lol" component={<Lol />} />
                                </Routes>
                            </Router> */}
                        </li>
                        <li className="nav-item dropdown">
                            <a style={{ color: " #fff" }} className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/#">Action</a></li>
                                <li><a className="dropdown-item" href="/#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/#">Something else here</a></li>
                            </ul>
                        </li>
                        {/* <li className="nav-item">
                            <Link to="/glossary" className="nav-link" style={{ color: " #fff" }}>Glossary</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" style={{ color: " #fff" }}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/tools" className="nav-link" style={{ color: " #fff" }}>Tools</Link>
                        </li>
                    </ul>

                    <a className="nav-link active nav-nav" aria-current="page" href="/#" style={{ color: "#fff" }}>CONNECT WALLET</a>
                </div>
            </div>
        </nav>

    )
}

export default Navbar;

