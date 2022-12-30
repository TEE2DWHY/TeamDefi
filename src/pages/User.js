import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { useState } from "react"
const User = () => {
    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const handleChange = (e) => {
        setFormData((preventDefault) => {
            return {
                ...preventDefault,
                [e.target.name]: e.target.value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
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
                                <a className="nav-link" href="/sign-up"><button className="sign-in">Sign up</button></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/academy"><i class="fa-solid fa-house"></i> Campus</Link>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="#library"><i className="fa-solid fa-book-open-reader"></i> Library</a>
                            </li> */}
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
                            <form onSubmit={handleSubmit}>
                                <div className="form-component">
                                    <input
                                        className="login-input"
                                        type="email"
                                        placeholder="Email address"
                                        required
                                        name="email"
                                        onChange={handleChange}
                                    />
                                </div>
                                <span>Stop playing</span>
                                <div className="form-component">
                                    <input
                                        className="login-input"
                                        type="password"
                                        placeholder="Password"
                                        required
                                        name="password"
                                        onChange={handleChange}
                                        pattern=".{8,}"
                                        title="password must contain 8 or more characters"
                                    />
                                </div>
                                <button className="btn-login">Login</button>
                                <br /> <br />

                            </form>
                            <span style={{ color: "#007aff" }}>Forgotten password?</span>
                            <br />
                            <hr />
                            <span style={{ color: "#000", opacity: "0.6" }}>Do not have an account? <i class="fa-solid fa-arrow-down"></i></span>
                            <br /> <br />
                            <Link to="/sign-up"><button className="create-account">Create New Account</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default User