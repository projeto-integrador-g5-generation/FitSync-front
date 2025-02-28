import Exercicio from "../../../models/Exercicio";
import { useEffect, useState } from "react";

import { DNA } from "react-loader-spinner";
import CardExercicios from "../cardexercicios/CardExercicios";
import { listar } from "../../../service/Service";
import { Link } from "react-router-dom";

function ListaExercicio() {
  const [exercicios, setExercicios] = useState<Exercicio[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarExercicios() {
    try {
      await listar("/exercicios", setExercicios);
    } catch (error: any) {
      console.log("Erro ao listar os Exercicios!");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarExercicios();
  }, [exercicios.length]);

  return (
    <>
      {isLoading && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div>
        <div className="flex flex-col justify-center w-full">
        <div className="flex w-full p-4 justify-end items-center text-center">
          <button className="p-2 bg-cyan-800 text-white shadow-md rounded-md hover:scale-105 transition-all cursor-pointer text-2xl">
            <Link to={"/cadastrarexercicio"}>Cadastrar Exercício</Link>
          </button>
        </div>
          <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {exercicios.map((exercicio) => (
                <CardExercicios key={exercicio.id} exercicio={exercicio} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaExercicio;
