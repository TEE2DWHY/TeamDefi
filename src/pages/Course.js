import { Link } from "react-router-dom"

const Courses = () => {
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
                                <Link className="nav-link active" aria-current="page" to="/academy"><i class="fa-solid fa-house"></i> Courses</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#library"><i className="fa-solid fa-book-open-reader"></i> Library</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br /> <br />
            <div className="container courses-list">
                <br />
                <h1 style={{ fontSize: "40px" }}>Courses</h1>
                <p style={{ opacity: "0.6", fontSize: "14px" }}>Here you will find every course presented on the academy</p>
                <div className='course-card2' style={{ cursor: "pointer" }}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img className='academy1' src="academy1.webp" alt='academy' />
                        </div>
                        <div className='col-lg-6'>
                            <h3 style={{ color: "#fff", marginTop: "5%", fontSize: "20px", }}>The Complete <br />Crypto Stack Course: <br /> </h3>
                            <p style={{ color: "#fff", fontSize: "14px", padding: "0 5px 0 0" }}>In this course we cover a variety of topics from <br />bitcoin as an asset, de-fi, fundamentals and profiting with crypto etc.</p>
                            <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 10 lessons</div>
                            <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 8hrs:30Min</div>
                            <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                            <Link to="/course"><button className='academy-button'>Start Learning</button></Link>
                        </div>
                    </div>
                </div>
                <br />
                <div className='course-card2' style={{ cursor: "pointer" }}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img className='academy1' src="academy1.webp" alt='academy' />
                        </div>
                        <div className='col-lg-6'>
                            <h3 style={{ color: "#fff", marginTop: "5%", fontSize: "20px", }}>The Complete <br />Crypto Stack Course: <br /> </h3>
                            <p style={{ color: "#fff", fontSize: "14px", padding: "0 5px 0 0" }}>In this course we cover a variety of topics from <br />bitcoin as an asset, de-fi, fundamentals and profiting with crypto etc.</p>
                            <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 10 lessons</div>
                            <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 8hrs:30Min</div>
                            <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                            <Link to="/course"><button className='academy-button'>Start Learning</button></Link>
                        </div>
                    </div>
                </div>
                <br />
                <div className='course-card2' style={{ cursor: "pointer" }}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img className='academy1' src="academy1.webp" alt='academy' />
                        </div>
                        <div className='col-lg-6'>
                            <h3 style={{ color: "#fff", marginTop: "5%", fontSize: "20px", }}>The Complete <br />Crypto Stack Course: <br /> </h3>
                            <p style={{ color: "#fff", fontSize: "14px", padding: "0 5px 0 0" }}>In this course we cover a variety of topics from <br />bitcoin as an asset, de-fi, fundamentals and profiting with crypto etc.</p>
                            <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 10 lessons</div>
                            <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 8hrs:30Min</div>
                            <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                            <Link to="/course"><button className='academy-button'>Start Learning</button></Link>
                        </div>
                    </div>
                </div>
                <br />
                <div className='course-card2' style={{ cursor: "pointer" }}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img className='academy1' src="academy1.webp" alt='academy' />
                        </div>
                        <div className='col-lg-6'>
                            <h3 style={{ color: "#fff", marginTop: "5%", fontSize: "20px", }}>The Complete <br />Crypto Stack Course: <br /> </h3>
                            <p style={{ color: "#fff", fontSize: "14px", padding: "0 5px 0 0" }}>In this course we cover a variety of topics from <br />bitcoin as an asset, de-fi, fundamentals and profiting with crypto etc.</p>
                            <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 10 lessons</div>
                            <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 8hrs:30Min</div>
                            <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                            <Link to="/course"><button className='academy-button'>Start Learning</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Courses