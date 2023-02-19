import { TBullet } from "./types"
import { useRef, forwardRef } from 'react'
 
const Bullet1 =  forwardRef(function Bullet ({ strokeColor, ref}: TBullet, ref ) {

    const middleWidth = useRef<HTMLDivElement>(null);
    const center = useRef<HTMLDivElement>(null);

        if(ref){
          console.log("Bullet 1");
          console.log("Change function");
          
          
          ref.on = () => {

            console.log("ON");
            
            
            if(middleWidth.current !== null && center.current !== null ){
              console.log("refs");
              
              middleWidth.current.style.width = "10px";
              center.current.style.display = "block";
            }
            
          }
      
      
          ref.off = () => {

            console.log("OFF");
    
            if(middleWidth.current !== null && center.current !== null){
              console.log("refs");
              
              middleWidth.current.style.width  = "5px";
              center.current.style.display = "none";
    
            }
            
          }
          console.log(ref.on.toString());
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
  })

  export default Bullet1