import React,{ useState, useEffect, createContext } from "react";
import Data from "../../Data.js";
export const DataContext = createContext();

export const DataProvider = (props) =>{
    const [productos, setProductos] = useState([])
                                                 // creacion de variable global para que el carrito pueda abrir y cerrar 
     const [menu, setMenu] = useState(false);
     const[carrito,setCarrito] = useState([])
    useEffect(() =>{
        const productos = Data.items
        if (productos){
            setProductos(productos) 
        }else{
            setProductos([])
        }

    },[])

    const addCarrito = (id) =>{
        const check = carrito.every(item =>{
            return item.id !== id;
        })
        if(check){
            const data = productos.filter(productos =>{
                return productos.id === id
            })
            setCarrito([...carrito, ...data])
        }else{
            alert("El producto se a agregado al carrito ")
        }
    }
    const value = {
        productos : [productos],
        menu: [menu, setMenu],
        addCarrito: addCarrito,
        carrito: [carrito, setCarrito]
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}