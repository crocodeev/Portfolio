import { useState, useRef } from "react";
import DummyField from "./components/DummyField";
import GameField from "./components/GameField";
import { randomInitialArray, currentPosition, mutateArray } from "./utils";
import { win, fail } from "./constants";
import { EDirections } from "./types";
import styles from "../../styles/FifteenGame.module.css";


const App = () => {

    const exgameArray = randomInitialArray();
    const gameArray = useRef(randomInitialArray());

    const [state, setState] = useState({
        current: exgameArray,
        etalons: {
            win: win,
            fail: fail
        },
        steps:0
    })

    const cellClickHandler = (number: number, callback: Function) => {

        if(!number){
            console.log("ZERO FIELD");
            return
        }
        console.log("NUMBER");
        console.log(number);
        const cell = currentPosition(number, gameArray.current);
        const zero: { x: undefined|number, y: undefined|number} = { x: undefined, y: undefined};
        let direction: EDirections | undefined = undefined
        if(gameArray.current[cell.y - 1] && gameArray.current[cell.y -1][cell.x] === 0){
            zero.y = cell.y - 1
            zero.x = cell.x
            direction = EDirections.UP 
        }
        if ( gameArray.current[cell.y][cell.x - 1] === 0 ){
            zero.y = cell.y
            zero.x = cell.x - 1
            direction = EDirections.LEFT 
        }
        if ( gameArray.current[cell.y][cell.x + 1] === 0){
            zero.y = cell.y
            zero.x = cell.x + 1
            direction = EDirections.RIGHT
        }
        if(gameArray.current[cell.y + 1] && gameArray.current[cell.y + 1][cell.x] === 0){
            zero.y = cell.y + 1
            zero.x = cell.x
            direction = EDirections.DOWN 
        }
        
        console.log(direction)
        console.log(zero)
        if(direction){
            
            console.log(gameArray.current);
            
            const newArray = mutateArray(gameArray.current, zero, cell, number);
            console.log(newArray);
            
            callback(direction);
        
        }
        
    }

    return(
        <>
            <div className={styles.dummy_background}></div>
            <GameField 
            handleClick={cellClickHandler}
            gameArray={gameArray.current}/>
            <DummyField />
        </>
    )
}

export default App;