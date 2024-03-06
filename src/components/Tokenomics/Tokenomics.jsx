import React from 'react'
import styles from "./Tokenomics.module.css";

function Tokenomics() {
    return (
        <section className={styles.tokenomicsSection}>
            <h3>Tokenomics</h3>

                <h4>Initail Distribution</h4>
            <div className={styles.initialDistribution}>


                
                    <div className={styles.circularProgress}>

                    </div>

                    <div className={styles.distributionDetails}>
                        <div className={styles.distributionItem}>
                            <span className={styles.distributionIcon}></span>
                            <p className={styles.distributionText}>Crowdsale investors: 80%</p>
                        </div>
                        <div className={styles.distributionItem}>
                            <span className={styles.distributionIcon}></span>
                            <p className={styles.distributionText}>Foundation: 20%</p>
                        </div>
                    </div>

             
            </div>

            <article className={styles.tokenomicsArticle}>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
                </p>
            </article>
        </section>
    )
}

export default Tokenomics