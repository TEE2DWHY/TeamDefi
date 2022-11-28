import Footer from "../components/Footer"
import { Link } from "react-router-dom"
const User = () => {
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

            <Footer />
        </>
    )
}

export default User