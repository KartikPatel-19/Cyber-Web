import { useState } from 'react'
import styles from './components.module.css'

const Carousel = (props) => {
    const [currIdx, setCurr] = useState(0)

    return (
        <div className={styles["carousel"]}>
            <button disabled={currIdx === 0} className={styles["carousel-btn"]}
                onClick={() => setCurr(currIdx-1)}>&lt;</button>
            <div className={styles["carousel-container"]} id="carousel">
                {props.info.map((item, index) => (
                    <div className={styles["carousel-item"] + " " + (
                        index + 1 === currIdx ? styles["carousel-left"] :
                        index === currIdx ? styles["carousel-center"] :
                        index === currIdx+1 ? styles["carousel-right"] : ""
                    )} key={index}>
                        <h3>{item.title}</h3>
                        <h4>{item.subtitle}</h4>
                        <p>{item.content}</p>
                        <h4>{item.subtitle2}</h4>
                        <ul>
                            <li>{item.content2a}</li>
                            <li>{item.content2b}</li>
                            <li>{item.content2c}</li>
                        </ul>
                        <h4>{item.subtitle3}</h4>
                        <p>{item.content3}</p>
                    </div>
                ))}
            </div>
            <button disabled={currIdx+1 === props.info.length} className={styles["carousel-btn"]}
                onClick={() => setCurr(currIdx+1)}>&gt;</button>
        </div>
    )
}

export default Carousel
