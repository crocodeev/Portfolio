import styles from "../../../styles/FifteenGame.module.css"

const NewGame = (props: { callback: Function}) => {

    return(<button
    onClick={props.callback}
    className={styles.new_game}    
    >NEW GAME</button>)
} 

export default NewGame