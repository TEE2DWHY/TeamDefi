import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

function Learn(props) {
    return (
        <>

            <div className="col-lg-4">
                <div className="card course-card" style={{ width: "", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                    <div className="card-body">
                        <h5 className="card-title"><i class={props.class}></i> {props.courseTitle}</h5>
                        {/* <h6 className="card-subtitle mb-2 text-muted">{props.courseContent}</h6> */}
                        <ul className="courses">
                            <li className="course-list"> <i class={props.listclassicon} style={{ color: "#1bd190" }}></i> {props.list1}</li>
                            <li className="course-list"><i class={props.listclassicon} style={{ color: "#1bd190" }}></i> {props.list2}</li>
                            <li className="course-list"><i class={props.listclassicon} style={{ color: "#1bd190" }}></i> {props.list3}</li>
                        </ul>
                        <Link to={props.link1}><button className="btn btn-success cta" type="button">Get Started</button></Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Learn;