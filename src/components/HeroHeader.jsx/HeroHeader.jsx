import React from 'react'
import styles from "./HeroHeader.module.css";
import bitcoin from "../../assets/bitcoin.png";

function HeroHeader() {
    return (
        <div className={styles.heroHeader}>

            <div className={styles.currencyIcon}>
                <img src={bitcoin} alt="curreny" />
            </div>

            <h3 className={styles.currencyTitle}>Bitcoin</h3>

            <span className={styles.currencySymbol}>BTC</span>

            <div className={styles.rankTag}>
                <span className={styles.rankTagLabel}>Rank</span>
                <span className={styles.rankTagLabel}>#1</span>
            </div>

        </div>
    )
}

export default HeroHeader