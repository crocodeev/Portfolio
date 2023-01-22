import styles from '../../../styles/FifteenGame.module.css'
import Cell from './Cell';

const arr = [1,2]

const GameField = () => {


    return(
        <div className={styles.game_field}>
            {
                arr.map((item,index) => <Cell key={index} number={item} chid="asd"/>)
            }
        </div>
    )
}

export default GameField;