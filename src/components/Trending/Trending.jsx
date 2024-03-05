import React from 'react'
import PercentageChange from "../PercentageChange/PercentageChange";
import bitcoin from "../../assets/bitcoin.png";
import styles from './Trending.module.css';

function Trending() {
    return (
        <section className={styles.trendingCoinsContainer}>

            <h3 className={styles.sectionTitle}>Trending Coins (24h)</h3>

            <ul className={styles.coinList}>

                <li className={styles.coinItem}>

                    <div className={styles.coinDetails}>

                        <div className={styles.coinIcon}>
                            <img src={bitcoin} alt="Bitcoin Icon" className={styles.coinIconImage} />
                        </div>

                        <h5 className={styles.coinName}>Ethereum(ETH)</h5>
                    </div>

                    <PercentageChange />

                </li>

                <li className={styles.coinItem}>

                    <div className={styles.coinDetails}>

                        <div className={styles.coinIcon}>
                            <img src={bitcoin} alt="Bitcoin Icon" className={styles.coinIconImage} />
                        </div>

                        <h5 className={styles.coinName}>Ethereum(ETH)</h5>
                    </div>

                    <PercentageChange />

                </li>

                <li className={styles.coinItem}>

                    <div className={styles.coinDetails}>

                        <div className={styles.coinIcon}>
                            <img src={bitcoin} alt="Bitcoin Icon" className={styles.coinIconImage} />
                        </div>

                        <h5 className={styles.coinName}>Polygon (MATIC)</h5>
                    </div>

                    <PercentageChange />

                </li>

            </ul>

        </section>
    )
}

export default Trending