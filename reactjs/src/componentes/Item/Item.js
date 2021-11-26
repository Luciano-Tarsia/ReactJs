import React from "react";
//import { Link } from "react-router-dom"

export const Item = ({item}) => {
    return(
        <div style={{margin:0, width:"15%", backgroundColor:"red", display:"flex", flexDirection:"column", alignContent:"center"}}>
            <img src={item.img} alt={item.nombre}/>
            <h3 style={{textAlign:'center'}}>{item.nombre}</h3>
            <p style={{textAlign:'center'}}>Precio: ${item.precio}</p>
            <p style={{textAlign:'center'}}>{item.desc}</p>
        </div>
    )
}