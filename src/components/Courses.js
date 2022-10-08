import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

function Learn(props) {
    return (
        <>

            <div className="col-lg-4">
                <div className="card course-card" style={{ width: "19em" }}>
                    <div className="card-body">
                        <h5 className="card-title"><i class="fa-solid fa-gears"></i> {props.courseTitle}</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">{props.courseContent}</h6> */}
                        <p className="card-text">{props.courseContent}</p>
                        <Link to={props.link1}><button className="btn btn-success cta" type="button">Get Started</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Learn;