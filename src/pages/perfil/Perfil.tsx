/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { listar } from "../../service/Service";
import { Usuario } from "../../model/Usuario";
import { IMC_FAIXAS } from "./ImcFaixas";

function Perfil() {
  const [usuario, setUsuario] = useState({} as Usuario);

  const [imc, setImc] = useState<number>(0);
  const [imcImagem, setImcImagem] = useState<string>("");
  const [imcCategoria, setImcCategoria] = useState<string>("");
  const [imcDescricao, setImcDescricao] = useState<string>("");
  const [imcStyle, setImcStyle] = useState<string>("bg-yellow-500");


  useEffect(() => {
    async function buscarUsuario() {
      try {
        await listar(`/usuarios/2`, setUsuario);
      } catch (error: any) {
        if (error.toString().includes("401")) {
          console.log(error)
        }
      }
    }

    buscarUsuario();
  }, []);

  useEffect(() => {
    if (usuario.imc !== undefined) {
      setImc(usuario.imc);
    }
  }, [usuario]); 
  

  useEffect(() => {
    const imcData = IMC_FAIXAS.find((range) => imc <= range.max);
    if (imcData) {
      setImcImagem(imcData.imagem);
      setImcCategoria(imcData.categoria);
      setImcDescricao(imcData.descricao);
      setImcStyle(imcData.cor);
    }
  }, [imc]);

  return (
    <div className="w-full min-h-screen bg-cyan-400 flex flex-col">
      <img
        className="border-white border-b-8 w-full h-72 object-cover"
        src="https://ik.imagekit.io/z8ilvvp84p/Diario-do-Comercio-25.jpg?updatedAt=1740690885854"
        alt="Capa do Perfil"
      />

      <img
        className="relative z-10 border-8 border-white mx-16 mt-[-8rem] rounded-full w-56 h-56 object-cover"
        src={usuario.foto}
        alt={`Foto de perfil de ${usuario.nome}`}
      />

      <div className="flex flex-col md:flex-row gap-2 py-1 px-4">
        <div className="max-w-xl w-full flex flex-col justify-center items-center bg-cyan-900 rounded-2xl shadow-md text-2xl text-white">
          <div className="p-4 text-lg rounded flex flex-col gap-4">
            <p>
              <span className="font-semibold">Nome:</span> {usuario.nome}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {usuario.usuario}
            </p>
            <p>
              <span className="font-semibold">Peso:</span> {usuario.peso} Kg
            </p>
            <p>
              <span className="font-semibold">Altura:</span> {usuario.altura} m
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-left grow text-2xl bg-cyan-00 rounded-2xl shadow-md bg-cyan-900 text-white">
          <div className="p-2 text-lg rounded">
            <h2 className="text-center text-2xl font-semibold py-3">
              Índice de Massa Corporal (IMC)
            </h2>

            <div className="flex">
              <div className="w-2/5 flex flex-col justify-center">
                <img
                  className="h-52 object-contain"
                  src={imcImagem}
                  alt="Classificação do IMC"
                />
                <h3 className="flex items-center justify-center font-bold py-2">
                  {imcCategoria}
                </h3>
              </div>

              <div className="w-3/5 flex flex-col justify-around items-center">
                <div className="flex justify-center items-center w-full gap-4">
                  <h2 className="text-xl font-bold">O seu IMC é: </h2>
                  <h3
                    className={`flex items-center justify-center font-bold rounded-full w-20 h-20 shadow-lg ${imcStyle}`}
                  >
                    {imc}
                  </h3>
                </div>
                <p className="text-base p-4 text-justify">{imcDescricao}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
