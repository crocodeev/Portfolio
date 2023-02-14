import { TBullet } from "./types"
import styles from "../ListCustomStyles.module.css"

const Bullet2 = ({ strokeColor }: TBullet ) => {


    

  
    return(
      <div style={{
        display: "flex"
      }}>
      
      <svg  width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className={styles.anima_arrow}
        style={{ animationDelay: "1s"}} 
        d="M2 24L12 13L2 2" 
        stroke={strokeColor} 
        strokeWidth="3" 
        strokeLinecap="round"/>
      </svg>

      <div style={{width: "0px"}}>
        </div>


      <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
        className={styles.anima_arrow}
        style={{ animationDelay: "1.5s"}} 
        d="M2 24L12 13L2 2" 
        stroke={strokeColor} 
        strokeWidth="3" 
        strokeLinecap="round"/>
      </svg>

      <div style={{width: "0px"}}>
        </div>
        
      <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path 
         className={styles.anima_arrow}
         style={{ animationDelay: "3s"}} 
         d="M2 24L12 13L2 2" 
         stroke={strokeColor} 
         strokeWidth="3" 
         strokeLinecap="round"/>
      </svg>

      </div>
    )
  }

  export default Bullet2