import React from "react"
import  Card  from "../../images/img03.jpg"

export const Carrito = () => {
    return(
        <div className="carrito">
            <div className="carrito">
                <div className="carrito__close">
                    <box-icon name = "x"></box-icon>
                </div>
                <h2>Su carrito</h2>
                <div className="carrito__center">


                    <div className="carrito__center">
                        <img src="{Card}" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}