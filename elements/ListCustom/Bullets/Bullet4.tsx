import { TBullet } from "./types"
import styles from "../ListCustomStyles.module.css"
import { useRef } from "react"

const Bullet4 = ({ strokeColor, bulletMicroAnimation }: TBullet ) => {


    const bullet = useRef<SVGSVGElement>(null);

    if(bulletMicroAnimation){
        bulletMicroAnimation.on = () => {
            
        bullet.current !== null && (bullet.current.style.rotate = "360deg")
    
      }
    
    
      bulletMicroAnimation.off = () => {
        
        bullet.current !== null && (bullet.current.style.rotate = "0deg")
    
      }
    }

   
    return(
      <div 
      style={{
        display: "flex",
        transition: "rotate 0.5s"
      }}>
      
      <svg ref={bullet} width="15" height="26" viewBox="0 0 15 26" fill={strokeColor} >
        <path d="m0.21919,12.63255l14.62963,0m-14.62963,0l7.31483,-7.33922l7.3148,7.33922l-7.3148,7.3392l-7.31483,-7.3392z" />
      </svg>

      </div>
    )
  }

  export default Bullet4