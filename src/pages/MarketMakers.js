import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MarketMakers = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<Link to="/crypto-basics"><span style={{ opacity: "0.6" }}>Crypto Basics</span></Link>/<span style={{ opacity: "0.6" }}>Automated Market Makers</span></p>
                <br />
                <h1>Crypto Basics: How Bitcoin Works</h1>
            </div>
            <img className="crypto-basics" src="Crypto Basics 3x1.webp" alt="" />
            <div className="container">
                <p style={{ opacity: "0.6" }}>An automated market maker, otherwise known as an AMM, is a means of offering cryptocurrency trading without the need for an intermediary. AMMs combine Smart Contracts and incentives for liquidity provision to automate cryptocurrency trading and disrupt the traditional centralised exchange model, replacing it with the DEX.
                    <br /> <br />
                    A DEX is an abbreviation for Decentralised Exchange. It is a Peer-to-Peer online marketplace for buying and selling cryptocurrency that functions without a central authority and without taking custody of users’ funds.
                    <br /> <br />
                    Decentralised Exchanges instead rely on AMMs running on blockchains like Ethereum to set the prices of asset pairs and maintain sufficient liquidity.
                    <br /> <br />
                    DEX’s are a core component of DEFI - decentralised finance - generating 24hr trading volume in excess of $2bn, according to Coingecko.</p>
                <br /> <br />
                <h1>Automated Markets & Traditional Markets</h1>
                <br />
                <p style={{ opacity: "0.6" }}>Any exchange, whether trading crypto, commodities or stocks, is designed to match the demand from traders wanting to buy an asset at a specific price with someone willing to sell at that price, and to automate the process within a user-friendly interface such as a website or App.
                    <br /> <br />
                    The traditional model for doing this is known as a Centralised Exchange, or CEX. It is described as centralised because there is a single point of control for the service - from both a technology and management perspective - with which the user has to establish trust by supplying KYC.
                    <br /> <br />
                    The technology within a CEX establishes the price for tradable asset pairs such as EUR/BTC through what is known as an order book.
                    <br /> <br />
                    The order book is essentially a list of offers from customers to buy or sell a specific amount of Bitcoin at a specific price in Euros. Order books automate price discovery through the wisdom of the crowd.
                    <br /> <br />
                    The exchange doesn’t decide the price, it simply provides the means for the market to arrive at the price based on the relative demand from buyers and sellers.
                    <br /> <br />
                    In order for an automated order book to provide an accurate price, it needs sufficient liquidity - the volume of buy/sell order requests. If liquidity is weak then there will be big gaps in the price that users are prepared to buy and sell at. This is known as price inefficiency or Slippage - where the price that a trade is placed at differs from the executed price because there is insufficient liquidity to cover the whole order.</p>
                <br /> <br />
                <h1>What is Market Making in Crypto?</h1>
                <br />
                <p style={{ opacity: "0.6" }}>A centralised cryptocurrency exchange will try and create efficient markets for coins and tokens by acquiring customers to generate liquidity. They might do this through a mixture of marketing and product features:</p>
                <br /> <br />
                <ul style={{ opacity: "0.6" }}>
                    <li>Offering the widest range of tradeable pairs</li>
                    <li>Competitive fees charged per transaction</li>
                    <li>Promoting its credibility & regulated status</li>
                    <li>Making depositing/withdrawing fiat (on-off ramps) as easy as possible</li>
                    <li>Using a native token to discount trading fees</li>
                </ul>
                <br /> <br />
                <p style={{ opacity: "0.6" }}>But the main mechanism that centralised exchanges employ to generate liquidity is through external market makers. These are B2B financial services that are paid to artificially generate trading demand for a specific coin, generally ones that are newly listed.
                    <br /> <br />
                    The magic that enables a decentralised exchange to automatically create markets without relying on the traditional intermediary is a combination of maths and code.</p>
                <br /> <br />
                <h1>Automated Market Maker Equation</h1>
                <br />
                <p style={{ opacity: "0.6" }}>Where a CEX has an Order Book managing offers from buyers and sellers through a centralised system a DEX uses an Automated Market Maker (AMM). An AMM combines Smart Contracts and algorithms to incentivise crypto holders to provide liquidity for trading pairs and automatically adjusts prices based on the changing liquidity ratio.
                    <br /> <br />
                    In its simplest form, the AMM model works on the equation x*y=k. We can illustrate for an example trading pair of BTC/USDT
                    <br /> <br />
                    x = the BTC proportion of the total pool
                    <br /> <br />
                    y = the USDT proportion of the total pool
                    <br /> <br />
                    k = the total liquidity in the pool (x*y)</p>
                <br /> <br />
                <h1>Automated Market Maker Algorithm</h1>
                <br />
                <p style={{ opacity: "0.6" }}>The job of the algorithm is to keep k constant by adjusting the prices of x and y in proportion to trades and incentivising Liquidity Providers (LPs).
                    <br /> <br />
                    If traders buy BTC they diminish that side of the pool and increase the pool of USDT increasing the relative price of BTC. This also incentivises LPs to provide more BTC because liquidity provision is based on the proportion of the overall pool you add, not the specific price at the time.
                    <br /> <br />
                    Price within a DEX doesn’t move based on knowledge of price externally -- through an Oracle, for example -- but simply because traders will profit from any differentials between the price offered on the DEX and the price elsewhere, for example on a centralised exchange. Exploiting price differential is known as arbitrage and is essential for efficient markets of any sort.
                    <br /> <br />
                    Even with arbitrage helping keep the price offered by a DEX in line with the broader market this doesn’t guarantee that a trade will also be executed efficiently because the size of the trade relative to the volume of the liquidity pool will determine price slippage.</p>
                <br /> <br />
                <h1>Automated Market Makers (AMM) Examples</h1>
                <br />
                <p style={{ opacity: "0.6" }}>The AMM model is the default for decentralised exchanges but given the composability of DEFI different applications have emerged.</p>
                <br />
                <h1>
                    Uniswap
                </h1>
                <br />
                <p style={{ opacity: "0.6" }}>Uniswap uses AMMs to incentivise liquidity provision of pairs of Ethereum-based tokens (generally in a 50/50 ratio) which enable other users to swap those tokens for a fee without an intermediary, custody of funds or the need for KYC.
                    <br /> <br />
                    Uniswap has traded over $1 trillion in volume and executed close to 100million trades. It has its own governance token that is paid to LPs (liquidity providers) in addition to fees from transactions and gives them a say in the future of the platform.
                    <br /> <br />
                    Version 1 of Uniswap was launched in November 2018 and quickly became the template for Automated Market Making within crypto with copycat Decentralised Exchanges like Sushiswap adding more features or replicating the model for different blockchains, such as PancakeSwap on the Binance Smart Chain.</p>
                <br /> <br />
                <h1>What are the risks and limitations of AMMs?</h1>
                <br />
                <h2>Capital Inefficiency</h2>
                <br />
                <p style={{ opacity: "0.6" }}>One of the specific problems of the AMM approach to decentralised exchanges is that for very liquid pools much of the funds are sat there doing nothing. This is because the majority of the time price moves in a relatively narrow range, and the pool will quickly rebalance.
                    <br /> <br />
                    It would take a significant price shift to absorb the majority of liquidity so the majority of capital within the AMM model is deployed inefficiently, essentially doing nothing. Despite this everyone still earns fees in proportion to what they contribute to the overall pool.</p>
                <br />
                <h2>Smart Contract Vulnerability</h2>
                <br />
                <p style={{ opacity: "0.6" }}>The automated nature of AMMs - functioning via Smart Contracts - is both their key strength and a potential source of weakness. Smart Contracts are deterministic; if conditions are met they execute in full or not at all, but because they are written by humans those conditions - expressed as computer code - can contain explicit mistakes or miscalculations of logic that hackers will look to exploit and abuse.
                    <br /> <br />
                    If a DEX is exploited you could lose your funds with no guarantees that you will get anything back. Chainalysis reported that DEFI accounted for $2.3bn of crypto-related crime in 2021.</p>
                <br />
                <h2>Impermanent Loss</h2>
                <p style={{ opacity: "0.6" }}>Impermanent Loss is the unrealised loss in the value of funds added to a liquidity pool due to the impact of price change on your share of the pool. It's a factor of the automated nature of DEFI and the volatility of the price of asset pairs.
                    <br /> <br />
                    It’s impermanent because it is only realised when withdrawing funds. Users can claim the proportion of assets added to a lending pool rather than the equivalent amount of value they added to the pool. Impermanent loss can positively and negatively impact liquidity providers depending on market conditions.</p>
            </div>
            <br /> <br />
            <Link to="/academy"><h2 className="tool-visit"><span className="k-b">Proceed to Academy? </span><i class="fa-solid fa-arrow-right"></i></h2></Link>
            <Footer />
        </>
    )
}

export default MarketMakers