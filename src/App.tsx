import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FormCategoria from "./componentes/categorias/formcategoria/FormCategoria";
import DeletarCategoria from "./componentes/categorias/deletarcategoria/DeletarCategoria";
import ConsultarCategorias from "./componentes/categorias/consultarcategorias/ConsultarCategorias";



function App() {

  return (
    <>
      <BrowserRouter>
       
        <div className="flex flex-col min-h-screen bg-gray-200 ">
          <div className="flex-grow">
            <Routes>
            
              <Route path="/categorias" element={<ConsultarCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
             
            </Routes>
          </div>
        </div>
       
      </BrowserRouter>
    </>
  );
}

export default App
