import { Link } from "react-router-dom"

const OurCourses = () => {
    const year = new Date().getFullYear()
    return (
        <>
            <nav class="navbar navbar-expand-lg nav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href='/#'>Disabled</a>
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

                        <button className='academy-button'>Start Learning</button>
                    </div>
                </div>
            </div>
            <br /> <br />

            <section id="library">
                <div className="container">
                    <h1 className="library">Library</h1>
                    <h2 className="materials">The storage of all materials inside the Academy</h2>
                    <div className='course-card2'>
                        <br /> <br /> <br />
                        <div className='course-card3'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <img className='academy2' src="bitcoin.webp" alt='academy' />
                                </div>
                                <div className='col-lg-6'>
                                    <h2 style={{ color: "#fff", marginTop: "10%" }}>Getting to Know <br />Cryptocurrencies: <br /> A Beginners Guide</h2>
                                    <p style={{ color: "#fff", fontSize: "16px", marginTop: "5%" }}>This is the first course in the Academy, <br /> designed for complete newcomers to cryptocurrencies</p>
                                    <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 8 lessons</div>
                                    <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 60 minutes</div>
                                    <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                                    <button className='academy-button'>Start Learning</button>
                                </div>
                            </div>
                        </div>
                        <br /> <br /> <br />
                    </div>
                </div>

            </section>


            <div style={{ textAlign: "center" }}>
                <Link to="/blog"><button className="btn btn-success all-courses" type="button">See All Courses <i class="fa-solid fa-up-right-and-down-left-from-center" style={{ color: "#fff" }}></i></button></Link>
            </div>
            <br /> <br />
            <div className='FAQ-bitcoin'>
                <div className='row'>
                    <div className='col-lg-12 FAQ1'>
                        <h3 style={{ color: "#fff" }}>Join our community</h3>
                        <p style={{ opacity: "0.6", color: "#fff", margin: "30px" }}>Join our channel for the latest updates or to get involved with Team De-fi.</p>
                        <button className='join-channel'> <i class="fa-brands fa-telegram" style={{ color: "#000" }}></i> join community</button>
                    </div>
                </div>
            </div>

            <footer>
                <p style={{ textAlign: "center", opacity: "0.8", marginTop: "3%" }}>{year} Team Defi. <br />  All rights reserved. Designed by <a href="https://lucent-buttercream-1a7dd9.netlify.app/">Tee2dWhy</a></p>
            </footer>
        </>
    )
}

export default OurCourses