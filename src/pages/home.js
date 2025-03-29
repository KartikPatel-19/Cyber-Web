import { Link } from 'react-router'

import styles from '../styles/home.module.css'
import quizBtn from '../images/quiz-start.svg'

function Home() {
    return (
        <main>
            <section className={`${styles["section-1"]} ${styles["scroll-section"]}`}>
                <div className={styles["main-question"]}>
                    <h1 className={styles["question"]}>Is your Online Presence as <span style={{ color: "#ab0306" }}>SECURE</span> as you think?</h1>
                    <div>
                        <a href="#Quiz"><button className={`${styles["btn"]} ${styles["btn-yes"]}`}></button></a>
                        <a href="#Info"><button className={`${styles["btn"]} ${styles["btn-no"]}`}></button></a>
                    </div>
                </div>
            </section>

            <section className={`${styles["section-2"]} ${styles["section"]} ${styles["scroll-section"]}`} id="Info">
                <div className={styles["carousel-container"]}>
                    <button className={styles["carousel-btn"]} onClick={() => scrollCarousel(-1)}>&lt;</button>
                    <div className={styles["carousel"]} id="carousel">
                        <div className={styles["carousel-item"]}>
                            <h3>Tile 1</h3>
                            <p>Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.</p>
                        </div>
                        <div className={styles["carousel-item"]}>
                            <h3>Tile 2</h3>
                            <p>Phishing attacks are one of the most common methods used by attackers to steal sensitive information.</p>
                        </div>
                        <div className={styles["carousel-item"]}>
                            <h3>Tile 3</h3>
                            <p>Always use strong and unique passwords for your accounts to enhance security.</p>
                        </div>
                        <div className={styles["carousel-item"]}>
                            <h3>Tile 4</h3>
                            <p>Two-factor authentication adds an extra layer of security to your online accounts.</p>
                        </div>
                        <div className={styles["carousel-item"]}>
                            <h3>Tile 5</h3>
                            <p>Regularly updating your software helps protect against known vulnerabilities.</p>
                        </div>
                    </div>
                    <button className={styles["carousel-btn"]} onClick={() => scrollCarousel(1)}>&gt;</button>
                </div>
            </section>

            <section className={`${styles["section-3"]} ${styles["section"]} ${styles["scroll-section"]}`}>
                <div className={`${styles["message"]} ${styles["message-video"]}`}>
                    <h2>Here is a Video to help you understand more about Cyber Awareness.</h2>
                    <iframe title="Video on Cyber Awareness" width="960" height="540" src="https://www.youtube.com/embed/i0iLy8racHI" frameBorder="0" allowFullScreen />
                </div>
            </section>

            <section className={`${styles["section-4"]} ${styles["section"]} ${styles["scroll-section"]}`} id="Quiz">
                <div className={`${styles["quiz-message"]} ${styles["message"]}`}>
                    <h2>Let&apos;s take a Quick Quiz to test your Awareness about <span style={{ color: "#ab0306" }}>Cyber Threats</span></h2>
                    <Link to="/quiz/">
                        <button className={styles["btn-quiz"]}><img src={quizBtn} alt="Icon" /></button>
                    </Link>
                </div>
            </section>

            <section className={`${styles["section-5"]} ${styles["section"]} ${styles["scroll-section"]}`} id={styles["demo"]}></section>
            <section className={`${styles["section-6"]} ${styles["section"]} ${styles["scroll-section"]}`}></section>

            <footer>
                &copy; {new Date().getFullYear()} Team No 13 (Kartik Patel - 24BRS1383 &amp; V Srivatsan - 24BRS1381). All Rights Reserved.
            </footer>
        </main>
    );

    function scrollCarousel(direction) {
        const carousel = document.getElementById("carousel");
        const scrollAmount = carousel.offsetWidth;
        carousel.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
}

export default Home