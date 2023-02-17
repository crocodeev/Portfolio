import { useEffect } from "react"
import styles from "../../styles/Player.module.css"

type TTrackBar = {
    callback: Function
}

const TrackBar = ({ callback }: TTrackBar) => {

    useEffect(() => {
        callback()
    }, [])

    return(
        <div className={styles.track_bar_container}>
            <div className={styles.track_bar}>
                <div id="pointer" className={styles.pointer}></div>
            </div>
        </div>
    )
}

export default TrackBar