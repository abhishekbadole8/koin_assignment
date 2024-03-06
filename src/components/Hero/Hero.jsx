import React, { useEffect, useState } from 'react'
import styles from "./Hero.module.css";
import PercentageChange from '../PercentageChange/PercentageChange';
import HeroHeader from '../HeroHeader.jsx/HeroHeader';
import { getPrice } from '../../services/getPrice';

function Hero() {
  const [currencyData, setCurrencyData] = useState({
    inr: 0,
    inr_24h_change: 0,
    usd: 0,
    usd_24h_change: 0
  })


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPrice()
        const bitcoin_value = response.bitcoin
        setCurrencyData(prev => ({ ...prev, ...bitcoin_value }))
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); 

    const interval = setInterval(fetchData, 30000); // Fetch data every 10 seconds

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <section className={styles.heroSection}>

      {/* section header */}

      <div className={styles.heroHeaderInContainer}>
        <HeroHeader />
      </div>

      {/* body */}

      <div className={styles.heroCurrencyPrice}>

        <h2 className={styles.currencyPriceValue}>${currencyData.usd.toLocaleString()}</h2>

        <div className={styles.currencyPriceChange}>

          <PercentageChange usd_24h_change={currencyData.usd_24h_change.toFixed(2)}/>

          <span className={styles.currencyPriceChangePeriod}>(24H)</span>
        </div>

      </div>

      <div className={styles.currencyPriceInINR}>
        <p className={styles.currencyPriceInINRValue}>&#8377; {currencyData.inr.toLocaleString()}</p>
      </div>

      {/* footer - chart */}
      <div className={styles.heroChartContainer}>

      </div>

    </section>
  )
}

export default Hero