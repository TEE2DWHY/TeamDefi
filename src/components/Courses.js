import React from "react";
import "../index.css"

function Learn(props) {
    return (
        <>

            <div className="col-lg-4">
                <div className="card course-card" style={{ width: "21em" }}>
                    <div class="card-body">
                        <h5 className="card-title">{props.courseTitle}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.courseContent}</h6>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Learn;