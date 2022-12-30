import Footer from "../components/Footer"
import { Link } from "react-router-dom"
// import axios from "axios"
import { useState } from "react"
import "../auth.css"

const SignUp = () => {

    const [formData, setFormData] = useState({
        firstName: "", lastName: "", email: "", phoneNumber: "", password: "", confirmPassword: "", terms: ""
    })

    const handleChange = (e) => {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

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
                                <a className="nav-link" href="/sign-in"><button className="sign-in">Sign in</button></a>
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
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"
                                        required
                                        onChange={handleChange}
                                        pattern="^[A-Za-z\s]*$"
                                    />
                                    <span>First name should be only alphabets</span>
                                </div>
                                <div className="form-component">
                                    <input
                                        className="login-input"
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"
                                        required
                                        onChange={handleChange}
                                        pattern="^[A-Za-z\s]*$"
                                    />
                                    <span>First name should be only alphabets</span>
                                </div>
                                <div className="form-component">
                                    <input
                                        className="login-input"
                                        type="email"
                                        placeholder="Email address"
                                        name="email"
                                        required
                                        onChange={handleChange}
                                    />
                                    <span>Enter a valid email address e.g satoshi@gmail.com</span>
                                </div>
                                <div className="form-component">
                                    <input
                                        className="login-input"
                                        type="text"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        required
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-component">
                                    <input
                                        className="login-input"
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        required
                                        onChange={handleChange}
                                        pattern=".{8,}"
                                    />
                                    <span>password should be minimum of 8 characters</span>
                                </div>
                                <div className="form-component">
                                    <input
                                        className="login-input"
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirmPassword"
                                        required
                                        onChange={handleChange}
                                        pattern={formData.password}
                                        onFocus="true"
                                    />
                                    <span>password do not match</span>
                                </div>
                                <span>Passwords do not match!</span>
                                <div className="form-component">
                                    <input
                                        type="checkbox"
                                        required
                                        name="terms"
                                        onChange={handleChange}
                                    /> <label>
                                        Agree to terms and conditions
                                    </label>
                                </div>
                                <button className="btn-login">Create Account</button>
                                <br /> <br />
                            </form>
                            <hr />
                            <Link to="/sign-up"><span style={{ color: "#000", opacity: "0.6" }}>Already have an account? <i class="fa-solid fa-arrow-down"></i></span></Link>
                            <br /> <br />
                            <Link to="/sign-in"><button className="create-account">Login</button></Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default SignUp