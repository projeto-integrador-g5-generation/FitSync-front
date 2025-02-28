import Categoria from "./Categoria";

export default interface Exercicio{
    id: number;
    nome: string;
    tempo: number;
    series: number ;
    repeticoes: number;
    descanso: number ;
    carga: number ;
    video: string;
    categoria?: Categoria | null;

}