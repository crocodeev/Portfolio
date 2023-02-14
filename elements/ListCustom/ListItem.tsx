import { useRef } from "react"
import Bullet1 from "./Bullets/Bullet1"
import Bullet2 from "./Bullets/Bullet2"


type TListItem = {
    strokeColor: string,
    type: string,
    index: number,
    item: any
}

const ListItem = ({ strokeColor, index, type, item }: TListItem) => {

    const bulletMicroAnimation = useRef({
        on: () => {},
        off: () => {}
    })

    const Bullet = type === "links" ? 
    <Bullet2 strokeColor={strokeColor} /> 
    :
    <Bullet1 strokeColor={strokeColor} bulletMicroAnimation={bulletMicroAnimation.current}/>

    return(
        <div 
            key={index} 
            style={{ display: "flex", margin: "10px" }}
            onMouseEnter={bulletMicroAnimation.current.on}
            onMouseLeave={bulletMicroAnimation.current.off}
        >
            {Bullet}
            <div  style={{ marginTop: "2px", marginLeft: "10px" }}>
                {item}
            </div>
        </div>
    )
}


export default ListItem