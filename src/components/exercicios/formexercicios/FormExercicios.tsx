import { ChangeEvent, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import Exercicio from "../../../models/Exercicio";
import { listar, atualizar, cadastrar } from "../../../service/Service";

function FormExercicios() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    nome: "",
    descricao: "",
  });
  const [exercicio, setExercicio] = useState<Exercicio>({} as Exercicio);

  const { id } = useParams<{ id: string }>();

  async function buscarExerciciosPorId(id: string) {
    try {
      // Chama a função buscar para obter os dados do exercicios por id
      await listar(`/exercicios/${id}`, setExercicio);
    } catch (error: any) {
      alert(
        "Houve um erro ao tentar buscar o exercicio . Por favor, tente novamente."
      );
    }
  }


  async function buscarCategoriaPorId(id: string) {
    try {
        await listar(`/categoria/${id}`, setCategoria);

      setCategoria(categoria); // Atribui o objeto categoria diretamente
    } catch (error: any) {
      alert("Erro ao Buscar Categoria");
    }
  }

  useEffect(() => {
    if (id) {
        buscarCategoriaPorId(id); // Agora passando 'id' como argumento
        buscarExerciciosPorId(id);
    }
}, [id]);




  useEffect(() => {
    setExercicio({
        ...exercicio,
        
    });
  }, [exercicio]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setExercicio({
      ...exercicio,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/exercicios");
  }

  async function gerarNovoExercicio(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/exercicios`, exercicio, setExercicio);

        alert("Exercicio atualizado com sucesso");
      } catch (error: any) {
        alert("Erro ao atualizar o Exercicio");
      }
    } else {
      try {
        await cadastrar(`/exercicios`, exercicio, setExercicio);

        alert("Exercicio cadastrado com sucesso");
      } catch (error: any) {
        alert("Erro ao cadastrar o Exercicio");
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoCategoria = categoria.nome === "";

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Exercício" : "Cadastrar Exercício"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoExercicio}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Exercício</label>
          <input
            type="text"
            placeholder="Digite o nome do Exercicio"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={exercicio.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="tempo">Tempo do Exercício</label>
          <input
            type="number"
            placeholder="Digite o Tempo do Exercicio"
            name="tempo"
            className="border-2 border-slate-700 rounded p-2"
            value={exercicio.tempo}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="series">Séries do Exercicio</label>
          <input
            type="number"
            placeholder="Digite o numero de series do Exercicio"
            name="series"
            className="border-2 border-slate-700 rounded p-2"
            value={exercicio.series}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="repeticoes">Repetições</label>
          <input
            type="number"
            placeholder="Digite o numero de repetições"
            name="repeticoes"
            className="border-2 border-slate-700 rounded p-2"
            value={exercicio.repeticoes}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="descanco">Descanso do Exercicio</label>
          <input
            type="number"
            placeholder="Digite o tempo do Exercicio"
            name="descanso"
            className="border-2 border-slate-700 rounded p-2"
            value={exercicio.descanso}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="carga">Carga do Exercicio</label>
          <input
            type="number"
            placeholder="Digite a quantidade de carga do exercicio"
            name="carga"
            className="border-2 border-slate-700 rounded p-2"
            value={exercicio.carga}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="video">Vídeo do Exercício</label>
          <input
            type="text"
            placeholder="Video do exercicio"
            name="video"
            className="border-2 border-slate-700 rounded p-2"
            value={exercicio.video}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p>Tema da Categoria</p>
          <select
            name="tema"
            id="tema"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>

            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.descricao}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={carregandoCategoria}
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
            <span>{id !== undefined ? "Atualizar" : "Cadastrar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormExercicios;
