import React from "react";


function Features(props) {
    return (
        <>

            <div className="col-lg-4">
                <div className="card course-card" style={{ width: "19em" }}>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.logo}</h6>
                        <p className="card-text">{props.content}</p>
                        <a href="/#" className="card-link">{props.link1}</a>
                        <a href="/#" className="card-link">{props.link2}</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Features;