import { EnumType } from "typescript"
import Bullet1 from "./Bullets/Bullet1"
import Bullet2 from "./Bullets/Bullet2"


type TListCustom = {
    items: Array<any>
    strokeColor: string
    type: string
}

const ListCustom = ({items, strokeColor, type}: TListCustom) => {

    const Bullet = type === "links" ? <Bullet2 strokeColor={strokeColor} /> : <Bullet1 strokeColor={strokeColor} />

    return(
        <div>
            {items.map((item, index) => {

                return(
                    <div key={index} style={{ display: "flex", margin: "10px" }}>
                        {Bullet}
                        <div style={{ marginTop: "2px", marginLeft: "10px" }}>
                            {item}
                        </div>
                    </div>
                )
            })}
        </div>
    )

}


export default ListCustom