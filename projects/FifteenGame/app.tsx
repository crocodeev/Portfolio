import { useState, useRef } from "react";
import DummyField from "./components/DummyField";
import GameField from "./components/GameField";
import Modal from "./components/Modal";
import { randomInitialArray, currentPosition, mutateArray, isWinner } from "./utils";
import { EDirections, EResult } from "./types";
import styles from "../../styles/FifteenGame.module.css";
import Controls from "./components/Controls";


const App = () => {

    const initialGameArray = randomInitialArray();

    const [gameState, setGameState] = useState({
        gameArray: initialGameArray,
        result: EResult.RESUME,
    })

    const gameArray = useRef(initialGameArray)

    const counter = useRef({})


    const cellClickHandler = (number: number, callback: Function) => {

        if(!number){
            return
        }

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
        
        if(direction){
            
            
            const newArray = mutateArray(gameArray.current, zero, cell, number)
            callback(direction)

            counter.current.increase()

            const result  = isWinner(newArray)

            if(result === EResult.WIN){
                setGameState((gameState) => {
                    return {
                        ...gameState,
                        result: EResult.WIN
                    }
                })
            }else if(result === EResult.FAIL){
                setGameState((gameState) => {
                    return {
                        ...gameState,
                        result: EResult.FAIL
                    }
                })
            }
        
        }
        
    }

    const newGameHandler = () => {
        const initialGameArray = randomInitialArray();
        gameArray.current = initialGameArray;

        counter.current.reset()

        setGameState((gameState) => {
            return {
                gameArray: initialGameArray,
                result: EResult.RESUME,
            }
            
        })


    }

    return(
        <>  
            <div className={styles.dummy_background}></div>
            <Modal result={gameState.result}/>
            <Controls 
            newGameCallback={newGameHandler}
            counter={counter.current}/>
            <GameField 
            handleClick={cellClickHandler}
            gameArray={gameArray.current}/>
            <DummyField />
        </>
    )
}

export default App;