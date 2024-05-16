// En tu archivo App.js

import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Paginas } from "./components/Paginas"; 
import { DataProvider } from "./context/Dataprovider";

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Paginas />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;

