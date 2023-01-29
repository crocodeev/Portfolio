import { useState } from "react"
import styles from "../../../styles/FifteenGame.module.css"

const Counter = (props: { counter: any}) => {

    const [steps, setSteps] = useState(0)

    props.counter.increase = () => {
        setSteps(steps + 1)
    }

    props.counter.reset = () => {
        setSteps(0)
    }
 

    return(<div
    className={styles.counter} 
    >{steps}</div>)
} 

export default Counter