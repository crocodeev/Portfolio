import React, { useEffect } from "react";
import GameContextProvider from "./components/GameContext";
import reducer from "./reducer";
import withEnhancer from "./withEnchancer";
import initializeState from "./initializeState";
import { gameEnd } from "./actions";
import Row from "./components/Row";
import styles from '../../styles/MasterBrain.module.css';
import Header from "./components/Header";
import Modal from "./components/Modal";

const App = () => {

    const [ state, dispatch ] = withEnhancer(reducer, initializeState());

    useEffect(() => {
        if(state.collect.length === state.threshold){
            dispatch(gameEnd())
    }
    });

    return(
        <GameContextProvider state={state} dispatch={dispatch}>
            <div>
            <Header />
            <Modal />
            <div className={styles.card_field}>
                <div>
                    {state.gameArray.map((item, index) => <Row content={item} id= {index.toString()}/>)}
                </div>
            </div>
            </div>
        </GameContextProvider>
    )
}

export default App