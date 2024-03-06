import React from 'react'
import styles from "./About.module.css";
import ads from "../../assets/ads.png";

function About() {
    return (
        <section className={styles.aboutSection}>
            <h3>About Bitcoin</h3>

            <article className={styles.aboutArticle}>
                <h6>What is Bitcoin?</h6>
                <p>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</p>
            </article>

            <article className={styles.aboutArticle}>
                <h6>Lorem ipsum dolor sit amet</h6>
                <p>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.
                    <br />
                    Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.
                    <br />
                    Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>

                <div className={styles.holdingPosterContainer}>
                    <h3>Already Holding Bitcoin?</h3>

                    <ul className={styles.posterScrollContainer}>

                        <li className={styles.holdingPoster}>

                            <div className={styles.adsImgContainer}>
                                <img src={ads} alt="ads" />
                            </div>

                            <div className={styles.adsDetails}>
                                <p className={styles.adsTitle}>Calculate your Profits</p>
                                <button className={styles.getStartedButton}>Check Now
                                    <span>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.9583 9.9952H4.45834" stroke="#0F1629" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9168 4.97479L16.9585 9.99479L11.9168 15.0156" stroke="#0F1629" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </li>

                        <li className={styles.holdingPoster}>

                            <div className={styles.adsImgContainer}>
                                <img src={ads} alt="ads" />
                            </div>

                            <div className={styles.adsDetails}>
                                <p className={styles.adsTitle}>Calculate your Profits</p>
                                <button className={styles.getStartedButton}>Check Now
                                    <span>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.9583 9.9952H4.45834" stroke="#0F1629" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.9168 4.97479L16.9585 9.99479L11.9168 15.0156" stroke="#0F1629" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </li>

                        <li className={styles.alreadyHoldingPoster}>

                        </li>
                    </ul>
                </div>

                <p>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</p>

            </article>


        </section >
    )
}

export default About