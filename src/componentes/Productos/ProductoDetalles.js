import React, { useContext, useState, useEffect } from 'react';
import { DataContext } from "../context/Dataprovider";
import { useParams } from "react-router-dom";

export const ProductoDetalles = () => {
    const value = useContext(DataContext);
    const [productos] = value.productos;
    const [detalle, setDetalle] = useState({});
    const params = useParams();

    useEffect(() => {
        if (productos.length > 0) {
            productos.forEach((producto) => {
                if (producto.id === parseInt(params.id)) {
                    setDetalle(producto);
                }
            });
        }
    }, [params.id, productos]);

    return (
        <>
            {
                detalle.title ? (
                    <div className="detalles">
                        <h2>{detalle.title}</h2>
                        <p className="price">${detalle.price}</p>
                        <div className="grind">
                            <p className="nuevo">Nuevo</p>
                            <div className="size">
                                <select placeholder="Tamaño">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                </select>
                                <p>Tamaño</p>
                            </div>
                        </div>
                        <button>Añadir al carrito</button>
                        <img src={detalle.image} alt={detalle.title} />  {/* Acceso directo a la ruta de la imagen */}
                        <input type="range" min="1" max="36" />
                    </div>
                ) : (
                    <p>Cargando...</p>
                )
            }
        </>
    );
};
