import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import "../index.css"
// animation
import Animate from "../libs/Animate";

function BitcoinFeatures() {
    useEffect(()=>{
       Animate();
    },[])
    return (
        <>
            <section id="bitcoinfeatures" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="btc-img" src="Crypto portfolio.gif" alt="" />
                        </div>
                        <div className="col-lg-6">
                            <h2>Our Why Crypto section makes a case for crypto</h2>
                            <br />
                            <h4>Did you know that big institutions are increasingly buying into Bitcoin?</h4>
                            <br />
                            Find out how Bitcoin has performed against Gold, mankind's most popular store of value for the last 6,000 years. See how an Austrian Economist in the 1980s predicted a currency outside of the government's control.
                            <br /> <br />
                            <Link to="/whycrypto"><button className="btn btn-outline-success" type="button" style={{ padding: "10px" }}>Visit Why Crypto <i class="fa-solid fa-right-to-bracket"></i></button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BitcoinFeatures;