// Paginas.js
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Inicio } from "../Inicio";
import { ProductosLista } from "./index";

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path='/' element={<Inicio />} />
                <Route path='/producto' element={<ProductosLista />} />
            </Routes>
        </section>
    );
};