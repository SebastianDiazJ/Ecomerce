import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Inicio } from "./Inicio";
import { ProductosLista } from "./Productos/index";

export const Paginas = () => (
  <section>
    <HEAD>
          <Switch>
            <Route path="/" exact component={Inicio} />
            <Route path="/productos" exact component={ProductosLista} />
          </Switch>

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<ProductosLista />} />
          </Routes>
    </HEAD>
  </section>
);