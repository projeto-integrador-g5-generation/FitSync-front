import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { Link, useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { listar, deletar } from "../../../service/Service"
import { ToastAlerta } from "../../../util/ToastAlerta"


function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/categoria/${id}`, setCategoria)
        } catch (error: any) {
            ToastAlerta("Tema não encontrado!", "erro")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categoria/${id}`)

            ToastAlerta("Categoria apagada com sucesso", "sucesso")

        } catch (error) {
            ToastAlerta("Erro ao apagar a categoria", "erro")
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }

    return (
        <div className="container w-1/3 mx-auto">
            <h1 className="py-4 text-4xl text-center">Deletar Categoria</h1>
            <p className="mb-4 font-semibold text-center">
                Você tem certeza de que deseja apagar a categoria a seguir?</p>


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
                </div>

                <div
                    id="NomeExercicio"
                    className="flex justify-center items-center p-4 text-center h-full"
                >
                    <h1 className="font-bold text-lg">{categoria.descricao}</h1>
                </div>

                <div className="flex w-full rounded-b-3xl overflow-hidden">
                    <button
                        className="w-1/2 py-4 flex items-center justify-center bg-red-500 text-slate-50 hover:bg-red-600 transition-all"
                        onClick={retornar}
                    >
                        <span>Não</span>
                    </button>
                    <button
                        className="w-1/2 py-4 flex items-center justify-center bg-cyan-400 text-slate-50 hover:bg-cyan-700 transition-all"
                        onClick={deletarCategoria}
                    >
                        {isLoading ? (
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            />
                        ) : (
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
            {/* <div className="flex flex-col justify-between overflow-hidden border rounded-2xl">
                <header
                    className="px-6 py-2 text-2xl font-bold text-white bg-slate-600">
                    Categoria
                </header>
                <p className="h-full p-8 text-3xl bg-white">{categoria.nome}</p>
                <p className="h-full p-8 text-2xl bg-white">{categoria.descricao}</p>
                <div className="flex">
                    <button
                        className="w-full py-2 bg-red-500 text-slate-50 hover:bg-red-600"
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className="flex items-center justify-center w-full bg-cyan-400 text-slate-50 hover:bg-cyan-700"
                        onClick={deletarCategoria}
                    >
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>Sim</span>
                        }
                    </button>
                </div>
            </div> */}
        </div>
    )
}
export default DeletarCategoria


