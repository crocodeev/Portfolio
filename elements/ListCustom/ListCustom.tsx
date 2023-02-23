import { EBullet } from "./Bullets/types"
import ListItem from "./ListItem"


type TListCustom = {
    items: Array<any>
    strokeColor: string}

const ListCustom = ({items, strokeColor, type}: TListCustom) => {

    return(
        <div>
            {items.map((item, index) => {

                return(
                    <ListItem
                        key={index}
                        item={item}
                        index={index}
                        strokeColor={strokeColor}
                    />
                )
            })}
        </div>
    )

}


export default ListCustom