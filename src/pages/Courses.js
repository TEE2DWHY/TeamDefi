import { Link } from "react-router-dom"
import { coursePage } from "../components/Data"

const Courses = () => {
    const year = new Date().getFullYear
    return (
        <div className="courses-page">
            <nav className="navbar navbar-expand-lg nav">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/course-pack" style={{ color: " #fff" }}><img className="logo" src="blockchain.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/#"><button className="sign-in">Sign in</button></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/academy"><i class="fa-solid fa-house"></i> Campus</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"><i className="fa-solid fa-book-open-reader"></i> About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br /> <br /> <br />
            <h1 className="welcome-header">The Complete Crypto-Stack Course <img className="crypto-stack" src="image_8_f6ed3c2990.webp" alt="crypto-stack" /></h1>
            <section>
                <div className="container course-container">
                    <div className="courses">
                        <hr />
                        <div className="row">
                            <div className="col-lg-10">
                                <h2 className="module-header">Module 1: What is Cryptocurrency?<br /><span className="grey" style={{ opacity: "0.6", fontSize: "22px" }}>Understand the concept of cryptocurrency as a new type of digital money</span></h2>
                            </div>
                            <div className="col-lg-2">
                                <p className="lesson-count">4 lessons</p>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-lg-6" style={{ alignItems: "center", justifyContent: "center", position: "relative", display: "flex" }}>
                                <img src="about module.webp" alt="" className="course-img" />
                                <button className="play-video"><i className="fa-solid fa-play" style={{ color: "#fff" }}></i></button>
                            </div>
                            <div className="col-lg-6 course-details">
                                <div className="lessons">
                                    <h1 className="lesson-details"><p style={{ opacity: "0.6", fontSize: "12px" }}>Lesson 1</p> Bitcoin and the birth of cryptocurrency</h1>

                                    <h1 className="lesson-details"><p style={{ opacity: "0.6", fontSize: "12px" }}>Lesson 2</p>Cryptocurrency as an entirely new type of money</h1>

                                    <h1 className="lesson-details"><p style={{ opacity: "0.6", fontSize: "12px" }}>Lesson 3</p>Why cryptocurrency is real money</h1>

                                    <h1 className="lesson-details"><p style={{ opacity: "0.6", fontSize: "12px" }}>Lesson 4</p>A universal currency available to all</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    {coursePage.map((items) => (
                        <div className="courses1">
                            <hr />
                            <div className="row">
                                <div className="col-lg-10">
                                    <h2 className="module-header">{items.header} <br /><span className="grey" style={{ opacity: "0.6", fontSize: "22px" }}> {items.subheader}</span></h2>
                                </div>
                                <div className="col-lg-2">
                                    <p className="lesson-count">{items.lessons}</p>
                                </div>
                            </div>
                            <br />
                            <div className="row">
                                <div className="col-lg-6" style={{ alignItems: "center", justifyContent: "center", position: "relative", display: "flex" }}>
                                    <img src={items.img} alt="" className="course-img" />
                                    <button className="play-video"><i className="fa-solid fa-play" style={{ color: "#fff" }}></i></button>
                                </div>
                                <div className="col-lg-6 course-details">
                                    <div className="lessons">
                                        <h1 className="lesson-details"><p style={{ opacity: "0.6", fontSize: "12px" }}>{items.unit1}</p> {items.details1}</h1>

                                        <h1 className="lesson-details"><p style={{ opacity: "0.6", fontSize: "12px" }}>{items.unit2}</p> {items.details2}</h1>

                                        <h1 className="lesson-details"><p style={{ opacity: "0.6", fontSize: "12px" }}>{items.unit3}</p> {items.details3}</h1>

                                        <h1 className="lesson-details"><p style={{ opacity: "0.6", fontSize: "12px" }}>{items.unit4}</p>{items.details4}</h1>
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