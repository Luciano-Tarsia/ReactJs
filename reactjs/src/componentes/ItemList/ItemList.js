import React from "react";
import { Item } from "../Item/Item"; 

export const ItemList = ({items}) => {
    return (
        <div>
            <h2 style={{textAlign:'center'}}>Productos</h2>
            <div style={{display:"flex", flexDirection:'row', alignItems: 'center', justifyContent: 'space-around'}}>
                {
                    items.map((el) => <Item key={el.id} item={el}/>)
                }
            </div>
        </div>
    )
}
