// Paginas.js
import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Inicio } from "../Inicio";
import { ProductosLista } from "./index";

<<<<<<< HEAD
export const Paginas = () => (
  <section>
    <Router> 
      <Routes>
        <Route element={<Inicio />} /> 
        <Route path="/productos" element={<ProductosLista />} />
      </Routes>
    </Router>
  </section>
);
=======
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
>>>>>>> 4687538dbf1db5acba24a5ca1129ef33d9e8a62f
