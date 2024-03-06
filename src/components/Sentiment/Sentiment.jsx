import React from 'react'
import styles from "./Sentiment.module.css";
import news from "../../assets/news.svg";
import rightArrow from "../../assets/rightArrow.svg";

function Sentiment() {
    return (
        <section className={styles.sentiment}>
            <h3 >Sentiment</h3>

            <h4 >Key Events <span className={styles.sectionSubTitleI}>i</span> </h4>

            <ul className={styles.eventsList}>

                <li className={styles.eventItem}>

                    <div className={styles.eventIcon}>
                        <img src={news} alt="icon" className={styles.eventIconImg} />
                    </div>

                    <div className={styles.eventContent}>
                        <p className={styles.eventHeader}>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>

                        <span className={styles.eventFooter}>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</span>
                    </div>
                </li>

                <li className={styles.eventItem}>

                    <div className={styles.eventIcon}>
                        <img src={news} alt="icon" className={styles.eventIconImg} />
                    </div>

                    <div className={styles.eventContent}>
                        <p className={styles.eventHeader}>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</p>

                        <span className={styles.eventFooter}>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</span>
                    </div>
                </li>

                {/* <li className={styles.moreEventsButton}>
                    <img src={rightArrow} alt="" />
                </li> */}
            </ul>

            <h4>Analyst Estimates <span className={styles.sectionSubTitleI}>i</span> </h4>

            <div className={styles.analystEstimateContainer}>

                <div className={styles.analystEstimatePercentage}>
                    <p>76</p>
                    <span>%</span>
                </div>

                <div className={styles.estimatesProgressBars}>

                    <div>

                        <p>Buy</p>

                        <div>

                            <div>


                            </div>

                            <p>76%</p>

                        </div>

                    </div>

                    <div>

                        <p>Buy</p>

                        <div>

                            <div>


                            </div>

                            <p>76%</p>

                        </div>

                    </div>

                    <div>

                        <p>Buy</p>

                        <div>

                            <div>


                            </div>

                            <p>76%</p>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Sentiment