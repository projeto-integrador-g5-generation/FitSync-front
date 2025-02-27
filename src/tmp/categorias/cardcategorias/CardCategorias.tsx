import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";


interface CardCategoriaProps {
    categoria: Categoria
  }

function CardCategorias({categoria}: CardCategoriaProps) {
    return (
        <div className="flex flex-col justify-between overflow-hidden border rounded-2xl">
            <header className="px-6 py-2 text-2xl font-bold text-white bg-cyan-700">Categoria</header>
            <p className="h-full p-8 text-3xl bg-white">{categoria.tipo}</p>
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`}
                    className="flex items-center justify-center w-full py-2 bg-cyan-400 text-slate-50 hover:bg-cyan-700">
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`}
                    className="flex items-center justify-center w-full bg-red-500 text-slate-50 hover:bg-red-700">
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardCategorias;