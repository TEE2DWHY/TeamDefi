import { Link } from "react-router-dom"

function Articles(props) {
    return (
        <>
            <div className="col-lg-4 col-sm-12">
                <Link to={props.link}>
                    <div className="card" style={{ width: "", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                        <img src={props.img} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-text" style={{ color: "#000", opacity: "0.6" }}>{props.content}</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}


export default Articles