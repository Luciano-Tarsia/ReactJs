import React, {useState} from "react";

export const ItemCount = ({stock = 10, initial = 0}) => {

    const [cantidad, setCantidad] = useState(initial)

    const resta = () => {
        cantidad > initial && setCantidad(cantidad - 1)
    }

    const suma = () => {
        cantidad < stock && setCantidad(cantidad + 1)
    }

    return(
        <div>
            <button onClick={resta} className="btn btn-primary">-</button>
            <span className="mx-2">{cantidad}</span>
            <button onClick={suma} className="btn btn-primary">+</button>
        </div>
    )

}