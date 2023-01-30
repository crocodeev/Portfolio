import { TWatchProps } from "./types"
import Digit from "./Digit"
import Separator from "./Separator"
import { getTime, preciseTimer } from "./utils"
import { useEffect, useState } from "react"
import styles from '../../styles/Watch.module.css'

const symbols = [
    [1,1,1,1,1,1,0],
    [0,1,1,0,0,0,0],
    [1,1,0,1,1,0,1],
    [1,1,1,1,0,0,1],
    [0,1,1,0,0,1,1],
    [1,0,1,1,0,1,1],
    [1,0,1,1,1,1,1],
    [1,1,1,0,0,0,0],
    [1,1,1,1,1,1,1],
    [1,1,1,1,0,1,1]
  ]

 const Watch =({
    colorOn,
    colorOff,
    skew
  }: TWatchProps) =>  {
    
    
    const [time, setTime] = useState({
      currentTime: getTime(), 
      separator: true})
    
    useEffect(() => {
      preciseTimer(  () => {
        
        setTime((time) => {
        
      const newTime = getTime();
      
      
      if(newTime > time.currentTime){
          return {
          currentTime: newTime,  
          separator: !time.separator
        }
      }else{
         return {
          ...time, 
          separator: !time.separator
        }
      }   
  })
        
      }, 1000)
    },[])

    console.log(typeof time.currentTime[0]);
    
    
    return(
      <div className={styles.watch_container} style={{ transform: `skew(${skew}deg)`}}>
        <Digit colorOn={colorOn} colorOff={colorOff} segments={symbols[time.currentTime[0]]}/>
        <Digit colorOn={colorOn} colorOff={colorOff} segments={symbols[time.currentTime[1]]}/>
        <Separator colorOn={colorOn} colorOff={colorOff} state={time.separator}/>
        <Digit colorOn={colorOn} colorOff={colorOff} segments={symbols[time.currentTime[3]]}/>
        <Digit colorOn={colorOn} colorOff={colorOff} segments={symbols[time.currentTime[4]]}/>
      </div>
    )
  } 
  
  export default Watch