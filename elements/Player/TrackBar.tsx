import { useEffect } from "react"
import styles from "../../styles/Player.module.css"

type TTrackBar = {
    callback: Function,
    seek: Function 
}

const TrackBar = ({ callback, seek }: TTrackBar) => {

    useEffect(() => {
        callback()
    }, [])

    const handleClick = (event: any) => {
        const rect = event.target.getBoundingClientRect();
      
        const elemWidth = rect.width 
        const elemAbStartX = rect.left;
        const mouseAbsXPos = event.clientX;
       
        const percent = Math.floor((mouseAbsXPos - elemAbStartX) * 100 / elemWidth);
        
        console.log(percent);

        seek(percent);
        
    }

    return(
        <div className={styles.track_bar_container}>
            <div className={styles.track_bar}
                onClick={handleClick}>
                <div id="pointer" className={styles.pointer}></div>
            </div>
        </div>
    )
}

export default TrackBar