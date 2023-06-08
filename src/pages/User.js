import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/auth.css";
// axios
import authFetch from "../config/authFetch";
//session
import { isLoggedIn } from "../config/session";
//icon
import Spinner from "../components/Spinner";
const User = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((preventDefault) => {
      return {
        ...preventDefault,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handlePassword = () => {
    var showPassword = document.getElementById("password");
    if (showPassword.type === "text") {
      showPassword.type = "password";
      document.getElementById("hide-password").style.display = "inline";
      document.getElementById("password-reveal").style.display = "none";
    } else {
      showPassword.type = "text";
      document.getElementById("password-reveal").style.display = "inline";
      document.getElementById("hide-password").style.display = "none";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginText = document.querySelector(".login-text");
    loginText.classList.add("hide-text");
    const spinner = document.querySelector(".spinner-border");
    spinner.classList.add("show-spinner");
    try {
      await authFetch.post("/login", formData);
      window.location = "/course";
      isLoggedIn("loggedIn", true);
    } catch (err) {
      const error = document.getElementById("login-err");
      error.style.color = "red";
      error.innerHTML = `${err.response.data.msg}...`;
      loginText.classList.remove("hide-text");
      spinner.classList.remove("show-spinner");
      setTimeout(() => {
        error.innerHTML = "";
      }, 3000);
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg nav">
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/academy"
            style={{ color: " #fff" }}
          >
            <img className="logo" src="blockchain.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/sign-up">
                  <button className="sign-in">Sign up</button>
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/academy"
                >
                  <i class="fa-solid fa-house"></i> Campus
                </Link>
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
              <img
                className="img-fluid"
                src="Privacy policy.gif"
                alt="login"
                style={{ display: "block", margin: "auto" }}
              />
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
                  <span className="user-err">
                    Enter a valid email address e.g satoshi@gmail.com
                  </span>
                </div>
                <div className="form-component">
                  <input
                    className="login-input"
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    onChange={handleChange}
                    pattern=".{8,}"
                    id="password"
                    // title="password must contain 8 or more characters"
                  />
                  <i
                    className="fa-solid fa-eye password-icons"
                    onClick={handlePassword}
                    id="password-reveal"
                  ></i>
                  <i
                    className="fa-solid fa-eye-slash password-icons"
                    id="hide-password"
                    onClick={handlePassword}
                  ></i>
                  <span className="user-err">
                    Password should be minimum of 8 characters
                  </span>
                </div>
                <button className="btn-login">
                  <span className="login-text">Login</span>
                  <div className="spinner-border">
                    <Spinner />
                  </div>
                </button>
                <br /> <br />
              </form>
              <p id="login-err"></p>
              <Link to="/forgot-password">
                <span style={{ color: "#007aff" }}>Forgot password?</span>
              </Link>
              <br />
              <hr />
              <span style={{ color: "#000", opacity: "0.6" }}>
                Do not have an account? <i class="fa-solid fa-arrow-down"></i>
              </span>
              <br /> <br />
              <Link to="/sign-up">
                <button className="create-account">Create New Account</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default User;
