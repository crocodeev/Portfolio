import React from 'react';
import styles from '../../styles/FifteenGame.module.css';
import App from '../../projects/FifteenGame/app';

const FifteenGame = () => {

    return(
        <div className={styles.fifteen_game_container}>
            <App />
        </div>
    )
}

export default FifteenGame;