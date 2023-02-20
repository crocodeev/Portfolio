import styles from '../../styles/Player.module.css'
import 'material-icons/iconfont/material-icons.css';

type TControlButton = {
    title: string,
    callback: any,
    state: boolean
}

const ControlButton = ({title, callback, state}: TControlButton) => {



    const styleOut = state ? `${styles.btn_out} ${styles.btn_out_clicked}` : styles.btn_out 
    const styleIn = state ? `${styles.btn_in} ${styles.btn_in_clicked}` : styles.btn_in 

    return(
        <div className={styleOut} onClick={callback}>
            <div className={styleIn}>
                <span className="material-icons">{`${title}_arrow`}</span> 
            </div>
        </div>
    )
}

export default ControlButton