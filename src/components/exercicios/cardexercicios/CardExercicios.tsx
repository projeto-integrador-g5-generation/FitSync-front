import { Link } from "react-router-dom";
import Exercicio from "../../../models/Exercicio";
import { useDictionary } from "../../../context/DictionaryProvider";

interface CardExercicioProps {
  exercicio: Exercicio;
}

function CardExercicio({ exercicio }: CardExercicioProps) {
  
  const { translate } = useDictionary();
  
  return (
    <>
      <div className="border-1 border-gray-300 flex flex-col drop-shadow-lg text-sm shadow-lg hover:scale-102 transition-all items-center bg-white p-4 rounded-lg gap-2 max-w-96">
        <div className="flex items-center justify-center w-full bg-cyan-700 p-2 gap-4  rounded-lg" >
          <div>
            <Link to={`/deletarexercicio/${exercicio.id}`}>
              <img src="https://ik.imagekit.io/50n5k5wmb/heartbeat.svg?updatedAt=1740671289798" />
            </Link>
          </div>
          <h2 className="bold text-white">{exercicio.categoria?.nome}</h2>

          <div>
            <Link to={`/editarexercicio/${exercicio.id}`}>
              <img src="https://ik.imagekit.io/50n5k5wmb/pencil.svg?updatedAt=1740673000487" />
            </Link>
          </div>
          <div>
            <Link to={`/deletarexercicio/${exercicio.id}`}>
              <img src="https://ik.imagekit.io/50n5k5wmb/trash.svg?updatedAt=1740672961060" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center items-center p-4 w-full">
          <h1 className="bold text-lg">{exercicio.nome}</h1>
        </div>

        <div className="flex flex-col bg-cyan-700 text-white w-full  rounded-lg">
          <div className="p-2 text-md">
            <h1>{translate("treino")}:</h1>
            <p>{translate("tempo")} (min): {exercicio.tempo}</p>
            <p>{translate("series")}: {exercicio.series}</p>
            <p>{translate("repeticoes")}: {exercicio.repeticoes}</p>
            <p>{translate("descanso")}: {exercicio.descanso}</p>
            <p>{translate("carga")}: {exercicio.carga}</p>
          </div>
        </div>

        <div className=" bg-cyan-700 flex flex-col justify-center items-center w-full  rounded-lg">
          <h3 className="text-white text-lg">{translate("execExerc")}</h3>

          <div id="video" className="w-full p-2 min-h-56">
            <iframe
              className="w-full h-full"
              src={exercicio.video}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardExercicio;
