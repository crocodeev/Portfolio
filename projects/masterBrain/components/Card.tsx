import { useGameContext } from "./GameContext";
import { openCard } from "../actions";
import styles from '../../../styles/MasterBrain.module.css';

type TCard = {
    content: number,
    id: string
}

const Card = ({ content, id}: TCard) => {

    const { state, dispatch } = useGameContext();

    const isOpen = state.collect.includes(content) || state.stageIds.includes(id);
    
  const handleClick = () => {
      
      //disable click
      if(isOpen || state.stageIds.length === 2){
        return;
      };
        
          dispatch(openCard({ content, id}));
  }
  
  return(
  <div className={styles.flip_card}
    onClick={handleClick}>
      <div className={ isOpen ? 
          styles.flip_card_inner + " " + styles.rotate : styles.flip_card_inner}>
        <div className={styles.flip_card_front}>
        </div>
        <div className={styles.flip_card_back}>
          <h3 className={styles.card_content}>
            {String.fromCodePoint(content)}
            </h3>
        </div>
      </div>    
  </div>    
  )
}

export default Card