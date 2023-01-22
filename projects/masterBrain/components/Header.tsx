import StepsCounter from "./StepCounter";
import CollectionSelector from "./CollectionSelector";
import styles from '../../../styles/MasterBrain.module.css'
import HomeRun from "./HomeRun";

const Header = () => {
  
    return(
      <div className={styles.header}>
        <StepsCounter />
        <CollectionSelector />
        <HomeRun />
      </div>
    )
  }


export default Header