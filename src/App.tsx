
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import DictionaryProvider from "./context/DictionaryProvider"
import Home from "./pages/home/Home"
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria"
import FormCategoria from "./components/categorias/formcategoria/FormCategoria"
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias"


function App() {

  return (
    <>
      <BrowserRouter>
        <DictionaryProvider>
          <Navbar />
          <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadastrarcategoria" element={<FormCategoria />} />
            <Route path="/atualizarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
          </div>
          <Footer />
        </DictionaryProvider>
      </BrowserRouter>
    </>
  )
}

export default App