import { Link } from "react-router-dom"
import { academyData } from "../components/Data"

const OurCourses = () => {
    const year = new Date().getFullYear()
    return (
        <>
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
                                <a class="nav-link" href="#library"><i class="fa-solid fa-book-open-reader"></i> Library</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='academy-header'>
                <h1 className='wta'>Welcome to the Academy</h1>
            </div>
            <div className='course-card1'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img className='academy1' src="academy1.webp" alt='academy' />
                    </div>
                    <div className='col-lg-6'>
                        <h2 style={{ color: "#fff", marginTop: "10%" }}>Getting to Know <br />Cryptocurrencies: <br /> A Beginners Guide</h2>
                        <p style={{ color: "#fff", fontSize: "16px", marginTop: "5%" }}>This is the first course in the Academy, <br /> designed for complete newcomers to cryptocurrencies</p>
                        <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 8 lessons</div>
                        <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 60 minutes</div>
                        <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                        <Link to="/course-pack"><button className='academy-button'>Start Learning</button></Link>
                    </div>
                </div>
            </div>
            <br /> <br />
            <div className="container" id="library">
                <h1 className="library">Library</h1>
                <h2 className="materials">The storage of all materials inside the Academy</h2>
            </div>
            <div className="container">
                <div className="row">
                    {academyData.map((items) => (
                        <div className="col-lg-3">
                            <div className="card" style={{ width: "", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                <img src={items.img} className="card-img-top academy-img" alt={items.alt} />
                                <div className="card-body">
                                    <h5 className="card-text academy-content">{items.content}</h5>
                                </div>
                            </div>

                        </div>))}
                </div>
            </div>
            <br /> <br />
            <p style={{ textAlign: "center", opacity: "0.6" }}>You’ve viewed 8 of 8 materials</p>
            <Link to="/"><h2 className="tool-visit"><span className="k-b">Exit Academy </span><i class="fa-solid fa-arrow-right"></i></h2></Link>
            <br /> <br />
            <div className='FAQ-bitcoin'>
                <div className='row'>
                    <div className='col-lg-12 FAQ1'>
                        <h3 style={{ color: "#fff" }}>Join our community</h3>
                        <p style={{ opacity: "0.6", color: "#fff", margin: "30px" }}>Join our channel for the latest updates or to get involved with Team De-fi.</p>
                        <button className='join-channel' data-bs-toggle="modal" data-bs-target="#exampleModal"> <i class="fa-brands fa-telegram" style={{ color: "#000" }}></i> join community</button>
                    </div>
                    {/* Modal */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="exampleModalLabel" style={{ fontSize: "14px" }}>Hello Mate <i class="fa-solid fa-hands-clapping"></i></h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body" style={{ fontSize: "14px" }}>
                                    Due to our policies in ensuring that only interested/serious participants are found on our social media platforms, we strongly recommend you get in touch with one of our admins.
                                    <br />
                                    We promise that the process isn't a tedious one. We're happy to have you around!😊💙
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style={{ fontSize: "14px" }}>Close</button>
                                    <a href="https://wa.me/+2349032533461"><button type="button" class="btn btn-primary" style={{ fontSize: "14px" }}>Get in touch</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer style={{ marginTop: "5%" }}>
                <p style={{ textAlign: "center", opacity: "0.8", marginTop: "3%" }}>{year} <Link to="/" style={{ color: "#000", opacity: "0.8", textDecoration: "underline" }}>Team Defi</Link>. <br />  All rights reserved. Designed by <a href="https://lucent-buttercream-1a7dd9.netlify.app/">Tee2dWhy</a></p>
            </footer>
        </>
    )
}

export default OurCourses