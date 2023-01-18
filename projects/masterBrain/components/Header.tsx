import StepsCounter from "./StepCounter";
import CollectionSelector from "./CollectionSelector";
import styles from '../../../styles/MasterBrain.module.css'

const Header = () => {
  
    return(
      <div className={styles.header}>
        <StepsCounter />
        <CollectionSelector />  
      </div>
    )
  }


export default Header