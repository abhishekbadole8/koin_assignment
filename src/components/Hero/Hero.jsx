import React from 'react'
import styles from "./Hero.module.css";
import bitcoin from "../../assets/bitcoin.png";
import PercentageChange from '../PercentageChange/PercentageChange';
import HeroHeader from '../HeroHeader.jsx/HeroHeader';

function Hero() {
  return (
    <section className={styles.heroSection}>

      {/* section header */}

      <div className={styles.heroHeaderInContainer}>
        <HeroHeader />
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