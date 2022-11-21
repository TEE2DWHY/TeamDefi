import React from 'react'
import { Link } from "react-router-dom"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Blockchain = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<Link to="/crypto-basics"><span style={{ opacity: "0.6" }}>Crypto Basics</span></Link>/<span style={{ opacity: "0.6" }}>
                    What is a Blockchain</span></p>
                <br />
                <h1>Crypto Basics: What is a Blockchain</h1>
            </div>
            <img className="crypto-basics" src="Crypto Basics 3x1.webp" alt="" />
            <div className="container">
                <h1>What you'll learn</h1>
            </div>
            <br />
            <div className="container">
                <ul style={{ opacity: "0.6" }}>
                    <li>Why trust is a fundamental issue in human relations</li>
                    <li>The characteristics of a blockchain</li>
                    <li>How a blockchain works: consensus</li>
                </ul>
                <p style={{ opacity: "0.6" }}>
                    A blockchain is a new way to store data. Rather than centralising information, and the control over it, in one place (a database), blockchains store it across a network where no one point has the authority to change records, This is called decentralisation..
                    <br />  <br />
                    Blockchain's record data - in blocks - and securely store this data by chaining those blocks together using cryptography, hence a block-chain.
                    <br />  <br />
                    Satoshi Nakamoto - the alias of the individual or group behind Bitcoin that we met earlier - conceptualised the idea of a blockchain in a 2008 Whitepaper (blueprint). The ability to create a decentralised ledger of transactions was fundamental to the viability of Bitcoin - a new peer-to-peer digital cash - and solving the double-spend problem.
                    <br />  <br />
                    In other words, how to create a purely digital money that cannot be spent twice and doesn’t go through a financial institution; it just flows from person-to-person across a distributed network.
                    <br />  <br />
                    The  blockchain was a central element in Satoshi's solution, in combination with a method for ensuring that only valid transactional data was added to each new block - known as the consensus mechanism.
                </p>
                <div className="container" style={{ background: "#ecf2fe", padding: "60px", borderRadius: "16px", marginBottom: "20px" }}>
                    <div className="row">
                        <div className="col-lg-12">
                            <p style={{ letterSpacing: "0.2em", fontSize: "24px" }}>In reality Satoshi was actually solving a much bigger a problem that has been around for a very long time: trust & agency</p>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <h1>The Problem of trust & agency</h1>
                <br />
                <p style={{ opacity: "0.6" }}>In the very first article of this section on cryptocurrency basics we discovered that money was first used to facilitate trade. Facilitating the exchange of goods between two parties that didn’t know or trust each other.
                    <br /> <br />
                    As civilisation and commerce have expanded it has been accepted that the only solution to this trust issue at scale is to centralise power in the hands of an ultimate arbiter.
                    <br /> <br />
                    Monarchs, generals, governments or multinational institutions have the final say on, and control over, what's fair (Law),who owns what assets, and what those assets are worth (Central Banking).
                    <br /> <br />
                    This arrangement has been more practical than optimal. Time and again, we have seen that trusting a central authority is a less than efficient way to do things - I'm looking at you, 2008 Financial Crisis. This is commonly known as the Principal-Agent Problem.
                    <br /> <br />
                    crypto definition
                    What is the Principal-Agent Problem?
                    Agents (governments, large organisations and their machinery) make decisions that impact other people (Principals - citizens, customers) who's interests they should be serving. Their powerful position and the absence of accountability mean their decisions that serve their own interests and adversely impact those they should be serving.
                    So how can a blockchain solve this age-old problem?
                    <br /> <br />
                    All this talk of governments and authority may be starting to sound a bit far fetched so let's take a few steps back and focus on the central issue of how blockchains achieve trust without authority..
                    <br /> <br />
                    First, we'll break down the unique characteristics of a blockchain - how data is structured - then describe the process for reaching agreement (consensus) on the validity of that data. The consensus mechanism really is the secret sauce of blockchain, as this is what enables the removal of a controlling authority.
                    <br /> <br />
                    Finally, we will assess blockchains' limitations and evaluate if the technology is worth all this hype, which will lead nicely on to the final two articles in this section on crypto adoption and crypto frontiers. </p>
                <br /> <br />
                <h1>The unique characteristics of a blockchain </h1>
                <br />
                <p style={{ opacity: "0.6" }}>Each block in a blockchain (barring the genesis block or first block - more on this later) contains three things. </p>
                <br /><br />
                <ol style={{ opacity: "0.6" }}>
                    <li>Data to be recorded that is represented by what’s called a cryptographic hash.</li>
                    <li>A coded representation (or cryptographic hash) of the previous block's data.</li>
                    <li>A timestamp of when the block was added to the chain. </li>
                </ol>
                <br /> <br />
                <p style={{ opacity: "0.6" }}>Let's break down these three things into what they are. </p>
                <br /> <br />
                <ul className='container'>
                    <li style={{ opacity: "0.6" }}><span style={{ fontWeight: "900" }}>Data</span>- The data recorded on a blockchain can vary depending on what is using the technology. For example, as a currency, Bitcoin uses a blockchain to record it's transaction data - which is why its referred to as a ledger.
                        <br /> <br />
                        Other uses include supply chain data management, healthcare data and identity records; the sky's the limit, so long as the information can be digitised. The point is that blockchains can securely store many different types of data.   </li>
                    <br /> <br />
                    <li style={{ opacity: "0.6" }}><span style={{ fontWeight: "900" }}>Cryptographic Hashes</span> - A cryptographic hash is essentially a coded (jumbled) representation of a piece of information. It uses a mathematical function (a jumbler) to generate this representation (jumble) linking the meaningful information to the hash. Thus, if I were to change the information, the corresponding hash would change, as the two things are inextricably linked by the hash (jumbling) function.
                        Here’s some simplified examples:
                        <br /> <br />
                        Our data: Y=1,
                        <br /> <br />
                        We apply a cryptographic hash function (to jumble it up)
                        <br /> <br />
                        This generates the Hash Y1.
                        <br /> <br />
                        If I were to change the original data to Y=2, and apply the hash function, the hashed output would also change, giving us Y2.
                        <br /> <br />
                        Crucially, it is trivial to confirm that Y2 is the correct output of the Hash, but almost impossible to work out what the Input was.</li>
                    <br /> <br />
                    <div className="" style={{ background: "#ecf2fe", padding: "60px", borderRadius: "16px", marginBottom: "20px" }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <p style={{ letterSpacing: "0.2em", fontSize: "24px" }}>Hashing is how websites can store your passwords, confirm they are valid when you input them, but not be able to know what they are.</p>
                            </div>
                        </div>
                    </div>
                    <br /> <br />
                    <p style={{ opacity: "0.6" }}>Here’s another example
                        <br /> <br />
                        Input data Y=1
                        <br /> <br />
                        Apply hash function
                        Hashed output=dog,
                        <br /> <br />
                        Change the Input data to Y=2
                        <br /> <br />
                        Apply hash function
                        <br /> <br />
                        Hashed output= trees.
                        <br /> <br />
                        There is no discernible relation between dog and trees, they are simply products of the same hash function generated from the data sets Y=1 and Y=2.
                        <br /> <br />
                        In reality, cryptographic hashes are long strings of letters and numbers that don't correspond to any words or meanings apart from representing the data, but are of uniform length. What digital cryptography lends to the solution to our trust problem is a reliable method for securing data that doesn’t require authority or threat of violence.
                        <br /> <br />
                    </p>
                    <li style={{ opacity: "0.6" }}> <span style={{ fontWeight: "900" }}>Timestamps</span>- this one is pretty self-explanatory,. A record of the time that an individual block of data was added to the chain. Though simple, Time stamping is crucial, giving blockchains verifiable and unchangeable historical reference points.</li>
                </ul>
                <br /> <br />
                <h1>How is consensus achieved?</h1>
                <br />
                <p style={{ opacity: "0.6" }}>So we have our cryptographic hash functions that link blocks of data in a chain. We have our proof-of-work mechanism that incentivises new blocks to be added to a chain and helps ensure against bad actors by requiring a computational proof for each block.
                    <br /> <br />
                    The final way that blockchain's ensure security is by being distributed.
                    <br /> <br />
                    Blockchain's run on what's called a peer-to-peer (P2P) network - mentioned in the Satoshi quote above.
                    <br /> <br />
                    crypto definition
                    What is a Peer-to-Peer Network?
                    A network of users that communicate directly with each other and share the same privileges.
                    Rather than being centralised and run by a single entity - such as government - P2P networks are made up of a  distributed network of computers all following the same set of rules (protocol)., In this way, everyone of those computers connected to the blockchain has access to the full record (or chain) but behaves in a predictable way.
                    <br /> <br />
                    Each time a new block is added to the chain, everyone has the chance to verify this block’s data as accurate. Any computer that connects and runs a blockchain is called a node.
                    <br /> <br />
                    For a block to be added to the chain at least 51% (a majority) of all nodes, have to agree that it is accurate. In other words, that the proof of work has been solved and the hash functions all match. This is called achieving consensus - creating a shared agreement of truth in our magical solution to our trust. All without any central authority.
                    <br /> <br />
                    To successfully corrupt a blockchain you need to
                    <br /> <br />
                    <ol>
                        <li>Tamper with all the blocks on the chain.</li>
                        <li>Redo the proof of work for every block.</li>
                        <li>Take control of more than 50% of the P2P network</li>
                    </ol>
                </p>
                <br /> <br />
                <p style={{ opacity: "0.6" }}>Not only is this almost impossible to do, with the difficulty growing as the number of nodes grows, it doesn’t make economic sense. Thus, blockchain's are a secure and decentralised way of storing data, with those qualities improving as the blockchains grow.. </p>
            </div>
            <br /> <br />
            <Link to="/academy"><h2 className="tool-visit"><span className="k-b">Proceed to Academy? </span><i className="fa-solid fa-arrow-right"></i></h2></Link>
            <Footer />
        </>
    )
}

export default Blockchain