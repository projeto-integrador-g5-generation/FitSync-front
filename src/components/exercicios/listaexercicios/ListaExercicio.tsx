
import Exercicio from "../../../models/Exercicio";
import { useEffect, useState } from "react";

import { DNA } from "react-loader-spinner";
import CardExercicios from "../cardexercicios/CardExercicios";
import { listar } from "../../../service/Service";




function ListaExercicio() {

    

    const [exercicios, setExercicios] = useState<Exercicio[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)


    async function buscarExercicios() {
       

        try{
            await listar('/exercicios', setExercicios)
        }catch(error: any){
            console.log("Erro ao listar os Exercicios!")
        }finally {
          setIsLoading(false);
        }
		
	}

	useEffect(() => {
	buscarExercicios()
	}, [exercicios.length])



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
        <div className="flex justify-center w-full my-4">
          <div className="container flex flex-col">
            <div
              className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
            >
             {exercicios.map((exercicio) => (
							<CardExercicios
								key={exercicio.id}
								exercicio={exercicio}
							/>
						))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaExercicio;
