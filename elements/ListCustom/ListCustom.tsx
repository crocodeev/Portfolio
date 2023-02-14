import ListItem from "./ListItem"


type TListCustom = {
    items: Array<any>
    strokeColor: string
    type: string
}

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
                    type={type}
                    />
                )
            })}
        </div>
    )

}


export default ListCustom