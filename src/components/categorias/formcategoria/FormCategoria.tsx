import { ChangeEvent, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../service/Service";
import { ToastAlerta } from "../../../util/ToastAlerta";

function FormCategoria() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarCategoriaPorId(id: string) {
    try {
      await listar(`/categoria/${id}`, setCategoria)
    } catch (error: any) {
      ToastAlerta("Categoria não encontrada!", "erro")
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarCategoriaPorId(id)
    }else{
			setCategoria({
				id: 0,
				nome: "",
        descricao: "",
			})	
		}
  }, [id])

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value
    })
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categoria, setCategoria)

        ToastAlerta("Categoria atualizado com sucesso", "sucesso")

      } catch (error: any) {
        ToastAlerta("Erro ao atualizar o Categoria", "erro")
      }

    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria)

        ToastAlerta("Categoria cadastrada com sucesso", "sucesso")

      } catch (error: any) {
        ToastAlerta("Erro ao cadastrar a Categoria", "erro")
      }
    }

    setIsLoading(false)
    retornar();

  }

  function retornar() {
    navigate("/categorias")
  }

  return (
    <div className="container flex flex-col items-center justify-center mx-auto">
      <h1 className="my-8 text-4xl text-center">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4"
        onSubmit={gerarNovaCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Categoria</label>
          <input
            type="text"
            placeholder="Categoria"
            name="nome"
            className="p-2 border-2 rounded border-cyan-700 bg-white"
            required
            value={categoria.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição</label>
          <input
            type="text"
            placeholder="Insira uma descrição"
            name="descricao"
            className="p-2 border-2 rounded border-cyan-700 bg-white"
            required
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <button
          className="flex justify-center w-1/2 py-2 mx-auto rounded text-slate-100 bg-cyan-400 hover:bg-slate-800"
          type="submit"
        >
          {isLoading ?
            <RotatingLines
              strokeColor="white"
              strokeWidth="5"
              animationDuration="0.75"
              width="24"
              visible={true}
            /> :
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          }
        </button>
      </form>
    </div>
  );
}

export default FormCategoria;