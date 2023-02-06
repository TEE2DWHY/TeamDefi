import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { articleData2 } from "../components/Data"

const LegacyOfSatoshi = () => {
    return (
        <>
            <Navbar />
            <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/blog"><span className="redierction">Blog</span></Link> /<span style={{ opacity: "0.6" }}>LegacyOfSatoshi</span></p>
            </div>
            <br />
            <div className="container">
                <h1>The Legacy of Satoshi Nakamoto</h1>
                <p style={{ opacity: "0.6" }}>13.01.2022</p>
                <img src="satoshi.webp" className="card-img-top" alt="satoshi" />
                <br /> <br />
                <p style={{ fontSize: "25px" }}>*Key Discussions</p>
                <ul>
                    <li><i class="fa-solid fa-spinner" style={{ color: "#1bd190" }}></i> Taking one for the team</li>
                    <li><i class="fa-solid fa-spinner" style={{ color: "#1bd190" }}></i> Could Bitcoin have remained decentralised with Satoshi around?</li>
                </ul>
                <p style={{ opacity: "0.6" }}>
                    Much has been written about who’s behind the pseudonym, Satoshi Nakamoto, the creator of Bitcoin. Though the debate over identity understandably generates great headlines, it shouldn’t overshadow the continuing importance of Satoshi’s decision to walk away from their creation and what might have motivated that selfless decision.
                    <br />
                    The blueprint for Bitcoin as a peer-to-peer cash system was published in its whitepaper on October the 31st, 2008, under the pseudonym, Satoshi Nakamoto.
                    <br />
                    That name doesn’t refer to a real person, living or dead, and their true identity remains a mystery. Having published the paper Satoshi began communicating on an obscure cryptography mailing list, but once the Whitepaper had been published, and the Bitcoin mainnet was launched in January 2009, they continued to be active on forums like Bitcointalk and the P2P Foundation.
                    <br />
                    The archives of the Satoshi Nakamoto Institute serve as a record of all the messages that Bitcoin’s founder left behind, helping us understand more about their motivations for creating it. It is equally interesting to consider their motivations for walking away from their creation in December 2010, and the lasting legacy that has left.
                </p>
                <br />
                <h3>Taking one for the Team</h3>
                <br />
                <p style={{ opacity: "0.6" }}>
                    At the time Satoshi made their exit, Bitcoin was still a technical curiosity, but many believe that action was instrumental in it developing into the trillion dollar asset it represents today. Much of that value derives from Bitcoin’s quality as a decentralised and censorship resistant form of money. Those qualities may have been greatly diminished with a single point of influence, and from a more practical perspective, Satoshi could easily have single handedly crashed the price at any point.
                    <br />
                    Satoshi mined around 1 million bitcoin, representing over 5% of the current total supply, which recently exceeded 19 million of the maximum cap of 21 million, expected to be reached in 2140.
                    <br />
                    One person controlling such a significant proportion of the supply could easily dissuade other investors because of their ability to tank the price by dumping their holding.
                    <br />
                    When Satoshi logged off, the price of Bitcoin was around $0.20, so the value of their estimated mining rewards would have been a mere $200k, but that has dramatically changed over the years, with those coins worth around $68bn judged on the 2021 ATH.
                    <br />
                    The increasing dormancy of the coins believed to have been mined by Satosh has, over time, given assurance to investors that whoever they are, they never intend to move those coins. With so much at stake the relevant addresses are permanently tracked.
                    <br />
                    That threat will always hang over Bitcoin, like a Sword of Damacles. Bitcoin’s value has long since passed a point where whoever controls those coins (and their extended family) could have anything they might ever want, so the longer the Satoshi coins remain untouched, the less likely it seems that they will ever move.
                </p>
                <br />
                <h3>Could Bitcoin have remained decentralised with Satoshi around?</h3>
                <br />
                <p style={{ opacity: "0.6" }}>
                    Beyond the direct financial benefit and influence on price, Satoshi could have compromised the independence of Bitcoin as personalities create tribalism.
                    <br />
                    Had they remained active, every single one of their communications would be analysed in forensic detail to understand the explicit implications, as well as the underlying sentiment.
                    <br />
                    Just look at the impact that Elon Musk - who has no specific connection other than waivering advocacy - has had on Bitcoin ,to appreciate the significance its creator might have via social media
                    <br />
                    elonmusk.
                    <br />
                    Perhaps more important than the direct influence Satoshi could have on price, is the indirect influence they could have had given their power over its direction as a technology and a philosophy. How decentralised and censorship resistant could Bitcoin be with a visible founder?
                    <br />
                    Though every crypto that has followed Bitcoin has managed to negotiate that challenge, for better or for first, Bitcoin is the market. A Bitcoin figurehead would become a target for both law enforcement, criminals and commercial organisations, each with their own motivations for trying to gain influence, .
                    <br />
                    Bitcoin’s closest competitor, Ethereum, has a market cap of around half a trillion dollars, yet retains a clear founder, in Vitalik Buterin. How much of Ethereum’s progress has been because of, or in spite of, Buterin’s influence?
                    <br />
                    It is an impossible question to answer, but if you value the quality of decentralisation, then Satoshi’s absence can only be interpreted as a positive thing for Bitcoin.
                    <br />
                    If its adoption continues, with more countries following the lead of El Salvador by giving it status as legal tender, Satoshi’s decision to remain totally disconnected from their creation could be seen as one of the greatest acts of altruism in history, similar to the creation of the world wide web.
                </p>

                <br /> <br />
                <h2 style={{ fontSize: "32px", letterSpacing: "0.1em", color: "#181818" }}>More Articles</h2>
                <div className="row">
                    {articleData2.map((items) => (
                        <div className="col-lg-6 col-sm-12">
                            <div className="card" style={{ width: "25pxs", borderRadius: "12px", cursor: "pointer", display: "block", margin: "5% auto" }}>
                                <img src={items.img} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-text">{items.content}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <br /> <br />
            <Link to="/academy"><h2 className="tool-visit"><span className="k-b">Proceed to Academy? </span><i class="fa-solid fa-arrow-right"></i></h2></Link>
            <Footer />
        </>
    )
}

export default LegacyOfSatoshi