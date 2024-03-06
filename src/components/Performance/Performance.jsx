import React from 'react'
import styles from "./Performance.module.css";
import ProgressBar from '@ramonak/react-progress-bar';

function Performance() {
    return (
        <section className={styles.performanceSection}>

            <h3 className={styles.sectionTitle}>Performance</h3>

            <div className={styles.progressBarContainer}>

                <div className={styles.stasticContainer}>
                    <div className={styles.column1}>
                        <span className={styles.performanceProgressTitle}>Today's Low</span>
                        <span className={styles.performanceProgressValue}>46,930.22</span>
                    </div>
                    <div className={styles.column2}>
                        <ProgressBar completed={100} isLabelVisible={false} borderRadius='10px' height='4.6px' />
                    </div>
                    <div className={styles.column3}>
                        <span className={styles.performanceProgressTitle}>Today's High</span>
                        <span className={styles.performanceProgressValue}>46,930.83</span>
                    </div>
                </div>

                <div className={styles.stasticContainer}>
                    <div className={styles.column1}>
                        <span className={styles.performanceProgressTitle}>Today's Low</span>
                        <span className={styles.performanceProgressValue}>46,930.22</span>
                    </div>
                    <div className={styles.column2}>
                        <ProgressBar completed={100} isLabelVisible={false} borderRadius='10px' height='4.5px' />
                    </div>
                    <div className={styles.column3}>
                        <span className={styles.performanceProgressTitle}>Today's High</span>
                        <span className={styles.performanceProgressValue}>46,930.83</span>
                    </div>

                </div>

            </div>

            <div>

                <h4 className={styles.sectionSubTitle}>Fundamentals <span>i</span>  </h4>

                <ul className={styles.fundamentalList}>

                    <li className={styles.fundamentalItem}>

                        <span className={styles.fundamentalItemName}>Bitcoin Price</span>
                        <span className={styles.fundamentalItemValue}>$16,815.446</span>

                    </li>

                    <li className={styles.fundamentalItem}>

                        <span className={styles.fundamentalItemName}>Bitcoin Price</span>
                        <span className={styles.fundamentalItemValue}>$16,815.446</span>

                    </li>

                    <li className={styles.fundamentalItem}>

                        <span className={styles.fundamentalItemName}>Bitcoin Price</span>
                        <span className={styles.fundamentalItemValue}>$16,815.446</span>

                    </li>

                    <li className={styles.fundamentalItem}>

                        <span className={styles.fundamentalItemName}>Bitcoin Price</span>
                        <span className={styles.fundamentalItemValue}>$16,815.446</span>

                    </li>

                    <li className={styles.fundamentalItem}>

                        <span className={styles.fundamentalItemName}>Bitcoin Price</span>
                        <span className={styles.fundamentalItemValue}>$16,815.446</span>

                    </li>


                </ul>
            </div>

        </section>
    )
}

export default Performance