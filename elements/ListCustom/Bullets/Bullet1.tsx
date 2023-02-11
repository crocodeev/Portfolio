import { TBullet } from "./types"

const Bullet1 = ({ strokeColor}: TBullet ) => {

  
    return(
      <div style={{
        display: "flex"
      }}>
      
       <div> 
        <svg width="8" height="26" viewBox="0 0 8 26" fill="none" >
            <path d="M8 2H2V24H8" stroke={strokeColor} strokeWidth="2"/>
        </svg>
      </div> 

        <div style={{width: "5px"}}>
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