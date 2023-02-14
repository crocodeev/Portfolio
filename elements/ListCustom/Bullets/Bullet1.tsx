import { TBullet } from "./types"
import { useRef } from 'react'
 
const Bullet1 = ({ strokeColor, bulletMicroAnimation}: TBullet ) => {

    const middleWidth = useRef(null);
    const center = useRef(null);

  
    bulletMicroAnimation.on = () => {
        
      middleWidth.current.style.width = "10px";
      center.current.style.display = "block";
    }


    bulletMicroAnimation.off = () => {
      
      middleWidth.current.style.width  = "5px";
      center.current.style.display = "none";
    }


  
    return(
      <div style={{
        display: "flex"
      }} >
      
       <div> 
        <svg width="8" height="26" viewBox="0 0 8 26" fill="none" >
            <path d="M8 2H2V24H8" stroke={strokeColor} strokeWidth="2"/>
        </svg>
      </div> 

        <div ref={middleWidth} style={{width: "5px", 
        transition: "width 0.1s", 
        display: "flex", 
        justifyContent: "center",
        paddingLeft: "1px",
        paddingTop: "6px" }}>
          <div
          ref={center}
          style={{
            backgroundColor: strokeColor,
            height: "50%",
            width: "50%"
          }}></div>
        </div>

      <div>
        <svg width="8" height="26" viewBox="0 0 8 26" fill="none" >
                <path d="M-2.68221e-07 24H6L6 2H-2.68221e-07" stroke={strokeColor} strokeWidth="2"/>
        </svg>
      </div>
        
        
      </div>
    )
  }

  export default Bullet1