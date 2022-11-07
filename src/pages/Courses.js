import { Link } from "react-router-dom"

const Courses = () => {
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

            <footer style={{ marginTop: "5%" }}>
                <p style={{ textAlign: "center", opacity: "0.8", marginTop: "3%" }}>{year} <Link to="/" style={{ color: "#000", opacity: "0.8", textDecoration: "underline" }}>Team Defi</Link>. <br />  All rights reserved. Designed by <a href="https://lucent-buttercream-1a7dd9.netlify.app/">Tee2dWhy</a></p>
            </footer>
        </>
    )
}

export default Courses