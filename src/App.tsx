import { BrowserRouter, Routes, Route } from "react-router-dom";
import DeletarCategoria from "./components/categorias/deletarcategoria/DeletarCategoria";
import FormCategoria from "./components/categorias/formcategoria/FormCategoria";
import ListarCategorias from "./components/categorias/listarcategorias/ListarCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import DictionaryProvider from "./context/DictionaryProvider";
import Home from "./pages/home/Home";
import Perfil from "./pages/perfil/Perfil";
import SobreNos from "./pages/sobre/Sobre";
import DeletarExercicios from "./components/exercicios/deletarexercicios/DeletarExercicios";
import FormExercicios from "./components/exercicios/formexercicios/FormExercicios";
import ListaExercicio from "./components/exercicios/listaexercicios/ListaExercicio";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <DictionaryProvider>
          <Navbar />
          <div className="min-h-[calc(100vh-180px)]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListarCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route
                path="/atualizarcategoria/:id"
                element={<FormCategoria />}
              />
              <Route
                path="/deletarcategoria/:id"
                element={<DeletarCategoria />}
              />
              <Route path="/exercicios" element={<ListaExercicio />} />
              <Route path="/cadastrarexercicio" element={<FormExercicios />} />
              <Route path="/editarexercicio/:id" element={<FormExercicios />} />
              <Route
                path="/deletarexercicio/:id"
                element={<DeletarExercicios />}
              />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/sobre" element={<SobreNos />} />
            </Routes>
          </div>
          <Footer />
        </DictionaryProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
