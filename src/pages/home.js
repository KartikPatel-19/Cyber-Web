import { Link } from 'react-router'

import styles from '../styles/home.module.css'
import quizBtn from '../images/quiz-start.svg'

import Carousel from '../components/carousel';

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
                <Carousel info={[
                    {
                        title: 'Phishing Awareness',
                        subtitle: 'Recognize the Threat',
                        content: 'Phishing remains the most common attack vector, responsible for 41% of all incidents. Learn to identify suspicious emails, links, and attachments to protect yourself and your organization.',
                        subtitle2:'Types to Watch For',
                        content2a:'* Domain spoofing: Attackers impersonating legitimate companies',
                        content2b:'* HTTPS phishing: Malicious websites appearing secure',
                        content2c:'* Spear phishing: Targeted attacks using personalized information',
                        subtitle3: 'Protection Tips',
                        content3: 'Use phishing simulations to test and reinforce your ability to spot both general phishing attempts and sophisticated targeted attacks.'
                    },
                    {
                        title: 'Password Security',
                        subtitle: 'Create Strong Passwords',
                        content: 'Weak passwords are an easy entry point for cybercriminals. Use unique passwords with a combination of uppercase and lowercase letters, numbers, and symbols.',
                        subtitle2:'Best Practices',
                        content2a:'* Ban password reuse across different accounts',
                        content2b:'* Use a password manager to create and store complex passwords',
                        content2c:'* Change passwords regularly according to a schedule',
                        subtitle3: 'Avoid Common Mistakes',
                        content3: 'Never share passwords through documents, email, or text messages, and don`t write them down where others can find them.'
                    },
                    {
                        title: 'Ransomware Protection',
                        subtitle: 'What is Ransomware?',
                        content: 'Ransomware is malicious software that encrypts files until a ransom is paid. It has evolved to include extracting and threatening to expose sensitive information.',
                        subtitle2:'Prevention Steps',
                        content2a:'* Keep all software and systems updated',
                        content2b:'* Install malware protection and anti-spam software',
                        content2c:'* Be cautious of suspicious attachments and links',
                        subtitle3: 'Response Plan',
                        content3: 'Develop an incident response plan that includes isolating affected systems, reporting to authorities, and having a recovery strategy in place.'
                    },
                    {
                        title: 'Mobile Device Security',
                        subtitle: 'Protect Your Mobile Devices',
                        content: 'Mobile devices often contain sensitive personal and corporate information that needs protection.',
                        subtitle2:'Security Measures',
                        content2a:'* Manage app permissions carefully',
                        content2b:'* Only install apps from trusted sources',
                        content2c:'* Use device encryption',
                        subtitle3: 'App Security',
                        content3: 'Review the permissions requested by apps and limit access to only what`s necessary for functionality.'
                    },
                    {
                        title: 'Multi-Factor Authentication',
                        subtitle: 'Beyond Passwords',
                        content: 'Multi-factor authentication requires multiple pieces of evidence to verify identity:',
                        subtitle2:'',
                        content2a:'* Something you know (password/PIN)',
                        content2b:'* Something you have (smartphone/token)',
                        content2c:'* Something you are (biometrics)',
                        subtitle3: 'Implementation Benefits',
                        content3: 'Even if passwords are compromised, MFA provides an additional layer of security that significantly reduces the risk of unauthorized access.'
                    },
                    {
                        title: 'Safe Internet Browsing',
                        subtitle: 'Browse Securely',
                        content: 'Secure browsing means protecting your personal and sensitive information while using the internet.',
                        subtitle2:'Best Practices',
                        content2a:'* Use browsers with built-in security features',
                        content2b:'* Install ad-blockers and anti-tracking extensions',
                        content2c:'* Verify website security (look for HTTPS)',
                        subtitle3: 'Recognize Warning Signs',
                        content3: 'Learn to identify suspicious websites, misleading URLs, and potential scam indicators before clicking.'
                    },
                    {
                        title: 'Data Protection',
                        subtitle: 'Safeguard Your Information',
                        content: 'Data security involves protecting digital information from unauthorized access, corruption, or theft.',
                        subtitle2:'Protection Strategies',
                        content2a:'* Classify data based on sensitivity',
                        content2b:'* Use encryption for sensitive information',
                        content2c:'* Regularly back up important data',
                        subtitle3: 'Data Handling Guidelines',
                        content3: 'Follow proper procedures for storing, sharing, and disposing of sensitive information to prevent data breaches.'
                    },
                ]} />
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
                &copy; {new Date().getFullYear()} Team No 13 (
                Kartik Patel - 24BRS1383 &amp; &nbsp;
                <a style={{ color: 'white' }} href="https://srivatsan.vercel.app" target="_blank" rel="noopener noreferrer">V Srivatsan - 24BRS1381</a>
                ). All Rights Reserved.
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