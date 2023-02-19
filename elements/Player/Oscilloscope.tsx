import { useEffect } from "react"
import styles from '../../styles/Player.module.css'

type TOscilloscope =  {
  callback: Function
}

const Oscilloscope = ({ callback }: TOscilloscope) => {


    useEffect(() => {
      callback();
    }, [])

    return(
      <div className={styles.osc}>
        <canvas id="oscilloscope" width="300" height="150"></canvas>
      </div>  
    )
}

export default Oscilloscope