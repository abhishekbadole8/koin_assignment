import React from 'react'
import styles from "./Hero.module.css";
import bitcoin from "../../assets/bitcoin.png";
import PercentageChange from '../PercentageChange/PercentageChange';

function Hero() {
  return (
    <section className={styles.heroSection}>

      {/* section header */}
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

      {/* body */}

      <div className={styles.heroCurrencyPrice}>

        <h2 className={styles.currencyPriceValue}>$46,953.04</h2>

        <div className={styles.currencyPriceChange}>

          <PercentageChange />

          <span className={styles.currencyPriceChangePeriod}>(24H)</span>
        </div>

      </div>

      <div className={styles.currencyPriceInINR}>
        <p className={styles.currencyPriceInINRValue}>&#8377; 39,42,343</p>
      </div>

      {/* footer - chart */}
      <div className={styles.heroChartContainer}>

      </div>

    </section>
  )
}

export default Hero