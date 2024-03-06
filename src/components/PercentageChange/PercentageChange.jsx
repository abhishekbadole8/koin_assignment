import React from 'react'
import styles from "./PercentageChange.module.css";

function PercentageChange({ usd_24h_change }) {
    return (
        <div className={styles.currencyPriceChangePercentage}>
            <div>
                <span>
                    <svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.5 0L11 8H0L5.5 0Z" fill="#14B079" />
                    </svg>
                </span>
            </div>
            <p>{usd_24h_change}%</p>
        </div>
    )
}

export default PercentageChange