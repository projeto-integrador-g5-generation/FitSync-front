import { useEffect, useState } from "react";
import Categoria from "../../../models/Categoria";
import CardCategorias from "../cardcategorias/CardCategorias";
import { listar } from "../../../service/Service";
import { DNA } from "react-loader-spinner";
import { Link } from "react-router-dom";

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarCategorias() {
    setIsLoading(true);

    try {
      await listar("/categoria", setCategorias);
    } catch (error: any) {
      console.log("Erro ao listar as Categorias!");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    buscarCategorias();
  }, [categorias.length]);

  console.log("Categorias carregadas:", categorias);

  return (
    <>
      {categorias === undefined && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="flex flex-col justify-center w-full">
        <div className="flex w-full p-4 justify-end items-center text-center">
          <button className="p-2 bg-cyan-800 text-white shadow-md rounded-md hover:scale-105 transition-all cursor-pointer text-2xl">
            <Link to={"/cadastrarcategoria"}>Cadastrar Categoria</Link>
          </button>
        </div>
        <div className="container flex flex-col mx-4">
          {!isLoading && categorias.length === 0 && (
            <span className="my-8 text-3xl text-center">
              Nenhuma categoria foi encontrada
            </span>
          )}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categorias.map((categoria) => (
              <CardCategorias key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarCategorias;
