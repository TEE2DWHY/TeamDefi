import React from 'react'

const OurCourses = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg nav">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Features</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href='/#'>Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='academy-header'>
                <h1 className='wta'>Welcome to the Academy</h1>
            </div>
            <div className='course-card1'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <img className='academy1' src="academy1.webp" alt='academy' />
                    </div>
                    <div className='col-lg-6'>
                        <h2 style={{ color: "#fff", marginTop: "10%" }}>Getting to Know <br />Cryptocurrencies: <br /> A Beginners Guide</h2>
                        <p style={{ color: "#fff", fontSize: "16px", marginTop: "5%" }}>This is the first course in the Academy, <br /> designed for complete newcomers to cryptocurrencies</p>
                        <div className='academy-details'> <i class="fa-solid fa-person-chalkboard" style={{ color: "#fff" }}></i> 8 lessons</div>
                        <div className='academy-details'> <i class="fa-solid fa-clock" style={{ color: "#fff" }}></i> 60 minutes</div>
                        <div className='academy-details'> <i class="fa-solid fa-chart-simple" style={{ color: "#fff" }}></i> Basics</div>

                        <button className='academy-button'>Start Learning</button>
                    </div>
                </div>
            </div>
            <br /> <br />

        </>
    )
}

export default OurCourses