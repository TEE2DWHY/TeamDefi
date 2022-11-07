import { Link } from "react-router-dom"
import { coursePage } from "../components/Data"

const Courses = () => {
    const year = new Date().getFullYear
    return (
        <div className="courses-page">
            <nav class="navbar navbar-expand-lg nav">
                <div class="container-fluid">
                    <a className="navbar-brand" href="/#" style={{ color: " #fff" }}><img className="logo" src="blockchain.png" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/#"><button className="sign-in">Sign in</button></a>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/academy"><i class="fa-solid fa-house"></i> Campus</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about"><i class="fa-solid fa-book-open-reader"></i> About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br /> <br /> <br />
            <h1 className="welcome-header">The Complete Crypto-Stack Course <img className="crypto-stack" src="image_8_f6ed3c2990.webp" alt="crypto-stack" /></h1>
            <section>
                <div className="container course-container">
                    {coursePage.map((items) => (
                        <div className="courses">
                            <hr />
                            <div className="row">
                                <div className="col-lg-10">
                                    <h2 className="module-header">{items.header}<span className="grey" style={{ opacity: "0.6" }}> {items.subheader}</span></h2>
                                </div>
                                <div className="col-lg-2">
                                    <p className="lesson-count">{items.lessons}</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-6">
                                    <img src={items.img} alt="" className="course-img" />
                                </div>
                                <div className="col-lg-6 course-details">
                                    <div className="lessons">
                                        <h1 className="lesson-details">{items.details1}</h1>
                                        <h1 className="lesson-details">{items.details2}</h1>
                                        <h1 className="lesson-details">{items.details3}</h1>
                                        <h1 className="lesson-details">{items.details4}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <footer style={{ marginTop: "5%" }}>
                <p style={{ textAlign: "center", opacity: "0.8", marginTop: "3%" }}>{year} <Link to="/" style={{ color: "#000", opacity: "0.8", textDecoration: "underline" }}>Team Defi</Link>. <br />  All rights reserved. Designed by <a href="https://lucent-buttercream-1a7dd9.netlify.app/">Tee2dWhy</a></p>
            </footer>
        </div>
    )
}

export default Courses