import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const HowBitcoinWorks = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<Link to="/crypto-basics"><span style={{ opacity: "0.6" }}>Crypto Basics</span></Link>/<span style={{ opacity: "0.6" }}>How Bitcoin Works</span></p>
                <br />
                <h1>Crypto Basics: How Bitcoin Works</h1>
            </div>
            <img className="crypto-basics" src="Crypto Basics 3x1.webp" alt="" />
            <div className="container">
                <h1>What you'll learn</h1>
            </div>
            <br />
            <div className="container">
                <ul style={{ opacity: "0.6" }}>
                    <li>How Bitcoin achieves sound money</li>
                    <li>An introduction to Nodes, Blockchains & Mining</li>
                    <li>Bitcoin's economics - money supply & inflation</li>
                </ul>
                <br /> <br />
                <p style={{ opacity: "0.6" }}>Bitcoin was created by an individual (or group of individuals) who went by the alias of Satoshi Nakamoto. To this day, nobody knows (at least publicly) who Satoshi Nakamoto is - and that’s arguably their biggest legacy to the community.
                    <br />
                    By vanishing into the ether soon after Bitcoin was robust enough, Nakamoto has done away with the first central point of failure.
                    <br />
                    If gold had been “invented” by someone, that person would arguably hold great influence over their invention. If, moreover, that someone had kept a key that allowed them to control the gold economy, they would wield an ungodly amount of power.
                    <br />
                    They would also be vulnerable to pleas, bribes, legal action, punches in the face, and otherwise strong pressure to tweak their invention to benefit one party or another - perhaps a government, or the mafia. Either way, the entire system would be vulnerable at a central point. That’s not Bitcoin’s case.
                    <br />
                    Also, there’s also no cult of personality around its creator, no one to dictate the rules unchecked.Bitcoin belongs to the world, and no single person or country has jurisdiction over it.
                </p>
                <br /> <br />
                <h1>Cryptography & Economics</h1>
                <br />
                <p style={{ opacity: "0.6" }}>
                    Bitcoin combines computing and cryptography with a clever system of economic competition and rewards that ensure it’s in everyone’s best interest to respect the rules without the need for a central authority. Instead, the network manages itself, and no single party controls the system.
                    <br />
                    Bitcoin rewards honest “work” that supports the network (validating transactions, as we’ll see below), while making sure that cheating is prohibitively expensive. This work is also the manner by which new bitcoin are programmatically introduced into the system, making sure the supply can grow in a predictable way - thereby achieving the key quality of scarcity.
                    <br />
                    These effects grow exponentially as the network grows. In fact, much of the power of Bitcoin comes from its diverse, robust growing network.
                    <br />
                    Bitcoin participants may have sometimes conflicting interests, but they all share the same ultimate goal - that Bitcoin succeeds. And the more parties are invested in Bitcoin, the more everyone has to lose if it “breaks” - this creates a symbiotic relationship, one where all parties benefit.
                    <br />
                    So who controls the Bitcoin ledger, and how does it achieve sound money? To answer these questions, it’s necessary to understand how the system is designed.
                </p>
                <br /> <br />
                <h1>Bitcoin's design</h1>
                <br />
                <p style={{ opacity: "0.6" }}>
                    Bitcoin is many things, but we’ll focus on the design elements here.
                    <br />
                    Firstly, Bitcoin is a peer-to-peer network of computers all following a set of rules and instructions (the Bitcoin protocol) for validating transactions and issuing new coins. Any computer running any software that respects these rules can participate in the Bitcoin network. These are called Bitcoin Nodes.
                    <br />
                    Think of this protocol as the banking laws of a country. Any bank can operate, so long as they obey the laws. The difference is that the Bitcoin protocol is enforced by code, and not by courts - meaning it’s much more reliable.
                    <br />
                    Second, Bitcoin has a ledger of all the transactions, called the Blockchain. Transactions are recorded in blocks, which are created at set intervals and connect to the previous block to create a chain.
                    <br />
                    Lastly, there is the mechanism for adding blocks to the Blockchain and reaching agreement (consensus mechanism) that the transactions are valid, and the whole chain accurate. This is called Mining.
                    <br />
                    Participants don’t need to trust each other; they need only trust the rules and the code.
                    <br />
                    So how does this work in practice?
                    <br /> <br />
                </p>
                <h1>The blockchain: trust but verify</h1>
                <br />
                <p style={{ opacity: "0.6" }}>
                    The most revolutionary feature of Bitcoin is its ledger - also known as the blockchain - and in the way transactions are validated.
                    <br />
                    We must trust banks to keep the integrity of their ledgers, but we can’t verify it for ourselves. If one bank sends one euro to another bank, we must trust them to remove that euro from their accounts. That’s because only they can see and update their ledgers. We can’t see if they make a mistake, or if they make poor choices when extending credit. As the 2008 financial crisis has taught us, this isn’t always a good idea.
                    <br />
                    Banks are incentivised to uphold the law, but history shows that they can go around or even change regulations to their benefit.
                    <br />
                    In 2008, banks and other lenders exploited the rules to recycle an ungodly amount of debt into “subprime” financial products that were so complex that virtually no one could understand them.
                    <br />
                    This was made worse by the fact that few people even had access to the books - and the few who did had a hard time understanding the complexity. When these rotten products defaulted, the world economy broke. The result? Trillions in bailout money for the same banks that caused it.
                    <br />
                    Bitcoin turns this logic upside down. Instead of a single ledger kept locked away by a central authority, Bitcoin ensures anyone can have a copy of the ledger containing all transactions that ever happened. Everyone can mathematically verify that every transaction in it is legitimate. Transactions that don’t respect the rules are automatically rejected by the software.
                    <br />
                    Bitcoin transactions are batched approximately every 10 minutes into a block, which is then added to a long chain of blocks containing all previous transactions (hence the term blockchain). This process of adding the new blocks into this shared ledger is called mining.
                    <br />
                    The problem with a shared ledger is, how do we all agree that the current version is the most up to date one? How can thousands of different computers all over the world reach consensus without someone in charge?
                </p>
                <br /> <br />
                <h1>How bitcoin mining works as an incentive</h1>
                <br />
                <p style={{ opacity: "0.6" }}>The solution introduced by Bitcoin to this age-old computing problem involves maths, competition, and economic rewards, and goes by the name of mining.
                    <br />
                    Mining involves a competition for solving a complex mathematical problem, which takes on average 10 minutes and is adjusted every two weeks to account for current computing power. The winner gets to add the current block of transactions and receives a reward for their efforts (as we’ll explain below).
                    <br />
                    The catch is, everyone can easily verify that the solution is right. If a miner cheats, all other participants will simply discard the block. A cheater would lose not just the reward, but also all the money spent in energy to mine that block. This combined loss far outweighs any expected profits,
                    <br />
                    Although in theory anyone can participate in mining, the mathematical problem is so hard, and the competition so fierce that you’d need hundreds of specialised computers to even stand a chance today - which is quite an investment.
                    <br />
                    Despite the cost, mining is a very profitable competitive industry. This competition has so far ensured that no single party controls the majority of the mining power.
                    <br />
                    Moreover, this is a positive feedback cycle. The more value Bitcoin gains, the more miners in the network, the harder it becomes to cheat, and the more solid Bitcoin becomes.
                </p>
                <br /> <br />
                <h1>Money supply and inflation</h1>
                <br />
                <p style={{ opacity: "0.6" }}>
                    Mining is also the way by which new bitcoin are released into the system.
                    <br />
                    Whoever wins the competition for solving the cryptographic problem gets to add the new block of transactions to the blockchain - plus a reward comprising transaction fees and new bitcoin.
                    <br />
                    Transaction fees are the sum of fees paid for all transactions included in that block, which vary according to demand. These are bitcoin already in circulation.
                    <br />
                    On the other hand, block rewards also include entirely new coins. In fact, every bitcoin in existence has been introduced into the network via mining. The rate of new bitcoin has started at 50 per block in 2009, but this number is programmatically halved every four years as determined by the protocol.
                    <br />
                    The current reward is set at 6.25 bitcoin per block until 2024. This process will continue until all 21 million BTC are out there, at which point miners will only receive transaction fees.
                    <br />
                    There’s no way that anyone can arbitrarily create new bitcoin or mess with the issuance rate unless everyone (or at least an overwhelming majority) of the network agrees to change the protocol. And finding that agreement would be very, very hard.
                    <br />
                    This programmed scarcity (a combination of fixed supply with predictable issuance rate) completely removes any uncertainty around inflation.
                </p>
            </div>
            <br /> <br />
            <Link to="/academy"><h2 className="tool-visit"><span className="k-b">Proceed to Academy? </span><i class="fa-solid fa-arrow-right"></i></h2></Link>
            <Footer />
        </>
    )
}

export default HowBitcoinWorks