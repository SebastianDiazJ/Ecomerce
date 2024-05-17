import React from "react";
import { Header } from "./componentes/Header";
import 'boxicons';
import { Paginas } from "./componentes/Paginas";
import { DataProvider } from "./componentes/context/Dataprovider";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Header />
      <Paginas />
    </div>
    </DataProvider>
  );
}

export default App;

