import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"


const BitcoinLimitation = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<Link to="/crypto-basics"><span style={{ opacity: "0.6" }}>Crypto Basics</span></Link>/<span style={{ opacity: "0.6" }}>Bitcoins Limitation</span></p>
                <br />
                <h1>Crypto Basics: Bitcoin's limitations</h1>
            </div>
            <img className="crypto-basics" src="Crypto Basics 3x1.webp" alt="" />
            <div className="container">
                <h1>What you'll learn</h1>
            </div>
            <br />
            <div className="container" style={{ opacity: "0.6" }}>
                <ul>
                    <li>An introduction to the Blockchain Trilemma</li>
                    <li>Why Bitcoin struggles as a medium of exchange</li>
                    <li>How forks, layer two applications & altcoins attempt to solve the trilemma</li>
                    <li>The future of Bitcoin</li>
                </ul>
                <p>If you’ve worked your way through the two previous articles in this section you should have learned the following key things. </p>
                <ul>
                    <li>Cryptocurrency fulfills all the characteristics of sound money.</li>
                    <li>Bitcoin was the first, and most influential, cryptocurrency.</li>
                    <li>Its creator was Satoshi Nakamoto - publishing its blueprint in 2008.</li>
                    <li>How Bitcoin works to achieve a digitally scarce form of money.</li>
                </ul>
                <br />
                The achievements of Bitcoin’s creator will likely be considered as important as the invention of the internet or personal computer. Not simply a new form of money, but an entirely new way of thinking about money.
                <br /> <br />
                <p>As ingenious as the Bitcoin whitepaper was, it wasn’t perfect. </p>
                <p>This problem is known as the Bitcoin trilemma; how to achieve the three core functions of an ideal cryptocurrency:</p>
                <br /> <br />
                <ol>
                    <li>Security - Can it provide a secure, trustworthy & reliable monetary system</li>
                    <li>Scalability - Can it support increasing numbers of users with no compromise on speed or convenience?</li>
                    <li>Decentralisation - Can it continue to function without a central point of control.</li>
                </ol>
                <br />
                <p>Understanding this trilemma will give you a better appreciation of the problems Bitcoin solves, as well as those things it isn’t an ideal solution for.
                    <br />
                    This can then put into context the projects and innovations that have emerged in response to the perceived shortcomings, which fall into one of three distinct groups:</p>
                <ul>
                    <li>Change the rules</li>
                    <li>Build on top</li>
                    <li>Build an alternative/sacrifice one of the pillars</li>
                </ul>
                <p>One of the most commonly discussed weaknesses, is that in order to create a new form of scarce internet money, with no controlling authority, Satoshi Nakamoto had to prioritise design features that make Bitcoin unsuitable for low value, high frequency transactions. </p>
            </div>
            <br /> <br />
            <div className="container">
                <h1>The Coffee Shop Illustration</h1>
            </div>
            <br />
            <div className="container" >
                <p style={{ opacity: "0.6" }}>Bitcoin’s design achieves points 1 and 2 - security and decentralisation - at the expense of aspects of scalability (3) for use as a convenient medium of exchange. The most frequently used illustration of this is buying a cup of coffee.
                    <br />
                    From our previous article we discovered how the Bitcoin network confirms new transactions. Each confirmation takes roughly 10 minutes, with six confirmations being regarded as optimal, to reduce the chances of an incorrect transaction to an infinitesimal level.
                    <br />
                    Now it doesn’t take a computer scientist to realise that buying a cup of coffee doesn’t take 60 minutes, or even 10 minutes. On that basis, no one is going to use bitcoin where the transaction needs to be instant, especially when there are perfectly good existing services that provide that convenience at the expense of what bitcoin does well.
                </p>
                <div className="container" style={{ background: "#ecf2fe", padding: "60px", borderRadius: "16px", marginBottom: "20px" }}>
                    <div className="row">
                        <div className="col-lg-6" style={{ color: "#467df9", marginBottom: "40px" }}>
                            <h1 style={{ fontSize: "50px", fontWeight: "400px", letterSpacing: "-.08em", lineHeight: "100%" }}>65,000 vs 7</h1>
                        </div>
                        <div className="col-lg-6">
                            <p style={{ letterSpacing: "0.2em" }}>The number of transactions a second the Visa network can support vs Bitcoin on-chain</p>
                        </div>
                    </div>
                </div>
                <br /> <br />
                <p style={{ opacity: "0.6" }}>
                    Given its centralised design, the Visa Network can support 65,000 transaction messages a second; because of the limitations described, Bitcoin can support seven per second. It sacrifices speed for security, which is achieved through the confirmation process, fundamental to its principle of being managed by a decentralised network.
                    <br /> <br />
                    The proposed solutions to the trilemma have led to a broadening of the cryptocurrency ecosystem as well as tribalism and friction, with each group believing in the value of their approach.
                    <br /> <br />
                    The only true judgement comes from whether people use the system or an alternative. The first real challenge to this open design came in August 2017 when an alternative Bitcoin came into existence, with slightly different rules, known as a Fork.
                </p>
                <br /> <br />
                <h1>1 - Change the rules (Fork)</h1>
                <p style={{ opacity: "0.6" }}>Bitcoin was built to be open source, so anyone that doesn’t like the rules can simply make a copy and create their modified version. This is known as a Fork.
                    <br /> <br />
                    To date there have been 105 Forks, which underlines that in many people’s eyes Bitcoin’s design has flaws. It should also be seen as both underlining the democratic nature of Bitcoin as well as a reminder of a couple of basic human traits.
                    <br /> <br />
                    <ul>
                        <li>You’ll never please all the people all the time.</li>
                        <li>Greed is often the biggest driving force rather than innovation.</li>
                    </ul>
                    <br />
                    What matters in the end is whether the Forks are supported by Miners who act only in their own economic interest. Miners earn from creating new blocks and from fees, but without anyone using or buying the underlying coin, neither provide value, and the Fork fails.
                    <br /> <br />
                    Over four years since Bitcoin forked to created Bitcoin Cash, which itself split to create Bitcoin SV, and those two off-shoots represent less than 1% of the value of Bitcoin.
                    <br /> <br />
                    The next lesson will explore Forks in more detail, looking at the successes, failures and what they mean for the overall health of the wider ecosystem.</p>
                <br /> <br />
                <h2>2 - Build the missing functionality on top (Layer 2)</h2>
                <p style={{ opacity: "0.6" }}>As you read more about Bitcoin you’ll probably come across the term ‘layer 2’. The concept of layers sees Bitcoin as the base layer, with transactions recorded in blocks connected across an ever-increasing chain.
                    <br /> <br />
                    What happens on the base layer is often referred to as happening ‘on-chain’. Transactions that happen on-chain are subject to the consensus rules and with Bitcoin, the limitations of the trilemma.
                    <br /> <br />
                    However, using a second layer that can interact with the base but isn’t subject to its restrictions can enable a solution to the coffee shop use case. This comes in the form of the Lightning Network (LN) which we discuss in the next article.
                    <br /> <br />
                    In summary, LN gives the transaction speed of Visa, at a fraction of the cost. The technology exists, what is missing is the usability and network effects, though the Lightning Network is growing steadily, helped by adoption in El Salvador where it is used for remittance.</p>
                <br /> <br />
                <h1>3 - Sacrifice one of the concepts (Altcoins)</h1>
                <br /> <br />
                <p style={{ opacity: "0.6" }}>
                    The two options so far for addressing problems of Bitcoin scaling as a convenient medium of exchange have looked to either adapt the Bitcoin design, or build on top of it. The third area of innovation retained Bitcoin's basic concepts but compromises on how it is implemented, creating what are now known as alternative coins, alt coins for short.
                    <br /> <br />
                    The most important cryptocurrency after Bitcoin is Ethereum. Though there are some similarities in their use as digital currencies, Ethereum has a much grander ambition - as a world computer - has a visible creator, in Vitalik Buterin, and less clarity on the crucial aspect of its money supply.
                    We’ll look in detail at Ethereum in a later lesson, but its relevance here is that - whether you agree with its design and approach to the trilemma - its function as digital money enables much faster transactions.
                    <br /> <br />
                    Beyond that, the ‘world computer’ concept means - in very simple terms - that Ethereum enables any application, which can be reduced to mathematical terms, to be built on top of it and supported by a decentralised network, not servers in New York or London.
                    <br /> <br />
                    Ethereum quickly inspired a wave of cryptocurrencies which were able to use it as a launchpad, along with a simple standard for generating new coins called ERC20. This enabled rapid innovation, opening the door to different approaches to the trilemma.
                    <br /> <br />
                    One of the crucial aspects of Ethereum was the way that it raised its initial investment. The team - based in Switzerland - established what is known as the ‘Initial Coin Offering’  or ICO. It was a shortcut to the traditional way of raising investment for a new business. Anyone with bitcoin, an email address and a willingness to take the risk could invest.
                </p>
            </div>
            <br /> <br />
            <Link to="/academy"><h2 className="tool-visit"><span className="k-b">Proceed to Academy? </span><i className="fa-solid fa-arrow-right"></i></h2></Link>
            <Footer />
        </>
    )
}

export default BitcoinLimitation