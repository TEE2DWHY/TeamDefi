import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import blogData from "../components/Data";

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
                            <div className="card" style={{ width: "100%", marginTop: "10%", borderRadius: "12px", cursor: "pointer" }}>
                                <img src="satoshi.webp" className="card-img-top" alt="satoshi" />
                                <br />
                                <div className="card-body">
                                    <h5 className="card-text" style={{ fontWeight: "900" }}>The Legacy of Satoshi Nakamoto</h5>
                                </div>
                            </div>
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

                            <div className="col-lg-4">
                                <div className="card" style={{ width: "18rem", marginTop: "10%", borderRadius: "12px", cursor: "pointer" }}>

                                    <img src={items.img} className="card-img-top" alt="" />
                                    <div className="card-body">
                                        <h5 className="card-text">{items.content}</h5>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </section>
            <Footer />
        </>

    )
}

export default Blog