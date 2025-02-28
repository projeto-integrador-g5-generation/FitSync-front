import { Routes, Route, BrowserRouter } from "react-router-dom"
import ListaExercicio from "./components/exercicios/listaexercicios/ListaExercicio"
import FormExercicios from "./components/exercicios/formexercicios/FormExercicios"
import DeletarExercicios from "./components/exercicios/deletarexercicios/DeletarExercicios"


function App() {
  
  return (
    <> 
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<ListaExercicio />} /> 
    <Route path="/exercicios" element={<ListaExercicio />} /> 
    <Route path="/cadastrarexercicio" element={<FormExercicios />} />
    <Route path="/editarexercicio/:id" element={<FormExercicios />} />
    <Route path="/deletarexercicio/:id" element={<DeletarExercicios />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App