import { TWatchProps } from "./types"
import MemoizedDigit from "./Digit"
import Separator from "./Separator"
import WatchFilter from "./WatchFilter"
import { getTime, preciseTimer } from "./utils"
import { useEffect, useState } from "react"
import styles from '../../styles/Watch.module.css'

 const Watch =({
    colorOn,
    colorOff,
    skew
  }: TWatchProps) =>  {
    
    const currentTime = getTime();
    
    
    const [time, setTime] = useState({
      currentTime: currentTime, 
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
    
    return(
      <div className={styles.watch_container} style={{ transform: `skew(${skew}deg)`}}>
        <WatchFilter colorOn={colorOn}/>
        <MemoizedDigit colorOn={colorOn} colorOff={colorOff} digit={time.currentTime[0]}/>
        <MemoizedDigit colorOn={colorOn} colorOff={colorOff} digit={time.currentTime[1]}/>
        <Separator colorOn={colorOn} colorOff={colorOff} state={time.separator}/>
        <MemoizedDigit colorOn={colorOn} colorOff={colorOff} digit={time.currentTime[3]}/>
        <MemoizedDigit colorOn={colorOn} colorOff={colorOff} digit={time.currentTime[4]}/>
      </div>
    )
  } 
  
  export default Watch