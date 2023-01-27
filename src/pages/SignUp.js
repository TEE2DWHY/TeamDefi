import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import "../auth.css"
// require('dotenv').config()
// import "../.env"

const SignUp = () => {

    const [formData, setFormData] = useState({
        fullName: "", email: "", phoneNumber: "", password: "", confirmPassword: "", terms: false
    })

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        try {
            const res = await axios.post("http://localhost:5000/api/v1/auth/register", formData)
            console.log(res)
            // if (res.status === 200) {
            //     window.location = "/sign-in"
            // }
        } catch (err) {
            console.log(err)
        }
    }

    const handlePassword = () => {
        var showPassword = document.getElementById("password")
        if (showPassword.type === "text") {
            showPassword.type = "password"
            document.getElementById("hide-password").style.display = "inline"
            document.getElementById("password-reveal").style.display = "none"
        }
        else {
            showPassword.type = "text"
            document.getElementById("password-reveal").style.display = "inline"
            document.getElementById("hide-password").style.display = "none"
        }

    }
    const handleConfirmPassword = () => {
        var showPassword = document.getElementById("confirm-password")
        if (showPassword.type === "text") {
            showPassword.type = "password"
            document.getElementById("hide-confirmPassword").style.display = "inline"
            document.getElementById("confirmPassword-reveal").style.display = "none"
        }
        else {
            showPassword.type = "text"
            document.getElementById("confirmPassword-reveal").style.display = "inline"
            document.getElementById("hide-confirmPassword").style.display = "none"
        }

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
                                        placeholder="Full Name"
                                        name="fullName"
                                        required
                                        onChange={handleChange}
                                        pattern="^[A-Za-z\s]*$"
                                    />
                                    <span className="user-err">First name should be only alphabets</span>
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
                                    <span className="user-err">Enter a valid email address e.g satoshi@gmail.com</span>
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
                                        id="password"
                                    />
                                    <i className="fa-solid fa-eye password-icons" onClick={handlePassword} id="password-reveal"></i>
                                    <i className="fa-solid fa-eye-slash password-icons" id="hide-password" onClick={handlePassword}></i>
                                    <span className="user-err">password should be minimum of 8 characters</span>
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
                                        id="confirm-password"
                                    />
                                    <i className="fa-solid fa-eye password-icons" onClick={handleConfirmPassword} id="confirmPassword-reveal"></i>
                                    <i className="fa-solid fa-eye-slash password-icons" id="hide-confirmPassword" onClick={handleConfirmPassword}></i>
                                    <span className="user-err">password do not match</span>
                                </div>
                                <div className="form-component">
                                    <input
                                        type="checkbox"
                                        required
                                        name="terms"
                                        onChange={handleChange}
                                        checked={formData.terms}
                                    /> <label style={{ fontSize: "14px" }}>
                                        Agree to <Link to="/privacy" style={{ textDecoration: "underline", color: "#5181f1" }}>terms and conditions</Link>
                                    </label>
                                </div>
                                <button className="btn-login">Create Account</button>
                                <br /> <br />
                            </form>
                            <hr />
                            <span style={{ color: "#000", opacity: "0.6" }}>Already have an account? <i class="fa-solid fa-arrow-down"></i></span>
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