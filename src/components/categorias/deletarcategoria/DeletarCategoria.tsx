import { useEffect, useState } from "react"
import { RotatingLines } from "react-loader-spinner"
import { Link, useNavigate, useParams } from "react-router-dom"
import Categoria from "../../../models/Categoria"
import { listar, deletar } from "../../../service/Service"
import { ToastAlerta } from "../../../util/ToastAlerta"
import { useDictionary } from "../../../context/DictionaryProvider"


function DeletarCategoria() {

    const { translate } = useDictionary();

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    const { id } = useParams<{ id: string }>();

    async function buscarPorId(id: string) {
        try {
            await listar(`/categoria/${id}`, setCategoria)
        } catch (error: any) {
            ToastAlerta(`Categoria não encontrada!`, "erro")
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
        <div className="container mx-auto p-2">
            <h1 className="py-4 text-4xl text-center">{translate("deletarCat")}</h1>
            <p className="mb-4 font-semibold text-center">
                {translate("confirmacaoDeletarCat")}</p>


            <div
                id="container-pai"
                className="border border-gray-300 max-w-98 rounded-3xl flex flex-col overflow-hidden drop-shadow-lg text-sm m-auto bg-white shadow-lg hover:scale-102 transition-all items-center"
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
                        className="w-1/2 py-4 cursor-pointer flex items-center justify-center bg-red-500 text-slate-50 hover:bg-red-600 transition-all"
                        onClick={retornar}
                    >
                        <span>{translate("nao")}</span>
                    </button>
                    <button
                        className="w-1/2 py-4 flex cursor-pointer items-center justify-center bg-cyan-400 text-slate-50 hover:bg-cyan-700 transition-all"
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
                            <span>{translate("sim")}</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria


