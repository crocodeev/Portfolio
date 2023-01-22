import styles from '../../../styles/FifteenGame.module.css'

const DummyField = () => {

    return(
    <div className={styles.dummy_field}>
      <div className={styles.dummy_row}>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
      </div>
      <div className={styles.dummy_row}>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
      </div>
      <div className={styles.dummy_row}>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
      </div>
      <div className={styles.dummy_row}>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
        <div className={styles.dummy_cell}></div>
      </div>
    </div>  
    )
}

export default DummyField