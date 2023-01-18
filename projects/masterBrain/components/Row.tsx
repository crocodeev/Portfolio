import Card from "./Card";
import styles from '../../../styles/MasterBrain.module.css';

type TRow = {
    content: Array<number>,
    id: string
}

const Row = ({content, id}: TRow) => {

    const cards = content.map((item, index) => (<Card content={item} id={index+id} />))

    return(<div className={styles.card_row}>{cards}</div>);
}

export default Row