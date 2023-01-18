import { useGameContext } from "./GameContext";
import styles from '../../../styles/MasterBrain.module.css';

const StepsCounter = () => {
    const { state } = useGameContext();
    
    return(<div className={styles.counter}>
      <h1 className={styles.counter_content}>
        STEPS: {state.steps}
      </h1>
      </div>)
  }

export default StepsCounter;  
