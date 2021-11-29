import React from "react";
import { useNavigate } from "react-router";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({item}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return(
        <div style={{margin:0, width:"15%", backgroundColor:"red", display:"flex", flexDirection:"column", alignContent:"center"}}>
            <img src={item.img} alt={item.nombre}/>
            <h3 style={{textAlign:'center'}}>{item.nombre}</h3>
            <p style={{textAlign:'center'}}>Precio: ${item.precio}</p>
            <p style={{textAlign:'center'}}>{item.desc}</p>
            <p style={{textAlign:'center'}}>{item.cat}</p>

            <ItemCount/>

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
        </div>
    )
}