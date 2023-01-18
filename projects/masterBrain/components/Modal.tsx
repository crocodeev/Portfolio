import { useGameContext } from "./GameContext";
import { newGame } from "../actions";
import initializeState from "../initializeState";
import styles from '../../../styles/MasterBrain.module.css';

const  Modal = () => {
  
    const { state, dispatch } = useGameContext();
    
    const handleClick = () => {
      dispatch(newGame(initializeState(state.collectionName)))
    }
    
    return(
      <div id="myModal" className={
          state.gameEnd ? styles.modal + " " + styles.modal_open : styles.modal + " " + styles.modal_close
        }>
    <div className={styles.modal_content}>
      <h3>{`CONGRATULATIONS, YOU MADE ${state.steps} STEPS!`}</h3>
      <button className={styles.modal_button} onClick={handleClick}>START NEW GAME</button>
    </div>
    </div>)
  }

  export default Modal