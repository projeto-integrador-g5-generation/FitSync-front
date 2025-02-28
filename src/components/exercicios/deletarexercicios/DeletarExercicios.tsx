import { Link, useNavigate, useParams } from "react-router-dom"
import Exercicio from "../../../models/Exercicio"

import { useState, useEffect } from "react"
import { listar, deletar } from "../../../service/Service"
import { RotatingLines } from "react-loader-spinner"


function DeletarExercicios() {


    const navigate = useNavigate()

    const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    const { id } = useParams<{ id: string }>()
    
    async function buscarPorId(id: string) {
        try {
            // Simplesmente realiza a requisição sem autenticação
            await listar(`/exercicios/${id}`, setExercicio)
        } catch (error: any) {
            alert('Erro ao buscar o exercicio.')
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
    
            alert('Exercicio apagado com sucesso')
    
        } catch (error: any) {
            console.error("Erro ao deletar exercicio:", error)
            alert('Erro ao deletar o exercicio.')
        }
    
        setIsLoading(false)
        retornar()
    }
    
    function retornar() {
        navigate("/exercicios")
    }

  return (
    
    <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Exercicio</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o Exercicio a seguir?</p>
            <div
                id="container-pai"
                className="border border-gray-300 w-48 h-80 rounded-3xl flex flex-col overflow-hidden drop-shadow-lg text-sm m-auto bg-white shadow-lg hover:scale-102 transition-all items-center"
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
                        className="w-1/2 py-4 flex items-center justify-center bg-red-500 text-slate-50 hover:bg-red-600 transition-all"
                        onClick={retornar}
                    >
                        <span>Não</span>
                    </button>
                    <button
                        className="w-1/2 py-4 flex items-center justify-center bg-cyan-400 text-slate-50 hover:bg-cyan-700 transition-all"
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