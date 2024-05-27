import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Inicio } from "../Inicio";
import { ProductosLista } from "./index";
import { ProductoDetalles} from "./ProductoDetalles";

export const Paginas = () => {
    return (
        <section>
            <Switch>
                <Route path="/" exact component={Inicio } />
                <Route path="/productos" exact elemnt={ProductosLista } />
                <Route path="/producto:id" exact elemnt={ProductoDetalles} />
            </Switch>
        </section>
    );
};
