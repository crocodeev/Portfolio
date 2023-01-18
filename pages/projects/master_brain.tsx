import React from 'react';
import styles from '../../styles/MasterBrain.module.css';
import App from '../../projects/masterBrain/app';

const MasterBrain = () => {

    return(
        <div className={styles.masterbrain_container}>
            <App />
        </div>
    )
}

export default MasterBrain;