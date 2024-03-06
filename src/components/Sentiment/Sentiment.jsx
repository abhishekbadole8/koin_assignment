import React from 'react'
import styles from "./Sentiment.module.css";
import news from "../../assets/news.svg";
import rightArrow from "../../assets/rightArrow.svg";
import ProgressBar from "@ramonak/react-progress-bar";

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

                <ul className={styles.progressList}>

                    <li className={styles.progressBarItem}>

                        <p className={styles.progressBarLabel}>Buy</p>

                        <div style={{ width: '100%' }}>
                            <ProgressBar completed={60} height='8px' bgColor='#00B386' isLabelVisible={false} borderRadius='2px'/>
                        </div>

                        <p className={styles.progressBarPercentage}>76%</p>

                    </li>

                    <li className={styles.progressBarItem}>

                        <p className={styles.progressBarLabel}>Buy</p>

                        <div style={{ width: '100%' }}>
                            <ProgressBar completed={60} height='8px' bgColor='#C7C8CE' isLabelVisible={false} borderRadius='2px'/>
                        </div>

                        <p className={styles.progressBarPercentage}>76%</p>

                    </li>

                    <li className={styles.progressBarItem}>

                        <p className={styles.progressBarLabel}>Buy</p>

                        <div style={{ width: '100%' }}>
                            <ProgressBar completed={60} height='8px' bgColor='#F7324C' isLabelVisible={false} borderRadius='2px'/>
                        </div>

                        <p className={styles.progressBarPercentage}>76%</p>

                    </li>

                </ul>


            </div>

        </section>
    )
}

export default Sentiment