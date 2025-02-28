import { useNavigate, useParams } from "react-router-dom"
import Exercicio from "../../../models/Exercicio"

import { useState, useEffect } from "react"
import { listar, deletar } from "../../../service/Service"


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
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Exercicio
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{exercicio.nome}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                                   hover:bg-indigo-600 flex items-center justify-center'>
                        Sim
                    </button>
                </div>
            </div>
        </div>
  )
}

export default DeletarExercicios