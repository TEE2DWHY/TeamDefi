import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom"
function About() {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}> About</span></p>
            </div>
            <br />
            <div className="about-us">
                <h1 style={{ fontWeight: "900" }}>About Team Defi</h1>
                <br />
                <p>Team Defi is a free learning platform introducing users to the world of cryptocurrency.
                    <br />
                    One of the biggest obstacles to understanding crypto is that it is both complex and unfamiliar. <br />So how does our platform address this?
                </p>
                <img className="top-secret" src="Top secret.gif" alt="about-us" />
            </div>

            <div className="container details">
                <h2 style={{ fontWeight: "900" }}>
                    Making it relevant
                </h2>
                <p style={{ opacity: "0.6" }}>We’ve analysed search intent, and asked prospective users what they want to learn about cryptocurrency, as well as what they find confusing.
                    <br />
                    This ensures we are offering the most relevant content with the right learning objectives.
                    <br />
                    We have produced a separate article all about the process we took to understand what interest newcomers most.
                    <br />
                    This not only helped us make the site relevant, the insight we gained into general perceptions (and misconceptions) of cryptocurrency, gave clues to state of crypto adoption.</p>
                <br />
                <h2 style={{ fontWeight: "900" }}>Making it engaging</h2>
                <p style={{ opacity: "0.6" }}>We understand that knowing something doesn’t necessarily mean you are qualified to teach it. Following best practice within online learning, we’ve structured the site, and content, to be as engaging as possible. We try to tell a story and not deliver a lecture.
                    <br />
                    We also hold up a mirror to some of the biggest questions around crypto in our blog, such as the question of environmental impact of Bitcoin.</p>
                <br />
                <h2 style={{ fontWeight: "900" }}>Making a case for crypto</h2>
                <p style={{ opacity: "0.6" }}>We believe in the transformational power of crypto, but appreciate that not everyone shares our enthusiasm. For the unconvinced, we’ve gathered together what we feel is a compelling, but balanced, case in our Why Crypto section.</p>
                <br />
                <h2 style={{ fontWeight: "900" }}>Why are we doing this?</h2>
                <p style={{ opacity: "0.6" }}>Our vision is to build a free learning community that inspires people to adopt cryptocurrency. <br /> As such, all content on the site is free. You can create an account, which will soon give you access to free courses on the subjects currently covered within the Knowledge Base.</p>
            </div>
            <br /> <br />
            <div className="whycrypto-container">
                <div className="row">
                    <div className="col-lg-6">
                        <img className="LearnBanner" src="LearnBanner.webp" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <br /> <br />
                        <h3>Learn Crypto Basics</h3>
                        <p>Start from scratch or brush up on your knowledge withStart from scratch or brush up on your knowledge with</p>
                        <Link to="/academy"><button className="btn btn-success learn" type="submit">Start Learning</button></Link>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default About