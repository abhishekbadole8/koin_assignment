
import styles from "./Suggestion.module.css";
import next from "../../assets/rightArrow.svg"

function Suggestion({ trendingCurrencyData }) {

    return (
        <div className={styles.suggestionContainer}>

            <div>
                <h3 className={styles.suggestionTitle}>
                    You May Also Like
                </h3>

                <div className={styles.suggestionList}>

                    <ul className={styles.suggestionItems}>
                        {trendingCurrencyData?.length > 0 && trendingCurrencyData?.map((data) => {

                            const { coin_id, thumb, symbol, } = data.item

                            return (
                                <li className={styles.suggestionItem} key={coin_id}>
                                    <div className={styles.suggestionItemContent}>
                                        <div className={styles.suggestionItemImage}>
                                            <img src={thumb} alt="icon" />
                                        </div>

                                        <span className={styles.suggestionItemName}>{symbol}</span>
                                        <div className={styles.currencyPriceChangePercentage}>
                                            <span>
                                                +
                                            </span>
                                            <p>{data.item.data.price_change_percentage_24h?.usd.toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <p className={styles.suggestionItemPrice}>$319.34</p>

                                    <div className={styles.suggestionItemChart}>
                                        <img src={data.item.data.sparkline} alt="chart-img" />
                                    </div>
                                </li>)
                        })}

                    </ul>

                    <div className={styles.suggestionButtons}>
                        <div className={styles.suggestionPreviousButton}>
                            <img src={next} alt="" />
                        </div>

                        <div className={styles.suggestionNextButton}>
                            <img src={next} alt="" />
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <h3 className={styles.suggestionTitle}>
                    You May Also Like
                </h3>

                <div className={styles.suggestionList}>

                    <ul className={styles.suggestionItems}>

                        {trendingCurrencyData?.length > 0 && trendingCurrencyData?.map((data) => {

                            return (
                                <li className={styles.suggestionItem} key={data.item.coin_id}>

                                    <div className={styles.suggestionItemContent}>
                                        <div className={styles.suggestionItemImage}>
                                            <img src={data.item.thumb} alt="" />
                                        </div>

                                        <span className={styles.suggestionItemName}>{data.item.symbol}</span>

                                        <div className={styles.currencyPriceChangePercentage}>
                                            <span>
                                                +
                                            </span>
                                            <p>{data.item.data.price_change_percentage_24h?.usd.toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <p className={styles.suggestionItemPrice}>$319.34</p>

                                    <div className={styles.suggestionItemChart}>
                                        <img src={data.item.data.sparkline} alt="chart-img" />
                                    </div>
                                </li>)
                        })}

                    </ul>

                    <div className={styles.suggestionButtons}>
                        <div className={styles.suggestionPreviousButton}>
                            <img src={next} alt="" />
                        </div>

                        <div className={styles.suggestionNextButton}>
                            <img src={next} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Suggestion