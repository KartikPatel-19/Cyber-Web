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

            <section className={`${styles["section-2"]} ${styles["section"]} ${styles["scroll-section"]}`} id="Info"></section>

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
        </main>
    )
}

export default Home