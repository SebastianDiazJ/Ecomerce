import React from 'react'
import Card from '../../images/img03.jpg'
export const Carrito = () => {
  return (
    <div className="carrito show">
        <div className="carrito show">
            <div className="carrito__close">
                <box-icon name="x"></box-icon>
            </div>
            <h2>Su carrito</h2>
            <div className="carrito__center">


                <div className = "carrito__item">
                    <img src={Card} alt=""/>
                    <div>title</div>
                    <p className="price">$345</p>
                </div>
                <div>
                    <box-icon Name ="up-arrow" type ="solid" ></box-icon>
                    <p className = "cantidad">1</p>
                    <box-icon name = "down-arrow" type = "solid"></box-icon>
                </div>
                <div className="remoce__item">
                    <box-icon name="trash" ></box-icon>
                </div>
            </div>
            <div className="carrito__footer" ></div>
            <h3>Total : 2344</h3>
            <button className="btn">Payment</button>
        </div>
    </div>
  )
}
