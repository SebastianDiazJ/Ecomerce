import React, { useContext } from 'react'
import Card from '../../images/img08.jpg';
import {DataContext} from "../../componentes/context/Dataprovider";
export const Carrito = () => {
    const value = useContext(DataContext)
    const[menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;
    

    const tooglefalse = () =>{
        setMenu(false);
    }

    const show1 = menu ? "carritos show" : "carritos";
    const show2 = menu ? "carrito show" : "carrito";
    //suma y resta de los botenes para agregar mas productos 
    const resta = id => {
        const newCarrito = carrito.map(item => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad === 1 ? 1 : item.cantidad - 1 };
          }
          return item;
        });
        setCarrito(newCarrito);
      };
      
      const suma = id => {
        const newCarrito = carrito.map(item => {
          if (item.id === id) {
            return { ...item, cantidad: item.cantidad + 1 };
          }
          return item;
        });
        setCarrito(newCarrito);
      };
      

    //borra el producto del carrito 
    const removeProducto = (id) => {
        if (window.confirm("¿Quieres eliminar el producto?")) {
          const newCarrito = carrito.filter(item => item.id !== id);
          setCarrito(newCarrito);
        }
      };
      


  return (
    <div className={show1}>
        <div className={show2}>
            <div className="carrito__close" onClick={tooglefalse} >
                <box-icon name ="x"></box-icon>
            </div>
            <h2>Su Carrito</h2>
           
                <div className="carrito__center">
                {

                    carrito.length === 0 ? <h2 style={{
                        textAlign: "center", fontSize: "3rem"
                    }}> Carrito Vacio </h2> : <>
                
                    {
                carrito.map((producto)=>(
                    
                <div className="carrito__item" key={producto.id}>
                <img src={producto.image} alt=""/>
                <div>
                    <h3>{producto.title}</h3>
                    <p className="price">${producto.price}</p>
                </div>
                <div>
                    <box-icon name="up-arrow" type="solid" onClick={()=> suma(producto.id)}></box-icon>
                    <p className="cantidad">{producto.cantidad}</p>
                    <box-icon name="down-arrow" type="solid" onClick={()=> resta(producto.id)}></box-icon>
                </div>
                <div className="remove__item" onClick={()=>  removeProducto(producto.id)}>
                    <box-icon name="trash"></box-icon>
                </div>
            </div>  
                ))
            } 
            </>
            }
            </div>

           
            <div className="carrito__footer">
                <h3>Total: ${total}</h3>
                <button className="btn">Payment</button>
            </div>
            <div className="carrito__footer" ></div>
        </div>
    </div>
  )
}
