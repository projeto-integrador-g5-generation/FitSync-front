import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: CardCategoriaProps) {
  return (
    <div className="border-1 border-gray-300 flex flex-col drop-shadow-lg text-sm shadow-lg hover:scale-102 transition-all items-center bg-white p-4 rounded-lg gap-2 max-w-96 min-h-60">
      <div className="flex items-center justify-center w-full bg-cyan-700 p-2 gap-4">
        <div>
          <Link to={`/deletarcategorias/${categoria.id}`}>
            <img
              src="https://ik.imagekit.io/50n5k5wmb/heartbeat.svg?updatedAt=1740671289798"
              className="w-8 p-0.5"
            />
          </Link>
        </div>
        <h2 className="py-2 font-bold text-white text-center grow">
          {categoria.nome}
        </h2>
        <div className="p-1">
          <Link to={`/atualizarcategoria/${categoria.id}`}>
            <img src="https://ik.imagekit.io/50n5k5wmb/pencil.svg?updatedAt=1740673000487" />
          </Link>
        </div>
        <div>
          <Link to={`/deletarcategoria/${categoria.id}`}>
            <img src="https://ik.imagekit.io/50n5k5wmb/trash.svg?updatedAt=1740672961060" />
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center p-4 text-center h-full">
        <h1 className="font-bold text-lg">{categoria.descricao}</h1>
      </div>
    </div>
  );
}

export default CardCategorias;
