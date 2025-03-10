import { Link, useNavigate, useParams } from "react-router-dom"
import Exercicio from "../../../models/Exercicio"

import { useState, useEffect } from "react"
import { listar, deletar } from "../../../service/Service"
import { RotatingLines } from "react-loader-spinner"
import { ToastAlerta } from "../../../util/ToastAlerta"
import { useDictionary } from "../../../context/DictionaryProvider"


function DeletarExercicios() {

    const { translate } = useDictionary();
    const navigate = useNavigate()

    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { id } = useParams<{ id: string }>()
    
    async function buscarPorId(id: string) {
        try {
            // Simplesmente realiza a requisição sem autenticação
            await listar(`/exercicios/${id}`, setExercicio)
        } catch (error: any) {
            ToastAlerta('Erro ao buscar o exercicio.', "erro")
        }
    }
    
    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])
    
    async function deletarExercicio() {
        setIsLoading(true)
    
        try {
            // Simplesmente realiza a requisição de exclusão sem autenticação
            await deletar(`/exercicios/${id}`)
    
            ToastAlerta('Exercicio apagado com sucesso', "sucesso")
    
        } catch (error: any) {
            console.error("Erro ao deletar exercicio:", error)
            ToastAlerta('Erro ao deletar o exercicio.', "erro")
        }
    
        setIsLoading(false)
        retornar()
    }
    
    function retornar() {
        navigate("/exercicios")
    }

  return (
    
    <div className='container mx-auto p-2'>
            <h1 className='text-4xl text-center my-4'>{translate("delExerc")}</h1>
            <p className='text-center font-semibold mb-4'>
                {translate("confirmacaoDelExerc")}</p>
            <div
                id="container-pai"
                className="border border-gray-300 max-w-98 rounded-3xl flex flex-col overflow-hidden drop-shadow-lg text-sm m-auto bg-white shadow-lg hover:scale-102 transition-all items-center"
            >
                <div
                    id="Categoria"
                    className="flex items-center justify-center w-full bg-cyan-700 p-2"
                >
                    <div>
                        <Link to={``}>
                            <img
                                src="https://ik.imagekit.io/50n5k5wmb/heartbeat.svg?updatedAt=1740671289798"
                                alt=""
                                className="w-8 p-0.5"
                            />
                        </Link>
                    </div>
                    <h2 className="py-2 font-bold text-white text-center">
                        {exercicio.nome}
                    </h2>
                </div>

                <div
                    id="NomeExercicio"
                    className="flex justify-center items-center p-4 text-center h-full"
                >
                    <h1 className="font-bold text-lg">{exercicio.nome}</h1>
                </div>

                <div className="flex w-full rounded-b-3xl overflow-hidden">
                    <button
                        className="w-1/2 py-4 flex items-center cursor-pointer justify-center bg-red-500 text-slate-50 hover:bg-red-600 transition-all"
                        onClick={retornar}
                    >
                        <span>Não</span>
                    </button>
                    <button
                        className="w-1/2 py-4 flex cursor-pointer items-center justify-center bg-cyan-400 text-slate-50 hover:bg-cyan-700 transition-all"
                        onClick={deletarExercicio}
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
        </div>
  )
}

export default DeletarExercicios