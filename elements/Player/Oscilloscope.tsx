import { useEffect } from "react"

type TOscilloscope = () => {
  callback: Function
}

const Oscilloscope = ({callback}: TOscilloscope) => {


    useEffect(() => {
      callback();
    }, [])

    return(
        <canvas id="oscilloscope" width="300" height="150"></canvas>
    )
}

export default Oscilloscope