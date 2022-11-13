import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Dex = () => {
    return (
        <>
            <Navbar />
            <br /> <br />
            <div className="container">
                <p style={{ fontSize: "13px" }}><Link to="/"><span className="redierction">Home</span></Link> /<Link to="/crypto-basics"><span style={{ opacity: "0.6" }}>Crypto Basics</span></Link>/<span style={{ opacity: "0.6" }}>Decentralised Crypto Exchanges</span></p>
                <br />
                <h1>Crypto Basics:What Are Decentralised Crypto Exchanges? DEX Explained</h1>
            </div>
            <img className="crypto-basics" src="Crypto Basics 3x1.webp" alt="" />
            <br />
            <div className='container'>
                <p style={{ opacity: "0.6" }}>A decentralised exchange (DEX) is an increasingly popular method to trade cryptocurrencies. Unlike a traditional or centralised exchange (CEX), a DEX does not have a company or intermediary settling trades between buyers and sellers. Instead, a DEX uses software and coding to automatically match buyers and sellers and finalise the peer-to-peer (p2p) exchange transaction.
                    <br /> <br />
                    At least $18 billion worth of digital assets changed hands every day in the crypto market in May 2022 (TheBlockCrypto), a number that has crept higher over the years as more people and institutions buy and sell coins over crypto exchanges.
                    <br /> <br />
                    More than a fifth of that volume or about $4 billion, according to the same source, took place across decentralised exchanges, known in the crypto industry as DEXs.
                    <br /> <br />
                    In this article, you will learn:</p>
                <br /> <br />
                <ul style={{ opacity: "0.6" }}>
                    <li>What the modern decentralised exchange (DEX) looks like and how it works</li>
                    <li>A brief history of decentralised exchanges (DEXs) and the different types of DEXs that exist as a result</li>
                    <li>How a DEX differs from a CEX</li>
                    <li>Some of the best DEXs and how to use them</li>
                    <li>Why DEXs are important</li>
                </ul>
                <br />
                <h1>How a decentralized crypto exchange (DEX) works</h1>
                <br />
                <p style={{ opacity: "0.6" }}>A decentralised exchange (DEX) is a type of cryptocurrency exchange where users can conduct financial transactions involving the trade of digital assets online directly with each other (or peer-to-peer).
                    <br /> <br />
                    This is different from the most common way of trading crypto, whereby users sign up to an exchange and place their buy or sell orders, allowing the exchange to manage these transactions on their behalf. These types of traditional exchanges are sometimes referred to as centralised exchanges (CEXs). It is also common for a CEX to allow users to swap or exchange crypto directly with the platform’s own funds.
                    <br /> <br />
                    One way to look at DEXs is to see them as a peer-to-peer crypto marketplace like Amazon or Alibaba, where users put up their offers, waiting for others to take them.
                    <br /> <br />
                    However, unlike Amazon or Alibaba, DEXs don’t typically determine what is allowable as a trade listing or arbitrate any trading disputes. They merely operate the software (or dApp) that presents the trades and settles the exchanges between buyer and seller. This is usually achieved through automated algorithms and smart contracts or smart agreements that execute transactions when all the conditions specified by the user are met.
                    <br /> <br />
                    Technically, there are several methods for a DEX to perform the functions of crypto trading and they have evolved over the years. In the next section, we take a look at how and why DEXs started out, the different types that can exist and what a common DEX looks like today.</p>
                <br />
                <h1>A brief history of decentralised exchanges and the different types of DEX</h1>
                <p style={{ opacity: "0.6" }}>After its launch in 2013, the Ethereum smart contract blockchain emerged as a useful platform to develop and deploy so-called decentralized applications or dApps as the concept of open applications operating atop blockchain took hold.
                    <br /> <br />
                    Among the early use cases for this was the idea of a crypto exchange that would allow users to trade in a more decentralized manner.
                    <br /> <br />
                    At the time, the only way to buy and sell crypto was to do it at exchanges, which were managed and operated by commercial companies (and, at first, wealthy individuals). This required users to deposit their funds at the exchange, placing orders to exchange their coins and tokens for those of other users. Only when exchanges were finalised were users able to withdraw back their coins to their own wallets.
                    <br /> <br />
                    However, the infamous hack of Mt Gox in 2013 – then the largest Bitcoin exchange in the world – exposed the biggest risk of a traditional crypto exchange or centralised exchange (CEX). If hacked or compromised, all users at the exchange risk losing their funds, just as thousands of users did at Mt Gox. This was because you have to give over custody of your funds when you deposit assets at a CEX.
                    <br /> <br />
                    Unsurprisingly, the very first type of DEX to launch looked very similar to a regular exchange, except that it did not require users to hand over custody of their digital assets.</p>
                <br />
                <h2>1. The first generation: Non-Custodial Order Books</h2>
                <br />
                <p style={{ opacity: "0.6" }}>Around 2016, DEX platforms like Bancor, IDEX and EtherDelta made waves in crypto by introducing a way to trade crypto peer-to-peer while maintaining control over the digital assets intended to trade.
                    <br /> <br />
                    The term “non-custodial” was used because at any time, traders would be able to access the funds placed at this DEX, if they weren’t already exchanged. In other words, crypto actually remained in users’ wallets until trade conditions on the DEX were made and executed by smart contracts.
                    <br /> <br />
                    These early DEXs worked almost exactly like a traditional CEX in that the platform was made up of an order book. An order book simply contains all of the orders placed by users, whether it is to buy or sell crypto. Thus, an order book has two sides. The buy side (also called “bid” since buyers are bidding for an asset) and the sell side (also called “ask” since sellers are asking for a price).
                    <br /> <br />
                    Users wishing to sell their assets would either have to make a sell order on the DEX or take an existing buy order. Conversely, users who wanted to buy an asset would have to make a buy order on the DEX or take an existing sell order. Just like on a CEX.
                    <br /> <br />
                    These first-generation DEXs proved to be popular but presented several issues:</p>
                <br />
                <h4>a. High cost, low speed</h4>
                <br />
                <p style={{ opacity: "0.6" }}>As the majority of early DEXs launched on Ethereum, it quickly became apparent that Ethereum’s transactional capacity simply wasn’t enough to cope with rising demand.

                    Each peer-to-peer trade on DEXs required at least one transaction, which needed to be submitted to the network for confirmation like any other blockchain transaction. These competed with all the other transactions on Ethereum and other dApp transactions.

                    As the Ethereum network became congested, mining fees for transactions soared, and trading on DEXs became unreliable.</p>
                <br />
                <h4>b. Low liquidity</h4>
                <br />
                <p style={{ opacity: "0.6" }}>They weren’t enough users on the DEX buying or selling many types of coins, so it was significantly harder to buy or sell compared to a CEX. Orderbooks were often empty or quickly cleared. Also, because the demand usually outstripped supply, buy/sell rates weren’t very good either.

                    Orders that were available were also small in size, unlike the larger sizes typically seen on CEXs. This led to high slippage (sudden reductions in rates leading to losses) for DEX traders.

                    This liquidity problem – the lack of ease with which crypto could be traded – led to the next generation of DEXs.</p>
                <br />
                <h1>2. The second generation: Automated Market Makers (AMM) and Liquidity Pools</h1>
                <br />
                <p style={{ opacity: "0.6" }}>Order book DEXs never quite took off because of the Catch 22 liquidity issue. There wasn’t enough liquidity because there weren’t enough users. And there weren’t enough users because there wasn’t enough liquidity.
                    <br /> <br />
                    Users didn’t want to lock up their assets on order books at DEXs where they were few takers, certainly not when they would almost certainly find willing takers on a CEX!
                    <br /> <br />
                    So DEXs had to find a way to convince users to provide liquidity, that is, to provide their assets on a DEX. And they did so by providing additional incentives or rewards for doing so.
                    <br /> <br />
                    Newer DEX platforms like Uniswap and SushiSwap popularised what is called a liquidity pool. Users participating in this pool would be called liquidity providers as they simply provided their crypto to the pool.
                    <br /> <br />
                    All the contributed crypto – which came in pairs, e.g. ETH and USDT – combined as one single ETH/USD liquidity source, allowing other users to connect directly to the DEX to buy or sell Ethereum (ETH) against Tether (USDT) with that liquidity pool.
                    <br /> <br />
                    At the heart of these DEXs were smart contracts that:</p>
                <br />
                <ul style={{ opacity: "0.6" }}>
                    <li>Automated the process of providing liquidity,</li>
                    <li>determined what the market rate for the swap would be, and</li>
                    <li>Completing the exchanges from users swapping with the liquidity pool</li>
                </ul>
                <br />
                <p style={{ opacity: "0.6" }}>In other words, they automatically made the markets, hence why DEXs like Uniswap or SushiSwap are sometimes called Automated Market Makers or AMMs.

                    In return for providing liquidity, liquidity providers would get a share of commissions charged by the AMM on individuals swapping crypto there. This proved to be a relatively secure and reliable means of passive income that led to the growth of AMM type DEXs from 2020 onwards.</p>
                <br />
                <h1>3. The current iteration - DEX Aggregators</h1>
                <br />
                <p style={{ opacity: "0.6" }}>AMM DEXs continue to grow in popularity to this day and have been credited with the rising use of decentralised finance (DEFI) products and services, of which DEX trading is one.
                    <br />  <br />
                    But with crypto markets peaking in 2021, other smart contract platforms jostled with Ethereum for a share in the DEX space. While Ethereum-based DEXs still command the lion’s share of DEX trading volume, other DEXs on challenger platforms are tempting users with cheaper fees and faster transactions (being on newer, less crowded networks).
                    <br />  <br />
                    Some examples are the PancakeSwap DEX based on the Binance Smart Chain (BSC) network and the AnySwap DEX based on the Polygon network. In fact, there are scores of competing blockchain networks vying for a share of the dApp ecosystem.
                    <br />  <br />
                    Owing to this, the DEX ecosystem is somewhat splintered across multiple DEX platforms on multiple blockchain networks. While other networks are working to create “bridges” between these, they can be quite complex for the regular user.
                    <br />  <br />
                    As such, DEX traders are faced with an increasingly complicated process of manually connecting to different blockchain networks and different DEXs to find the right place to trade or the right rates to trade at.
                    <br />  <br />
                    Enter the DEX aggregators: platforms or dApps which aren’t themselves DEXs but tools that put together many existing DEXs in one place so that their users can trade across different DEXs while connecting to a single app. These aggregators also connect users to different wallets and different networks, making them a convenient way to use DEXs without actually needing to manage multiple accounts.
                    <br />  <br />
                    In fact, many popular DEX aggregators like 1inch and Zerion even have their own custom protocols that automatically search their network of DEXs to find the best swap rates for their users, while using the most efficient algorithms for lower fees. Some DEX aggregators claim this can result in even better rates when using their platform to trade from a particular DEX, than when trading directly at the DEX itself.
                    <br />  <br />
                    The key result for users is that they gain convenient access to any and all liquidity from all the major DEX networks from a single point.</p>
            </div>
            <br /> <br />
            <Link to="/academy"><h2 className="tool-visit"><span className="k-b">Proceed to Academy? </span><i class="fa-solid fa-arrow-right"></i></h2></Link>
            <Footer />
        </>
    )
}

export default Dex