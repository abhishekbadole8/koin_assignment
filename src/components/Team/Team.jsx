import React from 'react'
import styles from "./Team.module.css";
import member from "../../assets/Mask Group.png";
import Suggestion from '../Suggestion/Suggestion';

function Team({ trendingCurrencyData }) {

    return (
        <section className={styles.teamSection}>
            <h3>Team</h3>

            <p className={styles.teamDescription}>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</p>

            <ul className={styles.teamContainer}>
                <li>
                    <article className={styles.teamArticle}>

                        <div className={styles.teamProfile}>
                            <div className={styles.teamImage}>
                                <img src={member} alt="Team Member" />
                            </div>

                            <p className={styles.teamName}>John Smith</p>
                            <span className={styles.teamRole}>Designation here</span>
                        </div>

                        <div className={styles.teamDeatils}>
                            <p className={styles.teamBio}>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                        </div>

                    </article>
                </li>

                <li>
                    <article className={styles.teamArticle}>

                        <div className={styles.teamProfile}>
                            <div className={styles.teamImage}>
                                <img src={member} alt="Team Member" />
                            </div>

                            <p className={styles.teamName}>John Smith</p>
                            <span className={styles.teamRole}>Designation here</span>
                        </div>

                        <div className={styles.teamDeatils}>
                            <p className={styles.teamBio}>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                        </div>

                    </article>
                </li>

                <li>
                    <article className={styles.teamArticle}>

                        <div className={styles.teamProfile}>
                            <div className={styles.teamImage}>
                                <img src={member} alt="Team Member" />
                            </div>

                            <p className={styles.teamName}>John Smith</p>
                            <span className={styles.teamRole}>Designation here</span>
                        </div>

                        <div className={styles.teamDeatils}>
                            <p className={styles.teamBio}>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</p>
                        </div>

                    </article>
                </li>
            </ul>

            <div className={styles.suggestionResContainer}>
                <Suggestion trendingCurrencyData={trendingCurrencyData} />
            </div>

        </section>
    )
}

export default Team