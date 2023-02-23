import Bullet3 from "./Bullets/Bullet3"
import { useRef, useState } from "react"
import styles from "../../styles/Home.module.css"

type TCollapsible = {
    item:{
        title: string,
        details?: {
            description: string,
            link?: string
        },
        collection?: Array<string>,
    },
    strokeColor: string   
}

const Collapsible = ({item, strokeColor}:TCollapsible) => {

    console.log("Collapsible");
    
    console.log(item);
    

    const [isOpen, setIsOpen ] = useState(false)

    const bulletMicroAnimation = useRef<any>(null)

    const handleClick = () => {

        if(isOpen){
            bulletMicroAnimation.current !== null && bulletMicroAnimation.current.off()
        }else{
            bulletMicroAnimation.current !== null && bulletMicroAnimation.current.on()
        }

        setIsOpen(!isOpen)

    }
    

    if(item.hasOwnProperty("collection")){

        const childrens = item.collection?.map((item, index) => {
            return(
                <li key={index} style={{ 
                    userSelect: "none", 
                    fontSize: "1em", 
                    margin: "0.2em",
                    fontFamily: "Roboto Light"}}>{item}</li>
            )
        });

        const subList = <ul>{childrens}</ul>

        return(
            <div 
                style={{ display: "flex", margin: "10px" }}
                onClick={handleClick}
            >
                    <Bullet3 strokeColor={strokeColor} ref={bulletMicroAnimation}/>       
                    <div  style={{ marginTop: "2px", marginLeft: "10px", userSelect: "none"}}>
                        {item.title}  
    
                        <div style={{ margin: "5px"}}>
                        { isOpen ? subList : null}  
                        </div> 
    
                    </div>      
                </div>
        )

    }else{

        const content = (
            <div>
                <p className={styles.roboto}>{ item.details && item.details.description}</p>
                { item.details?.link && <a className={styles.roboto} target="_blank" href={item.details.link}>link</a>}
            </div>
        )

        return(
            <div 
                style={{ display: "flex", margin: "10px" }}
                onClick={handleClick}
            >
                    <Bullet3 strokeColor={strokeColor} ref={bulletMicroAnimation}/>       
                    <div  style={{ marginTop: "2px", marginLeft: "10px", userSelect: "none"}}>
                        {item.title}  
    
                        <div style={{ margin: "5px"}}>
                        { isOpen ? content : null}  
                        </div> 
    
                    </div>      
                </div>
        )

    }

}

export default Collapsible