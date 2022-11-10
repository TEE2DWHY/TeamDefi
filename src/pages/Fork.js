import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
const Fork = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<Link to="/crypto-basics"><span style={{ opacity: "0.6" }}>Crypto Basics</span></Link>/<span style={{ opacity: "0.6" }}>Bitcoins Limitation</span></p>
                <br />
                <h1>Crypto Basics: A fork in the road</h1>
            </div>
            <img className="crypto-basics" src="Crypto Basics 3x1.webp" alt="" />
            <div className="container">
                <h1>What you'll learn</h1>
            </div>
            <br />
            <div className="container" style={{ opacity: "0.6" }}>
                <ul>
                    <li>What is a fork?</li>
                    <li>How bitcoin agrees to change</li>
                    <li>Getting everybody on board</li>
                    <li>What happens during a fork, </li>
                    <li>The consequences for holders of a forked cryptocurrency</li>
                </ul>
                <p>Every now and then, you get a notification from your mobile bank app telling you to download an update, which may include bug fixes, improvements, and new features.
                    <br /> <br />
                    Updates of this type aren’t very controversial, since you don’t really have any influence over the changes. And if you refuse Barclay’s most recent update, you’ll soon start having security issues, or the app may just stop working.
                    <br /> <br />
                    But when it comes to updating cryptocurrencies, things aren’t that simple. In contrast to your banking app, cryptocurrencies like Bitcoin are open source and decentralised; so there is no ultimate decision maker.,
                    <br /> <br />
                    Open source literally means that anyone can legally copy the computer code and repurpose it, making whatever changes they see fit.
                    <br /> <br />
                    This means that if a change to Bitcoin was proposed for which there wasn’t a consensus - an agreement - there is always the risk that someone will be determined enough to literally take the project in a new direction, by creating a fork.
                    <br /> <br />
                    So a fork is essentially what happens when a consensus can’t be reached about improving a blockchain’s design and function. It is a change in the design of a blockchain creating two paths, one of which nodes and miners need to choose, like meeting a fork in a road and deciding which route to take.
                    <br /> <br />
                    For a very simple analogy, think about your favourite band splitting - because of creative differences - and forming two separate groups.
                    <br /> <br />
                    Just as a band has different roles, so does a cryptocurrency; let’s meet them.</p>
            </div>
            <div className="container">
                <h1>Who’s who in Bitcoin</h1>
            </div>
            <br /> <br />
            <div className='container'>
                <p style={{ opacity: "0.6" }}>There are four main roles in the Bitcoin ecosystem. These aren’t mutually exclusive, and there can be overlap between two or more roles.</p>
                <ol style={{ opacity: "0.6" }}>
                    <li>Developers</li>
                    <li>Miners</li>
                    <li>Full node operators</li>
                    <li>Light node users</li>
                </ol>
                <h1>Developers</h1>
                <br />
                <p style={{ opacity: "0.6" }}>
                    Software developers are in charge of creating, maintaining, and upgrading Bitcoin. The reference code, followed by most implementations, is called Bitcoin Core.
                    <br /> <br />
                    Bitcoin Core developers are trusted and respected members of the community - but they are not all-powerful.
                    <br /> <br />
                    Any developer is free to contribute and propose changes via a formal process. These Bitcoin Improvement Proposals (BIPs) are debated within the community, and must reach an overwhelming majority to be implemented.
                    <br /> <br />
                    This effectively means that the bigger or more controversial the change, the harder it is to get everyone to agree.
                    <br /> <br />
                    If a consensus is agreed the BIP is implemented and Bitcoin continues with the adjustment in place. If there is no agreement, the possibility of a fork emerges.
                    <br /> <br />
                    One of the most influential user groups that need to agree to implement a BIP are the Miners.
                </p>
                <br /> <br />
                <h1>Miners</h1>
                <p style={{ opacity: "0.6" }}> Miners are crucial to the system. They are responsible for validating transactions and adding new blocks to the blockchain, getting newly created bitcoin as a reward.
                    <br /> <br />
                    It wouldn’t be illogical to think that miners hold all the power. After all, they are the ones in charge of processing transactions and securing the network.
                    <br /> <br />
                    Miners could try and make selfish changes to the code to increase block rewards, for example - but this wouldn’t fly well with most users (and presumably with developers), and would most likely not be adopted.
                    <br /> <br />
                    What this means in practice is that their power is limited, and their decisions are driven by purely economic motive.
                </p>
                <br /> <br />
                <h1>Full node operators</h1>
                <p style={{ opacity: "0.6" }}>Anyone can run a full node, and some estimates put their numbers at around 50,000 worldwide. Full nodes maintain an updated copy of all transactions that ever took place in Bitcoin - that is, the full blockchain.
                    <br /> <br />
                    They also verify the integrity of every new block that gets added to the chain. If at any time a miner tries to bend the rules and create invalid transactions, for example, full nodes will reject that block, and the miner will lose their rewards.
                    <br /> <br />
                    Full nodes also enable light nodes (explained below), and arguably the entire Bitcoin network.
                    <br /> <br />
                    Running a full node has the advantage of enabling faster access to blockchain data (since they store the entire history locally). Most exchanges are also running full nodes, which gives them considerable financial weight in making decisions.
                    <br /> <br />
                    Full nodes don’t exert any active power in the network, but that doesn’t mean they’re powerless. Ultimately, adoption by the majority of full nodes is what determines the success of an upgrade because the number of Nodes correlate to growth of the Bitcoin ecosystem.</p>
                <br /> <br />
                <h1> Light node users</h1>
                <p style={{ opacity: "0.6" }}> Light nodes connect to full nodes in order to send and verify transactions, but they don’t have to store the entire blockchain. Light nodes are mostly Bitcoin wallets or other simple applications.
                    <br /> <br />
                    Light nodes make up for the overwhelming majority of regular Bitcoin users. Although they don’t have any direct influence over the network governance, their sheer number ensures that others are keeping their best interest in mind when making decisions - lest they simply cash out.
                    <br /> <br />
                    The power of each party is largely kept in check by economic self-interest. However, this doesn’t mean they always agree - and in extreme cases, this disagreement can lead to a fork that breaks up the network. </p>
            </div>
            <br /> <br />
            <Link to="/academy"><h2 className="tool-visit"><span className="k-b">Proceed to Academy? </span><i class="fa-solid fa-arrow-right"></i></h2></Link>
            <Footer />
        </>
    )
}

export default Fork