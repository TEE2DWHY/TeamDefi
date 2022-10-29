import React from "react"

function Articles(props) {
    return (
        <>

            <div className="col-lg-4 col-sm-12">
                <div className="card" style={{ width: "", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                    <img src={props.img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-text">{props.content}</h5>
                    </div>
                </div>
            </div>



        </>
    )
}


export default Articles