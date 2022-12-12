import Footer from "../components/Footer"
import { Link } from "react-router-dom"
const User = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg nav">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/academy" style={{ color: " #fff" }}><img className="logo" src="blockchain.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/sign-in"><button className="sign-in">Sign up</button></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/academy"><i class="fa-solid fa-house"></i> Campus</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#library"><i className="fa-solid fa-book-open-reader"></i> Library</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-lg-6 col-md-6 col-sm-6">
                            <img className="img-fluid" src="Privacy policy.gif" alt="login" style={{ display: "block", margin: "auto" }} />
                            {/* <p>Lets plug you into the world of cryptocurrencies.</p> */}
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 login-form">
                            <form>
                                <div className="form-component">
                                    <input
                                        className="login-input"
                                        type="email"
                                        placeholder="Email address"
                                        required
                                    />
                                </div>
                                <div className="form-component">
                                    <input
                                        className="login-input"
                                        type="password"
                                        placeholder="Password"
                                        required
                                    />
                                </div>
                                <button className="btn-login">Login</button>
                                <br /> <br />

                            </form>
                            <span style={{ color: "#007aff" }}>Forgotten password?</span>
                            <br />
                            <hr />
                            <span style={{ color: "#000", opacity: "0.6" }}>Already have an account?</span>
                            <br /> <br />
                            <button className="create-account">Create New Account</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default User