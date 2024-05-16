import React, { useState, useEffect, createContext } from "react";
<<<<<<< HEAD
import Data from './Data.js'
=======
import Data from "../../Data.js"
>>>>>>> 4687538dbf1db5acba24a5ca1129ef33d9e8a62f
export const DataContext = createContext();


export const DataProvider = (props) => {
    const [productos, setProductos] = useState([])


    useEffect(() => {
        const producto = Data
        setProductos(producto)
    },[])

    const value = {
        productos : [productos]
    }

    return(
<<<<<<< HEAD
        <DataContext.Provider value = {value}>
         {props.children}
=======
        <DataContext.Provider value={value}>
            {props.children}
>>>>>>> 4687538dbf1db5acba24a5ca1129ef33d9e8a62f
        </DataContext.Provider>
    )
}