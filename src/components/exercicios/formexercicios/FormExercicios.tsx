/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { RotatingLines } from "react-loader-spinner";
import Categoria from "../../../models/Categoria";
import Exercicio from "../../../models/Exercicio";
import { listar, atualizar, cadastrar } from "../../../service/Service";
import { ToastAlerta } from "../../../util/ToastAlerta";
import { useDictionary } from "../../../context/DictionaryProvider";

function FormExercicios() {
  const navigate = useNavigate();
  const { translate } = useDictionary();

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
      ToastAlerta(
        "Houve um erro ao tentar buscar o exercicio . Por favor, tente novamente.",
        "erro"
      );
    }
  }

  async function buscarCategorias() {
    try {
      await listar(`/categoria`, setCategorias);
    } catch (error: any) {
      ToastAlerta("Erro ao Buscar Categorias", "erro");
    }
  }

  function handleCategoriaChange(e: ChangeEvent<HTMLSelectElement>) {
    const selectedId = e.target.value;
    if (!selectedId) return;

    // Encontra a categoria no array de categorias carregadas
    const categoriaSelecionada = categorias.find(
      (cat) => cat.id.toString() === selectedId
    );

    if (categoriaSelecionada) {
      setCategoria(categoriaSelecionada); // Atualiza o estado da categoria
      setExercicio((prevState) => ({
        ...prevState,
        categoria: categoriaSelecionada, // Atualiza o exercício com a nova categoria
      }));
    }
  }

  useEffect(() => {
    buscarCategorias();

    if (id !== undefined) {
      buscarExerciciosPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setExercicio({
      ...exercicio,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    const { type, value } = e.target;

    let tempo: string | number = value;

    switch (type) {
      case "number":
      case "range":
        tempo = value === "" ? "" : parseFloat(Number(value).toFixed(2));
        break;
      case "date":
        tempo = value;
        break;
      default:
        // Se não for um dos tipos acima, verifica se é um número
        if (!isNaN(Number(value)) && value !== "") {
          tempo = parseFloat(Number(value).toFixed(2));
        }
    }

    setExercicio((prevState) => ({
      ...prevState,
      [e.target.name]: tempo,
    }));
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

        ToastAlerta("Exercicio atualizado com sucesso", "sucesso");
      } catch (error: any) {
        ToastAlerta("Erro ao atualizar o Exercicio", "erro");
      }
    } else {
      try {
        await cadastrar(`/exercicios`, exercicio, setExercicio);

        ToastAlerta("Exercicio cadastrado com sucesso", "sucesso");
      } catch (error: any) {
        ToastAlerta("Erro ao cadastrar o Exercicio", "erro");
      }
    }

    setIsLoading(false);
    retornar();
  }

  const categoriaSelecionado = exercicio.categoria?.id !== undefined;

  return (
    <div className="container flex flex-col mx-auto items-center p-4">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Exercício" : "Cadastrar Exercício"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoExercicio}>
        <div className="flex flex-col gap-1">
          <label htmlFor="nome">{translate("exercicio")}</label>
          <input
            value={exercicio.nome || ""}
            onChange={atualizarEstado}
            type="text"
            placeholder="Insira o nome do Exercicio"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-1 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="tempo">{translate("tempoExerc")} (min)</label>
          <input
            value={exercicio.tempo || ""}
            onChange={atualizarEstado}
            type="number"
            step=".01"
            placeholder="Adicione o tempo do Exercicio"
            name="tempo"
            className="border-2 border-slate-700 rounded p-1 focus:outline-none focus:ring-2 focus:ring-zinc-400"
          />
        </div>

        <div className="flex justify-between w-full flex-wrap">
          <div className="flex flex-col gap-1 w-1/2 pr-1">
            <label htmlFor="serie">{translate("series")}</label>
            <input
              value={exercicio.series || ""}
              onChange={atualizarEstado}
              type="number"
              step=".01"
              placeholder="Séries"
              name="series"
              className="border-2 border-slate-700 rounded p-1 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-1 w-1/2 pl-1">
            <label htmlFor="repeticao">{translate("repeticoes")}</label>
            <input
              value={exercicio.repeticoes || ""}
              onChange={atualizarEstado}
              type="number"
              step=".01"
              placeholder="Repetições"
              name="repeticoes"
              className="border-2 border-slate-700 rounded p-1 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-1 w-1/2 pr-1">
            <label htmlFor="peso">{translate("carga")} (Kg)</label>
            <input
              value={exercicio.carga || ""}
              onChange={atualizarEstado}
              type="number"
              step=".01"
              placeholder="Peso (Kg)"
              name="carga"
              className="border-2 border-slate-700 rounded p-1 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>

          <div className="flex flex-col gap-1 w-1/2 pl-1">
            <label htmlFor="descanso">{translate("descanso")} (min)</label>
            <input
              value={exercicio.descanso || ""}
              onChange={atualizarEstado}
              type="number"
              step=".01"
              placeholder="Descanso (min)"
              name="descanso"
              className="border-2 border-slate-700 rounded p-1 focus:outline-none focus:ring-2 focus:ring-zinc-400"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 ">
          <label htmlFor="video">{translate("videoExerc")}</label>
          <input
            type="text"
            placeholder="Insira um video"
            name="video"
            className="border-2 border-slate-700 rounded p-1 utral-800"
            required
            value={exercicio.video}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <p>{translate("categoria")}</p>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded focus:outline-none focus:ring-2 focus:ring-zinc-400"
            onChange={handleCategoriaChange}
            value={exercicio.categoria?.id || ""}
          >
            <option value="" disabled>
              {translate("selecionarCat")}
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-cyan-400 hover:bg-cyan-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center "
          disabled={!categoriaSelecionado || isLoading}
          // disabled={carregandoCategoria}
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
