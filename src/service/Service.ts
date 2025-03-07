import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

export const listar = async (url: string, setDados: Function) => {
  try {
    const resposta = await api.get(url);
    setDados(resposta.data);
  } catch (error) {
    console.error("Erro na requisição:", error);
  }
};
  
  export const cadastrar = async (
    url: string,
    dados: object,
    setDados: Function
  ) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
  };
  
  export const atualizar = async (
    url: string,
    dados: object,
    setDados: Function
  ) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
  };
  
  export const deletar = async (url: string) => {
    await api.delete(url);
  };
  