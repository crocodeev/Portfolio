import { TBullet } from "./types"
import styles from "../ListCustomStyles.module.css"
import { useRef } from "react"

const Bullet3 = ({ strokeColor, bulletMicroAnimation }: TBullet ) => {

  const arrow = useRef(null);

  bulletMicroAnimation.on = () => {

    console.log(arrow.current);
    
        
    arrow.current.style.rotate = "90deg"

  }


  bulletMicroAnimation.off = () => {
    
    arrow.current.style.rotate = "0deg"

  }


    return(
      <div ref={arrow} style={{
        display: "flex"
      }}>
      
      <svg width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
        d="m8.37767,12.47842c0.45841,0 0.91681,0 1.37522,0c0,0.45841 0,0.91681 0,1.37522c-0.45841,0 -0.91681,0 -1.37522,0c0,-0.45841 0,-0.91681 0,-1.37522zm-1.98642,0c0.50934,0 1.01868,0 1.52802,0c0,0.45841 0,0.91681 0,1.37522c-0.50934,0 -1.01868,0 -1.52802,0c0,-0.45841 0,-0.91681 0,-1.37522zm-1.83362,0c0.50934,0 1.01868,0 1.52802,0c0,0.45841 0,0.91681 0,1.37522c-0.50934,0 -1.01868,0 -1.52802,0c0,-0.45841 0,-0.91681 0,-1.37522zm-1.83362,0c0.50934,0 1.01868,0 1.52802,0c0,0.45841 0,0.91681 0,1.37522c-0.50934,0 -1.01868,0 -1.52802,0c0,-0.45841 0,-0.91681 0,-1.37522zm5.65367,2.83594c0.48388,-0.03105 0.96774,0.02194 1.45162,-0.00911c0.03105,-0.48387 0.01667,-0.96775 0.04771,-1.45162c0.45283,0 0.95108,0 1.4039,0c0,-0.45841 0,-0.91681 0,-1.37522c-0.45841,0 -0.91681,0 -1.37522,0c0,-0.50934 0,-1.01868 0,-1.52802c-0.50934,0 -1.01868,0 -1.52802,0c0,-0.45841 0,-0.91681 0,-1.37522c0.50934,0 1.01868,0 1.52802,0c0,0.45841 0,0.91681 0,1.37522c0.45282,0 0.95108,-0.02271 1.4039,-0.02271c0.03105,0.48387 0.01667,0.99046 0.04771,1.47433c0.48387,0.03105 0.97457,-0.00263 1.45844,0.02841c0,0.45282 -0.00683,0.97038 -0.00683,1.4232c-0.50934,0 -1.01868,0 -1.52802,0c0,0.50934 0,1.01868 0,1.52802c-0.45841,0 -0.91681,0 -1.37522,0c0,0.45841 0,0.91681 0,1.37522c-0.50934,0 -1.01868,0 -1.52802,0c0,-0.45282 0,-0.98968 0,-1.44251l0,0z"
        stroke={strokeColor} 
        strokeWidth="2" 
        strokeLinecap="round"/>
      </svg>

      </div>
    )
  }

  export default Bullet3