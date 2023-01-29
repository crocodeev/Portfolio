
import styles from '../../../styles/FifteenGame.module.css'
import Cell from './Cell';
import { TNumArrayDoubleDim } from "../types" 
import { useEffect, useState } from 'react';

const GameField = (props: {
    handleClick: Function,
    gameArray: TNumArrayDoubleDim,
}) => {

    const flat: JSX.Element[] = [];
    
    const cellArray = props.gameArray.reduce((flat, row, rowIndex) => {

        const cells = row.map((col, colIndex) => {
               
            return(<Cell key={rowIndex.toString() + col + Math.floor(Math.random()*1000)}
                number={col}
                row={rowIndex}
                col={colIndex}
                handleClick={props.handleClick} />)
        });

        return flat.concat(cells)

    }, flat)
    
   
    return(
        <div className={styles.game_field}>
            {cellArray}
        </div>
    )
}

export default GameField;