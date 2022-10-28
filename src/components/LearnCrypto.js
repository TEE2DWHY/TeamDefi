import { Link } from "react-router-dom"

function LearnCrypto() {
    return (
        <>
            <section id="about-crypto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 style={{ color: "#000" }} className="learncrypto">About Team Defi...</h1>
                            <p style={{ marginTop: "26px", opacity: "0.6" }}>

                                Team Defi is a an educational platform designed to help users easily learn about cryptocurrency, with simple, relevant and engaging content.
                                <br /> <br />
                                You can proceed by starting with the basics of cryptocurrecies or choose from our other available courses.
                            </p>
                            <Link to="/academy"><button className="btn btn-success kickstart" type="button">Kickstart <i style={{ color: "#fff" }} class="fa-brands fa-kickstarter-k"></i></button></Link>
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