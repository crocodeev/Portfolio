import NewGame from "./NewGame"
import Counter from "./Counter"
import HomeRun from "./HomeRun"
import styles from "../../../styles/FifteenGame.module.css"

const Controls = (props:{
    newGameCallback: Function,
    counter: any
}) => {

    return(
        <div className={styles.controls}>
            <NewGame callback={props.newGameCallback}/>
            <Counter counter={props.counter}/>
            <HomeRun />
        </div>
    )
}

export default Controls;