import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Inicio } from "../Inicio";
import { ProductosLista } from "./index";

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
