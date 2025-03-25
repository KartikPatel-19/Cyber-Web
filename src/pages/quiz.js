import { useState } from 'react'
import { Link } from "react-router"

import styles from '../styles/quiz.module.css'
import Happy from "../images/happy.png"
import Confused from "../images/confused.png"
import Sad from "../images/confounded.png"

function Quiz() {
    const [currIdx, setCurrIdx] = useState(0)
    const [right, setRight] = useState(0)

    let resColor, resEmoji;
    if (right <= questions.length / 3) {
        resColor = "#ab0306"
        resEmoji = Sad
    } else if (right <= questions.length / 2) {
        resColor = "#FFD700"
        resEmoji = Confused
    } else {
        resColor = "#0ba312"
        resEmoji = Happy
    }


    return (
        <main className={styles["main"]}>
            <div className={styles["quiz-container"]} id={styles["quiz-container"]}>
                {currIdx < questions.length ?
                    <>
                        <div className={styles["progress-bar"]} id={styles["progress-bar"]}>
                            <div className={styles["progress"]} id={styles["progress"]} style={{ width: `${(currIdx) * 10}%` }}></div>
                        </div>
                        <div className={styles["question"]}>{questions[currIdx].question}</div>
                        {questions[currIdx].options.map((option, idx) =>
                            <Option handler={(valid) => {
                                setRight(right + valid)
                                setTimeout(() => { setCurrIdx(currIdx + 1) }, 1000)
                            }} key={idx} option={option} correct={questions[currIdx].correct} />
                        )}
                    </> :
                    <>
                        <h2>We have submitted your response.<span>Here is your result.</span></h2>
                        <h2 style={{ color: resColor }}>{right} / {questions.length}</h2>
                        <img src={resEmoji} width="132" height="132" alt="Emoji" />
                    </>
                }
            </div>
            {currIdx < questions.length ? <></> :
                <Link to="/" id={styles["back"]}>Back to Home</Link>
            }
        </main>
    )
}

export default Quiz


function Option(props) {
    const [option, setOption] = useState()
    const [valid, setValid] = useState(undefined)

    if (option !== props.option) {
        setOption(props.option)
        setValid(undefined)
    }

    return (
        <div className={`${styles["option"]} ${valid === undefined ? "" : valid ? styles["correct"] : styles["wrong"]}`}
            onClick={(event) => {
                if (props.option === props.correct) {
                    props.handler(true)
                    setValid(true)
                } else {
                    props.handler(false)
                    setValid(false)
                }
            }}>{props.option}</div>
    )
}


const questions = [
    {
        question:
            "What is the most common type of cyberattack targeting individuals?",
        options: [
            "Phishing",
            "Ransomware",
            "DDoS (Distributed Denial of Service)",
            "Malware",
        ],
        correct: "Phishing",
        type: "easy",
    },
    {
        question: "What does 'phishing' refer to in the context of cybersecurity?",
        options: [
            "Using fake websites to steal personal information",
            "Tracking online activity for marketing purposes",
            "Sending fake emails to trick people into giving sensitive information",
            "Hacking into Wi-Fi networks to steal data",
        ],
        correct:
            "Sending fake emails to trick people into giving sensitive information",
        type: "medium",
    },
    {
        question: "Which of the following is a strong password practice?",
        options: [
            "Using your pet's name and birth year",
            "Creating a long password with a mix of letters, numbers, and symbols",
            "Reusing the same password for every account",
            "Writing your password down in a notebook for easy access",
        ],
        correct:
            "Creating a long password with a mix of letters, numbers, and symbols",
        type: "easy",
    },
    {
        question:
            "What should you do if you receive an email asking for personal information from an unfamiliar source?",
        options: [
            "Respond with the requested information",
            "Open any links or attachments in the email",
            "Mark the email as spam and delete it",
            "Forward the email to your friends to warn them",
        ],
        correct: "Mark the email as spam and delete it",
        type: "hard",
    },
    {
        question: "How often should you update your passwords for online accounts?",
        options: [
            "Every 1-2 years",
            "Every month",
            "Only when you forget your password",
            "Every 3-6 months",
        ],
        correct: "Every 3-6 months",
        type: "medium",
    },
    {
        question: "Which of these is a sign that a website may not be secure?",
        options: [
            "The website uses 'https://' instead of 'http://'",
            "There is a padlock symbol in the browser's address bar",
            "The website asks for personal information without any explanation",
            "The website has a green color scheme",
        ],
        correct:
            "The website asks for personal information without any explanation",
        type: "hard",
    },
    {
        question:
            "What should you do if you suspect that your computer has been infected with malware?",
        options: [
            "Ignore it and continue working",
            "Disconnect from the internet and run an antivirus scan",
            "Try to remove the malware manually",
            "Share the infection with others to warn them",
        ],
        correct: "Disconnect from the internet and run an antivirus scan",
        type: "easy",
    },
    {
        question: "Why is it important to use two-factor authentication (2FA)?",
        options: [
            "It makes your accounts look more professional",
            "It helps to protect your account even if your password is compromised",
            "It makes it easier to share your accounts with friends",
            "It speeds up the login process",
        ],
        correct:
            "It helps to protect your account even if your password is compromised",
        type: "medium",
    },
    {
        question: "What is a 'secure' Wi-Fi network?",
        options: [
            "Using fake websites to steal personal information",
            "Tracking online activity for marketing purposes",
            "Sending fake emails to trick people into giving sensitive information",
            "Hacking into Wi-Fi networks to steal data",
        ],
        correct: "Hacking into Wi-Fi networks to steal data",
        type: "easy",
    },
    {
        question:
            "What is the best way to protect your personal information when using public Wi-Fi?",
        options: [
            "Share your personal information freely, since its usually safe",
            "Use a Virtual Private Network (VPN) to encrypt your connection",
            "Avoid logging into any accounts while using public Wi-Fi",
            "Both B and C",
        ],
        correct: "Both B and C",
        type: "hard",
    },
];