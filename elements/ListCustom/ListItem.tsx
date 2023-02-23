import { useRef } from "react"
import { EBullet } from "./Bullets/types"
import Bullet1 from "./Bullets/Bullet1"
import Bullet2 from "./Bullets/Bullet2"
import Bullet3 from "./Bullets/Bullet3"
import Bullet4 from "./Bullets/Bullet4"
import Collapsible from "./Collapsible"
import Link from "next/link"


type TListItem = {
    strokeColor: string,
    index: number,
    item: {
        type: EBullet,
        title: string,
        details?: {
            description: string,
            link: string
        },
        collection?: Array<string>,
        link: string
    }
}

const ListItem = ({ strokeColor, index, item }: TListItem) => {

    const bulletMicroAnimation = useRef<any>(null)

    
    //if no type                
          
    switch (item.type) {
        case EBullet.link:

            return(
                <div 
                key={index} 
                style={{ display: "flex", margin: "10px" }}
                onMouseEnter={() => {bulletMicroAnimation.current !==null && bulletMicroAnimation.current.on()}}
                onMouseLeave={() => {bulletMicroAnimation.current !==null && bulletMicroAnimation.current.off()}}>
                    <Bullet2 strokeColor={strokeColor} />
                    <div  style={{ marginTop: "2px", marginLeft: "10px" }}>
                        <Link key={index} target="_blank" href={item.link}>{item.title}</Link>
                    </div>
                </div>)

        case EBullet.todo:

            return(<div 
                key={index} 
                style={{ display: "flex", margin: "10px" }}
                onMouseEnter={() => {bulletMicroAnimation.current !==null && bulletMicroAnimation.current.on()}}
                onMouseLeave={() => {bulletMicroAnimation.current !==null && bulletMicroAnimation.current.off()}}
            >
                <Bullet1 strokeColor={strokeColor} ref={bulletMicroAnimation}/>
                <div  style={{ marginTop: "2px", marginLeft: "10px" }}>
                    {item.title}
                </div>
            </div>)

        case EBullet.collapsible:

            return(<Collapsible item={item} strokeColor={strokeColor}/>)

        case EBullet.usual:

            return(<div 
                key={index} 
                style={{ display: "flex", margin: "10px" }}
                onMouseEnter={() => {bulletMicroAnimation.current !==null && bulletMicroAnimation.current.on()}}
                onMouseLeave={() => {bulletMicroAnimation.current !==null && bulletMicroAnimation.current.off()}}
            >
                <Bullet4 strokeColor={strokeColor} ref={bulletMicroAnimation}/>
                <div  style={{ marginTop: "2px", marginLeft: "10px" }}>
                    {item.title}
                </div>
            </div>)

        default:
            return(<div 
                key={index} 
                style={{ display: "flex", margin: "10px" }}
                onMouseEnter={() => {bulletMicroAnimation.current !==null && bulletMicroAnimation.current.on()}}
                onMouseLeave={() => {bulletMicroAnimation.current !==null && bulletMicroAnimation.current.off()}}
            >
                <Bullet4 strokeColor={strokeColor} ref={bulletMicroAnimation}/>
                <div  style={{ marginTop: "2px", marginLeft: "10px" }}>
                    {item.title}
                </div>
            </div>)
    }

    if(type === EBullet.collapsible){

        

    }else{
        return(
            <div 
                key={index} 
                style={{ display: "flex", margin: "10px" }}
                onMouseEnter={() => {bulletMicroAnimation.current !==null && bulletMicroAnimation.current.on()}}
                onMouseLeave={() => {bulletMicroAnimation.current !==null && bulletMicroAnimation.current.off()}}
            >
                {Bullet}
                <div  style={{ marginTop: "2px", marginLeft: "10px" }}>
                    {item}
                </div>
            </div>
        )
    }    
}


export default ListItem