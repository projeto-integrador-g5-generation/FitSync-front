import { Link } from "react-router-dom";
import Categoria from "../../../models/Categoria";


interface CardCategoriaProps {
    categoria: Categoria
}

function CardCategorias({ categoria }: CardCategoriaProps) {
    return (

        <div
            id="container-pai"
            className="border border-gray-300 w-48 h-80 rounded-3xl flex flex-col overflow-hidden drop-shadow-lg text-sm m-auto bg-white shadow-lg hover:scale-102 transition-all items-center"
        >
            <div
                id="Categoria"
                className="flex items-center justify-center w-full bg-cyan-700 p-2"
            >
                <div>
                    <Link to={`/deletarcategorias/${categoria.id}`}>
                        <img
                            src="https://ik.imagekit.io/50n5k5wmb/heartbeat.svg?updatedAt=1740671289798"
                            alt=""
                            className="w-8 p-0.5"
                        />
                    </Link>
                </div>
                <h2 className="py-2 font-bold text-white text-center">
                    {categoria.nome}
                </h2>
                <div className="p-1">
                    <Link to={`/atualizarcategoria/${categoria.id}`}>
                        <img
                            src="https://ik.imagekit.io/50n5k5wmb/pencil.svg?updatedAt=1740673000487"
                            alt=""
                        />
                    </Link>
                </div>
                <div>
                    <Link to={`/deletarcategoria/${categoria.id}`}>
                        <img
                            src="https://ik.imagekit.io/50n5k5wmb/trash.svg?updatedAt=1740672961060"
                            alt=""
                        />
                    </Link>
                </div>
            </div>

            <div
                id="NomeExercicio"
                className="flex justify-center items-center p-4 text-center h-full"
            >
                <h1 className="font-bold text-lg">{categoria.descricao}</h1>
            </div>
        </div>



        // <div className="flex flex-col  overflow-hidden border rounded-2xl">
        //     <header className="flex justify-center px-6 py-2 text-2xl font-bold text-white bg-cyan-700"> Categoria
        //     </header>

        //     <p className="h-full p-8 text-3xl bg-white">{categoria.nome}</p>            
        //     <p className="h-full p-8 text-2xl bg-white">{categoria.descricao}</p>  

        //     <div className="flex ">
        //         <Link to={`/atualizarcategoria/${categoria.id}`}
        //             className="flex items-center justify-center w-full py-2 bg-cyan-400 text-slate-50 hover:bg-cyan-700">
        //             <button>Editar</button>
        //         </Link>

        //         <Link to={`/deletarcategoria/${categoria.id}`}
        //             className="flex items-center justify-center w-full bg-red-500 text-slate-50 hover:bg-red-700">
        //             <button>Deletar</button>
        //         </Link>
        //     </div>
        // </div>
    );
}

export default CardCategorias;