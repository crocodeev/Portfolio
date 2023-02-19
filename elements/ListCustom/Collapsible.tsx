import Bullet3 from "./Bullets/Bullet3"
import { useRef, useState } from "react"

type TCollapsible = {
    item:{
        title: string,
        collection: Array<string>
    },
    strokeColor: string   
}

const Collapsible = ({item, strokeColor}:TCollapsible) => {

    const [isOpen, setIsOpen ] = useState(false)

    const bulletMicroAnimation = useRef({
        on: () => {},
        off: () => {}
    })

    const handleClick = () => {

        if(isOpen){
            bulletMicroAnimation.current.off()
        }else{
            bulletMicroAnimation.current.on()
        }

        setIsOpen(!isOpen)

    } 

    const childrens = item.collection.map((item, index) => {
        return(
            <li key={index} style={{ userSelect: "none", fontSize: "0.8em", margin: "0.2em" }}>{item}</li>
        )
    });

    const subList = <ul>{childrens}</ul>
    

    return(
        <div 
            style={{ display: "flex", margin: "10px" }}
            onClick={handleClick}
        >
                <Bullet3 strokeColor={strokeColor} bulletMicroAnimation={bulletMicroAnimation.current}/>       
                <div  style={{ marginTop: "2px", marginLeft: "10px", userSelect: "none"}}>
                    {item.title}  

                    <div style={{ margin: "5px"}}>
                    { isOpen ? subList : null}  
                    </div> 

                </div>      
            </div>
    )

}

export default Collapsible