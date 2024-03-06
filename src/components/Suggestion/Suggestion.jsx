import React from 'react'
import styles from "./Suggestion.module.css";
import PercentageChange from '../PercentageChange/PercentageChange';
import bitcoin from "../../assets/bitcoin.png"
import next from "../../assets/rightArrow.svg"

function Suggestion() {
    return (
        <div className={styles.suggestionContainer}>

            <div>
                <h3 className={styles.suggestionTitle}>
                    You May Also Like
                </h3>

                <div className={styles.suggestionList}>

                    <ul className={styles.suggestionItems}>

                        <li className={styles.suggestionItem}>

                            <div className={styles.suggestionItemContent}>
                                <div className={styles.suggestionItemImage}>
                                    <img src={bitcoin} alt="" />
                                </div>

                                <span className={styles.suggestionItemName}>BNB</span>
                                <div className={styles.currencyPriceChangePercentage}>
                                    <span>
                                        +
                                    </span>
                                    <p>2.51%</p>
                                </div>
                            </div>

                            <p className={styles.suggestionItemPrice}>$319.34</p>

                            <div className={styles.suggestionItemChart}>
                                {/* chart */}
                            </div>
                        </li>

                        <li className={styles.suggestionItem}>

                            <div className={styles.suggestionItemContent}>
                                <div className={styles.suggestionItemImage}>
                                    <img src={bitcoin} alt="" />
                                </div>

                                <span className={styles.suggestionItemName}>BNB</span>
                                <div className={styles.currencyPriceChangePercentage}>
                                    <span>
                                        +
                                    </span>
                                    <p>2.51%</p>
                                </div>
                            </div>

                            <p className={styles.suggestionItemPrice}>$319.34</p>

                            <div className={styles.suggestionItemChart}>
                                {/* chart */}
                            </div>
                        </li>
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

                        <li className={styles.suggestionItem}>

                            <div className={styles.suggestionItemContent}>
                                <div className={styles.suggestionItemImage}>
                                    <img src={bitcoin} alt="" />
                                </div>

                                <span className={styles.suggestionItemName}>BNB</span>
                                <div className={styles.currencyPriceChangePercentage}>
                                    <span>
                                        +
                                    </span>
                                    <p>2.51%</p>
                                </div>
                            </div>

                            <p className={styles.suggestionItemPrice}>$319.34</p>

                            <div className={styles.suggestionItemChart}>
                                {/* chart */}
                            </div>
                        </li>


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