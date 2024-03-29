import { Link } from "react-router-dom"

function LearnCrypto() {
    return (
        <>
            <section id="about-crypto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className="header-financials">About Team Defi...</h1>
                            <p style={{ marginTop: "26px", opacity: "0.6" }}>

                                Team Defi is a an educational platform designed to help users easily learn about cryptocurrency and every of its related technologies, with simple, relevant and engaging content.
                                <br /> <br />
                                You can proceed by starting with the basics of cryptocurrecies or choose from our other available courses.
                            </p>
                            <Link to="/crypto-basics"><button className="btn btn-success kickstart" type="button">Kickstart <i style={{ color: "#fff" }} className="fa-brands fa-kickstarter-k"></i></button></Link>
                            <button className="btn btn-outline-light video" type="button"><i className="fa-solid fa-play" style={{ color: "#000" }}></i>  Watch Video</button>
                        </div>
                        <div className="col-lg-6">
                            <img className="about" src="about.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LearnCrypto;