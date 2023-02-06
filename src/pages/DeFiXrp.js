import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"


const DeFiXrp = () => {
  return (
   <>
        <Navbar/>
            <div>
            <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/blog"><span className="redierction">Blog</span></Link> /<span style={{ opacity: "0.6" }}> Defi comes to XRP & Dogecoin</span></p>
            </div>
            <br /> 
            <div className="container">
                <h1 style={{fontWeigh:"900"}}>Defi comes to XRP & Dogecoin</h1>
                <br/>
            <p style={{ fontSize: "25px" }}>*Key Discussions</p>
                <ul>
                    <li><i class="fa-solid fa-spinner" style={{ color: "#1bd190" }}></i> The importance of Dogecoin’s design</li>
                    <li><i class="fa-solid fa-spinner" style={{ color: "#1bd190" }}></i> What Turing Complete Means</li>
                </ul>
                <img className="img-fluid defi" src="Defi-comes-to- XRP-&-Dogecoin.webp" alt="defi-come-to-xrp.png" />
            <br/>
            <p style={{ opacity: "0.6", padding:"10px", fontSize:"18px" }}>Dogecoin has been one of the biggest crypto stories of the last 12 months. The memecoin has been pumped by the world’s richest man and rose 1000% in value, but because of its design its holders can't easily access all the opportunities within the hugely popular world of DEFI.
            <br/>
             That is changing with the launch of the Flare Network offering passive income streams for holders of Dogecoin and several other popular coins built in a similar way.</p>
            <br/>
            <h2 style={{fontWeight:"900"}}>
            The importance of Dogecoin’s design
            </h2>
            <p style={{ opacity: "0.6", padding:"10px"}}>
            Dogecoin was essentially a fork of Bitcoin, with key modifications around the supply of coins and speed at which new blocks are created. Bitcoin is deflationary, with a hard cap of 21 million - ensuring scarcity - and a schedule that rewards miners with 6.25 BTC for producing a new block roughly every 10 minutes until that cap is reached. 
            <br/>
            By contrast, Dogecoin is inflationary which means an unlimited supply. 10,000 more Dogecoin are issued every minute of every day, equating to nearly 15 million doge per day or over 5 billion doge per year.
            <br/>
            By copying Bitcoin’s design Dogecoin is one of a handful of the most popular cryptocurrencies that are what are known as ‘Turing Incomplete’ - the other main ones being Bitcoin (BTC), Ripple (XRP), Litecoin (LTC) & Stellar (XML). Together they represent a huge proportion of the crypto holdings.
            <br/>
            But what does that mean in simple terms for the average Dogecoin holder. A computer system is described as Turing Complete if it can solve any problem that can be defined in code. The term takes its name from Alan Turing, one of the world’s most famous mathematicians, especially known for his work in breaking the code used by the Nazis in World War II. [Watch the movie ‘The Imitation Game’ if that sounds interesting.]
            </p>
            <br/>
            <h2 style={{fontWeight:"900"}}>
            What Turing Complete Means
            </h2>
            <p style={{opacity:"0.6"}}>
                Being Turing Complete is the principle design feature of Ethereum. The Ethereum Virtual Machine (EVM) is described as the world’s computer because it can compute pretty much anything that can be described in a Smart Contract - a set of rules and conditions.
                <br/>
                The most common use of smart contracts is DEFI - Decentralised Finance - enabling passive interest (APY), lending, staking and rewards for providing trading liquidity for Decentralised Exchanges (DEX). 
                <br/>
                Smart Contracts run on top of the Ethereum Network - and other layer 1 platforms with similar Smart Contract capability - with users paying fees measured in Gas to execute the particular DEFI function. 
                <br/>
                Dogecoin isn’t Turing Complete - nor is XRP, BTC, BCH, LTC or XML -  which means they don’t support Smart Contracts and can’t natively be part of that DEFI ecosystem. The word natively is key here, because as ever with crypto, if there is a demand innovation finds a way.
                <br/>
                The solution is described as wrapping coins to enable them to work within a different ecosystem. This works by essentially creating a synthetic version of a coin, pegged 1:1 to the native coin. 
                <br/>
                So there is wrapped BTC, wBTC which follows the Ethereum standard (ERC20) which means that Bitcoin holders can generate returns from their holdings within Defi on Ethereum, or any other EVM supporting system but only after going through a convoluted conversion process, paying fees and trusting the issuers behind it.
            </p>
            </div> 

            </div>
        <Footer/>
   </>

  )
}

export default DeFiXrp