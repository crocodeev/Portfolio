import React from "react";
import initializeState from "../initializeState";
import { selectCollection } from "../actions";
import collections from "../constants";
import { useGameContext } from "./GameContext";
import styles from '../../../styles/MasterBrain.module.css';

const CollectionSelector = () => {
  
    const { state, dispatch } = useGameContext();
    
    const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const collectionName = event.target.value;
      const newState = initializeState(collectionName);
      
      dispatch(selectCollection(newState))
    }
    
    return(
      <div className={styles.select_container}>
        
        <h1 className={styles.select_label}>SELECT COLLECTION:</h1>
        
        <select onChange={changeHandler} 
          name="collection"
          className={styles.collection_select}>
         {Object.keys(collections).map((item, index) => { 
            return (<option value={item} key={index}>
              {item}
              </option>)
         })}
        </select>
        <h1 className={styles.collection_label}>{
          String.fromCodePoint(state.gameArray[0][0])}</h1>
      </div>
    )
    
  }

  export default CollectionSelector