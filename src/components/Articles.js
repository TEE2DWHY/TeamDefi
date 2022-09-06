import React from "react"

function Articles(props) {
    return (
        <>

            <div className="col-lg-4">
                <div className="card" style={{ width: "18rem" }}>
                    <img src={props.img} class="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text">{props.content}</h5>
                    </div>
                </div>
            </div>


        </>
    )
}


export default Articles