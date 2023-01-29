import { EResult } from "../types"
import styles from "../../../styles/FifteenGame.module.css"

const Modal = (props: { result: EResult | undefined}) => {

    let messageH
    const messageP = "anyway, half of all initial configurations cannot be solved"

    if(props.result === EResult.FAIL){
        messageH = "SORRY, YOU LOSE!"
    }else{
        messageH = "AWESOME, YOU WON!"
    }

    return(<div className={styles.fifteen_game_modal} 
        style={ props.result !== EResult.RESUME ? { display: "flex" } : { display: "none"}}>
        <h1>{messageH}</h1>
        <p>{messageP}</p>
    </div>)

}

export default Modal