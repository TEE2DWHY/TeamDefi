import { Link } from "react-router-dom"
import { academyData } from "../components/Data"

const OurCourses = () => {
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
                                <a className="nav-link" href="/#"><button className="sign-in">Sign in</button></a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/academy"><i class="fa-solid fa-house"></i> Campus</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#library"><i className="fa-solid fa-book-open-reader"></i> Library</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <br />
            <div className='academy-header'>
                <h1 className='wta'>Welcome to the Academy</h1>
            </div>
            <div className='course-card1' style={{ cursor: "pointer" }}>
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
            <br />
            <div className="container">
                <h3>Short answers to <span style={{ opacity: "0.6" }}>common criticisms of Bitcoin</span></h3>
                <br />
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ fontSize: "18px", lineHeight: "23px", letterSpacing: "-.6px", color: "#181818", fontWeight: "600" }}>
                                Bitcoin is a bubble
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{ opacity: "0.6" }}>
                                Bitcoin is often compared to the economic bubbles like the Tulip Mania of 1636, but by their nature bubbles are discrete one-off events. You cannot reinflate a burst balloon, so if the 2017 bull-run was a bubble, how come Bitcoin recovered and has now surpassed that high?
                                Cryptocurrencies do experience significant price volatility but should be evaluated over broad time periods. 2014 and 2018 were the only years where Bitcoin's price was lower at the end than it started.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ fontSize: "18px", lineHeight: "23px", letterSpacing: "-.6px", color: "#181818", fontWeight: "600" }}>
                                Bitcoin is a fad, it will never catch on
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{ opacity: "0.6" }}>
                                Kodak thought that about digital cameras. Sony thought that about digital music. The same was said about cars, the radio, the TV, movies with sound and the internet.
                                If money didn’t evolve we’d still be exchanging shells.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ fontSize: "18px", lineHeight: "23px", letterSpacing: "-.6px", color: "#181818", fontWeight: "600" }}>
                                If you shut down the internet Bitcoin stops working
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{ opacity: "0.6" }}>
                                Bitcoin can keep working without broadband and without mains power. A node can be updated via Satellite and be powered by natural resources; in fact a significant proportion of Bitcoin mining is powered by sustainable energy sources.
                                Aside from that, if all power and communications are down, humanity will be in such a state that digital money will cease to be useful. Regardless of that, if/when society gets back on its feet nodes could quickly resume from the last known agreed ledger.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{ fontSize: "18px", lineHeight: "23px", letterSpacing: "-.6px", color: "#181818", fontWeight: "600" }}>
                                Gold is the best store of value
                            </button>
                        </h2>
                        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{ opacity: "0.6" }}>
                                Gold has been a very effective store of value for about 6,000 years, but it isn’t very suitable for the digital age. The most obvious reason being the difficulty in transporting it.


                                Bitcoin doesn’t need to replace Gold, it simply provides an alternative, and to those in the crypto community, it is a better store of value.


                                Stock-to-flow models are one argument why. $1 invested in bitcoin in 2009 is now worth almost $75million*, while the same investment in Gold would be worth $1.73.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{ fontSize: "18px", lineHeight: "23px", letterSpacing: "-.6px", color: "#181818", fontWeight: "600" }}>
                                What happens to my bitcoin when I die?
                            </button>
                        </h2>
                        <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{ opacity: "0.6" }}>
                                Bitcoin - and crypto is general - does come with a different level of responsibility to regular money. This is a feature not a bug. It means that you should make plans for passing it on should you….well...pass on.


                                Without precaution, your bitcoin may simply be lost; estimates vary but around three million bitcoin are considered lost for numerous reasons. This shouldn’t be considered a weakness as much traditional wealth gets lost, forgotten or rendered unusable.


                                Specialist services already exist to ensure your bitcoin are passed on if you die, see Estate and Inheritance planning from services like Casa.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{ fontSize: "18px", lineHeight: "23px", letterSpacing: "-.6px", color: "#181818", fontWeight: "600" }}>
                                Regular money works fine for me, why do I need crypto?
                            </button>
                        </h2>
                        <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div class="accordion-body" style={{ opacity: "0.6" }}>
                                Bitcoin - and crypto is general - does come with a different level of responsibility to regular money. This is a feature not a bug. It means that you should make plans for passing it on should you….well...pass on.


                                Without precaution, your bitcoin may simply be lost; estimates vary but around three million bitcoin are considered lost for numerous reasons. This shouldn’t be considered a weakness as much traditional wealth gets lost, forgotten or rendered unusable.


                                Specialist services already exist to ensure your bitcoin are passed on if you die, see Estate and Inheritance planning from services like Casa.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
            <Link to="/"><h2 className="tool-visit"><span className="k-b">Exit Academy </span><i className="fa-solid fa-arrow-right"></i></h2></Link>
            <br /> <br />
            <div className='FAQ-bitcoin'>
                <div className='row'>
                    <div className='col-lg-12 FAQ1'>
                        <h3 style={{ color: "#fff" }}>Join our community</h3>
                        <p style={{ opacity: "0.6", color: "#fff", margin: "30px" }}>Join our channel for the latest updates or to get involved with Team De-fi.</p>
                        <button className='join-channel' data-bs-toggle="modal" data-bs-target="#exampleModal"> <i className="fa-brands fa-telegram" style={{ color: "#000" }}></i> join community</button>
                    </div>
                    {/* Modal */}
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="exampleModalLabel" style={{ fontSize: "14px" }}>Hello Mate <i className="fa-solid fa-hands-clapping"></i></h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body" style={{ fontSize: "14px" }}>
                                    Due to our policies in ensuring that only interested/serious participants are found on our social media platforms, we strongly recommend you get in touch with one of our admins.
                                    <br />
                                    We promise that the process isn't a tedious one. We're happy to have you around!😊💙
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" style={{ fontSize: "14px" }}>Close</button>
                                    <a href="https://wa.me/+2349032533461"><button type="button" class="btn btn-primary" style={{ fontSize: "14px" }}>Get in touch</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer style={{ marginTop: "5%", marginBottom: "0" }}>
                <p style={{ textAlign: "center", opacity: "0.8", marginTop: "3%" }}>{year} <Link to="/" style={{ color: "#000", opacity: "0.8", textDecoration: "underline" }}>Team Defi</Link>. <br />  All rights reserved. Designed by <a href="https://lucent-buttercream-1a7dd9.netlify.app/">Tee2dWhy</a></p>
            </footer>
        </>
    )
}

export default OurCourses