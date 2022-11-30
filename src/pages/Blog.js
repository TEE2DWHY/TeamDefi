import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { blogData } from "../components/Data";

const Blog = (props) => {


    return (
        <>
            <Navbar />
            <section id="teamdefi-blog">
                <br /> <br />
                <div className="container" style={{ textAlign: "left" }}>
                    <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<span style={{ opacity: "0.6" }}> Blog</span></p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 style={{ fontWeight: "900" }}>Team Defi Articles</h1>
                            <Link to="/legacy-of-satoshi"> <div className="card" style={{ width: "100%", marginTop: "10%", borderRadius: "12px", cursor: "pointer" }}>
                                <img src="satoshi.webp" className="card-img-top" alt="satoshi" />
                                <br />
                                <div className="card-body">
                                    <h5 className="card-text" style={{ fontWeight: "900" }}>The Legacy of Satoshi Nakamoto</h5>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog-card" style={{ cursor: "pointer" }}>
                                <p style={{ background: "#FFE066", width: "60%", borderRadius: "6px", padding: "5px" }}>#Grow your stack</p>
                                <p>Defi comes to XRP & Dogecoin</p>
                            </div>
                            <div className="blog-card" style={{ cursor: "pointer" }}>
                                <p style={{ background: "#F2C4AD", width: "60%", borderRadius: "6px", padding: "5px" }}>#Myth Busting</p>
                                <p>How does an NFT have value?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row articles">
                        {blogData.map((items) => (
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="card" style={{ width: "", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>

                                    <img src={items.img} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-text">{items.content}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <nav className="pagination-nav">
                    <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="/#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a class="page-link" href="/#">1</a></li>
                        <li className="page-item"><a class="page-link" href="/#">2</a></li>
                        <li className="page-item"><a class="page-link" href="/#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="/#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                </nav>


                <div className="whycrypto-container" style={{ marginTop: "5%" }}>
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
            </section>
            <Footer />
        </>

    )
}

export default Blog