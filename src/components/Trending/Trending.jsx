import PercentageChange from "../PercentageChange/PercentageChange";
import styles from './Trending.module.css';

function Trending({ trendingCurrencyData }) {

    return (
        <section className={styles.trendingCoinsContainer}>

            <h3 className={styles.sectionTitle}>Trending Coins (24h)</h3>

            <ul className={styles.coinList}>

                {trendingCurrencyData?.length > 0 && trendingCurrencyData?.map((data) => {

                    return (
                        <li key={data.item.coin_id} className={styles.coinItem} >

                            <div className={styles.coinDetails}>

                                <div className={styles.coinIcon}>
                                    <img src={data.item.thumb} alt="Icon" className={styles.coinIconImage} />
                                </div>

                                <h5 className={styles.coinName}>
                                    {data.item.name}({data.item.symbol})
                                </h5>
                            </div>

                            <PercentageChange usd_24h_change={data.item.data.price_change_percentage_24h?.usd.toFixed(2)} />

                        </li>)

                })}

            </ul>

        </section >
    )
}

export default Trending