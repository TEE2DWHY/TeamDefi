import React from "react";
import "../index.css"

function BitcoinFeatures() {
    return (
        <>
            <section id="bitcoinfeatures">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="btc-img" src="btc_treasury2022.webp" />
                        </div>
                        <div className="col-lg-6">
                            <h2>Our Why Crypto section makes a case for crypto</h2>
                            <br />
                            <h4>Did you know that big institutions are increasingly buying into Bitcoin?</h4>
                            <br />
                            Find out how Bitcoin has performed against Gold, mankind's most popular store of value for the last 6,000 years. See how an Austrian Economist in the 1980s predicted a currency outside of the government's control.
                            <br /> <br />
                            <button className="btn btn-outline-success" type="submit">Visit Why Crypto <i class="fa-solid fa-right-to-bracket"></i></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export default BitcoinFeatures;