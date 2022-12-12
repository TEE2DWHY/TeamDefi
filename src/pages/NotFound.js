import { Link } from "react-router-dom"
const NotFound = () => {
    return (
        <>
            <div className="container" style={{ textAlign: "center" }}>
                <img className="img-fluid" src="404.gif" alt="" />
                <h3>Oh no, something went wrong!</h3>
                <p style={{ opacity: "0.6" }}>This route doesn't exist.😐</p>
                <Link to="/"><button className="btn btn-primary" style={{ padding: "10px 20px" }}>Take me to HomePage</button></Link>
                <br /> <br />
            </div>
        </>
    )
}

export default NotFound