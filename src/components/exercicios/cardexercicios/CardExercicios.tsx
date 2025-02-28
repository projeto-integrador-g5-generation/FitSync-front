import { Link } from "react-router-dom";
import Exercicio from "../../../models/Exercicio";


interface CardExercicioProps{
  exercicio: Exercicio
}

function CardExercicio({exercicio}: CardExercicioProps) {
  return (
    <>
      <div
        id="container-pai"
        className="border-1 border-gray-300 w-60 h-105 rounded-4xl flex flex-col overflow-hidden drop-shadow-lg text-sm m-auto bg-white shadow-lg hover:scale-102 transition-all items-center"
      >
        <div
          id="Categoria"
          className="flex items-center justify-center  w-full bg-cyan-700"
        >
          <div>
          
	
          <Link to={`/deletarexercicios/${exercicio.id}`} >  
            <img
              src="https://ik.imagekit.io/50n5k5wmb/heartbeat.svg?updatedAt=1740671289798"
              alt=""
              className="w-10 p-0.5"
            /></Link>


            
          </div>
          <h2 className="py-2 bold  text-white">{exercicio.categoria?.nome}</h2>

          <div id="" className="p-1">
            
            
          <Link to={`/editarexercicio/${exercicio.id}`}>
           
              <img src="https://ik.imagekit.io/50n5k5wmb/pencil.svg?updatedAt=1740673000487" alt="" />
            
            </Link>
          </div>
          <div>
          <Link to={`/deletarexercicio/${exercicio.id}`} >
            
            <img src="https://ik.imagekit.io/50n5k5wmb/trash.svg?updatedAt=1740672961060" alt =""/>
            
          </Link>
          </div>

        </div>

        <div id="NomeExercicio" className="flex justify-center items-center p-4">
          <h1 className="bold text-lg">{exercicio.nome}</h1>
        </div>

        <div
          id="tempo-exercicio-series"
          className="w-50 flex flex-col bg-cyan-700 text-white "
        >
          <div id="quantidadeseries" className="p-2">
            <h1>Treino:</h1>

            <p>tempo (min): {exercicio.tempo}</p>
            <p>Séries: {exercicio.series}</p>
            <p>Repetições: {exercicio.repeticoes}</p>
            <p>descanso: {exercicio.descanso}</p>
            <p>carga: {exercicio.carga}</p>
          </div>
        </div>

        <div id="videoficaaqui" className=" bg-cyan-700  m-4 flex w-50  flex-col justify-center items-center">
                <h3 className="text-white">
                   execução do exercicio
                </h3>

          <div id="video" className="p-4">
            <video
              className="rounded-2xl shadow-lg "
              controls
              autoPlay
              loop
            >
              <source src={exercicio.video} />
              
            </video>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardExercicio;
