import { Link } from "react-router-dom"

const Courses = () => {
    const year = new Date().getFullYear()
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
                            <img className='academy1' src="academy-img2.webp" alt='academy' />
                        </div>
                        <div className='col-lg-6'>
                            <h3 style={{ color: "#fff", marginTop: "5%", fontSize: "20px", }}>The Complete <br />Crypto Stack Course: <br /> </h3>
                            <p style={{ color: "#fff", fontSize: "14px", padding: "0 5px 0 0" }}>In this course we cover a variety of topics from <br />bitcoin as an asset, de-fi, fundamentals and profiting with crypto etc.</p>
                            <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 10 lessons</div>
                            <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 8hrs:30Min</div>
                            <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                            <Link to="/course-pack"><button className='academy-button'>Start Learning</button></Link>
                        </div>
                    </div>
                </div>
                <br />
                <div className='course-card2' style={{ cursor: "pointer" }}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img className='academy1' src="Server-amico.svg" alt='academy' />
                        </div>
                        <div className='col-lg-6'>
                            <h3 style={{ color: "#fff", marginTop: "5%", fontSize: "20px", }}>Front-End Development <br /> </h3>
                            <p style={{ color: "#fff", fontSize: "14px", padding: "0 5px 0 0" }}>Build optimum client side applications for users. <br />Become an expert in the following: <br />HTML, CSS (and its frameworks- Tailwind CSS), JavaScript & ReactJs.</p>
                            <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 25 lessons</div>
                            <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 12hrs:30Min</div>
                            <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                            <Link to="/course"><button className='academy-button'>Start Learning</button></Link>
                        </div>
                    </div>
                </div>
                <br />
                <div className='course-card2' style={{ cursor: "pointer" }}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img className='academy1' src="Pair programming-bro.svg" alt='academy' />
                        </div>
                        <div className='col-lg-6'>
                            <h3 style={{ color: "#fff", marginTop: "5%", fontSize: "20px", }}>Backend Development</h3>
                            <p style={{ color: "#fff", fontSize: "14px", padding: "0 5px 0 0" }}>Learn server side development using NodeJs, Databases (Sequel & Non-Sequel databases), API's and lots more..</p>
                            <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 10 lessons</div>
                            <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 10hrs:33Min</div>
                            <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                            <Link to="/course"><button className='academy-button'>Start Learning</button></Link>
                        </div>
                    </div>
                </div>
                <br />
                <div className='course-card2' style={{ cursor: "pointer" }}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img className='academy1' src="Bitcoin P2P-bro.svg" alt='academy' />
                        </div>
                        <div className='col-lg-6'>
                            <h3 style={{ color: "#fff", marginTop: "5%", fontSize: "20px", }}>Web3 Development</h3>
                            <p style={{ color: "#fff", fontSize: "14px", padding: "0 5px 0 0" }}>Create Blockchain based solutions using solidity, web3 frameworks (such as moralis and lots more), hardhat, truffle, creation of dapps and lots more.</p>
                            <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 16 lessons</div>
                            <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 15hrs:25Min</div>
                            <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                            <Link to="/course"><button className='academy-button'>Start Learning</button></Link>
                        </div>
                    </div>
                </div>
                <br/>
                <div className='course-card2' style={{ cursor: "pointer" }}>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <img className='academy1' src="Business crisis-rafiki.svg" alt='academy' />
                        </div>
                        <div className='col-lg-6'>
                            <h3 style={{ color: "#fff", marginTop: "5%", fontSize: "20px", }}>Insight into Financial Markets</h3>
                            <p style={{ color: "#fff", fontSize: "14px", padding: "0 5px 0 0" }}>Without helpful resources and basic skill set, trading can become a very hard task. Most people approach the market as a get quick-rich-scheme, hence the reason while many struggle.</p>
                            <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> On-time lessons</div>
                            <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i>Mentorship</div>
                            <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                            <Link to="/financial-markets"><button className='academy-button'>Start Learning</button></Link>
                        </div>
                    </div>
                </div>

                <br />
                {/* <p style={{ textAlign: "center", color: "#2769ff", fontStyle: "italic" }}>Want to become an experts in the financial markets??🎈...See our <Link to="/financial-markets" style={{ color: "#2769ff", textDecoration: "underline" }}>Financial market page</Link></p> */}

                <footer style={{ marginTop: "5%", marginBottom: "0" }}>
                    <p style={{ textAlign: "center", opacity: "0.8", marginTop: "3%" }}>{year} <Link to="/" style={{ color: "#000", opacity: "0.8", textDecoration: "underline" }}>Team Defi</Link>. <br />  All rights reserved. Designed by <a href="https://lucent-buttercream-1a7dd9.netlify.app/">Tee2dWhy</a></p>
                </footer>
            </div>

        </>
    )
}

export default Courses