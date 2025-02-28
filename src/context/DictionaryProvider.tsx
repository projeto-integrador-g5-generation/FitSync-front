import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type DictionaryType = {
  [key: string]: string[];
};


const DictionaryContext = createContext<{
  translate: (key: string) => string;
  setLanguage: (lang: number) => void;
  language: number;
} | null>(null);

// Dicionário de palavras traduzidas
const dictionary: DictionaryType = {
  home: ["Início", "Home", "Inicio"],
  about: ["Sobre nós", "About us", "Sobre nosotros"],
  contact: ["Contato", "Contact", "Contacto"],
  criado: ["Criado e Desenvolvido por:", "Created and Developed by:", "Creado y desarrollado por:"],
  welcome: ["Bem-vindo!", "Welcome!", "¡Bienvenido!"],
  changeLanguage: ["Trocar Idioma", "Change Language", "Cambiar Idioma"],
  exercicios: ["Exercícios", "Exercises", "Ceremonias"],
  redes: ["Acesse nossas redes sociais", "Access our social media", "Accede a nuestras redes sociales"],
  categoria: ["Categoria", "Category", "Categoría"],
  comece: ["Comece agora!","Start now!","¡Empiece ahora!"],
  venha: ["Venha treinar com um plano feito sob medida para você!", "Come train with a plan made just for you!", "¡Ven a entrenar con un plan hecho a tu medida!"],
  corpoEMente: ["Corpo e Mente", "Body and Mind ", "Cuerpo y mente"],
  sincronizados: ["Sincronizados", "Synchronized", "Sincronizados"],
  motivado: ["Mantenha-se motivado e alcance sua melhor versão!","Stay motivated and achieve your best version!","¡Manténte motivado y logra tu mejor versión!"],
  catNaoEncontrada: ["Categoria não encontrada!","Stay motivated and achieve your best version!","¡Manténte motivado y logra tu mejor versión!"],
  catDeletada: ["Categoria apagada com sucesso", "", ""],
  deletarCat: ["Deletar Categoria", "Delete Category", "Eliminar categoría"],
  confirmacaoDeletarCat: ["Você tem certeza de que deseja apagar a categoria a seguir?", "Are you sure you want to delete the following category?", "¿Está seguro de que desea eliminar la siguiente categoría?"],
  sim: ["Sim","Yes","Sí"],
  nao: ["Não", "No","No"],
  catNotFound: ["Nenhuma categoria foi encontrada", "No categories were found","No se encontraron categorías"],
  cadastrarCat: ["Cadastrar Categoria","Register Category","Registrar categoría"],
  descricao: ["Descrição","Description","Descripción"],
  treino: ["Treino","Training","Capacitación"],
  tempo: ["Tempo","Time","Tiempo"],
  descanso: ["Descanso","Rest","Descansar"],
  series: ["Séries","Series","Serie"],
  carga: ["Carga","Load","Carga"],
  repeticoes: ["Repetições","Reps","Representantes"],
  execExerc: ["Execução do exercicio","Execution of the exercise","Ejecución del ejercicio"],
  delExerc: ["Deletar Exercicio","Delete Exercise","Eliminar ejercicio"],
  confirmacaoDelExerc: ["Você tem certeza de que deseja apagar o Exercicio a seguir?","Are you sure you want to delete the Exercise below?","¿Está seguro de que desea eliminar el ejercicio siguiente?"],
  videoExerc: ["video do Exercício","Exercise video","Vídeo de ejercicio"],
  exercicio: ["Exercicio","Exercise","Ejercicio"],
  tempoExerc: ["Tempo do Exercicio","Exercise Time","Tiempo de ejercicio"],
  selecionarCat: ["Selecione um Categoria", "Select a Category", "Seleccione una categoría"],
  cadastrarExerc: ["Cadastrar Exercício","Register Exercise","Registrarse Ejercicio"],
  nome: ["Nome","Name","Nombre"],
  peso: ["Peso","Weight","Peso"],
  altura: ["Altura","Height","Altura"],
  imc: ["Índice de Massa Corporal","Body Mass Index","Índice de masa corporal"],
  resultadoImc: ["O seu IMC é","Your BMI is","Su IMC es"], 
  sobre: ["Sobre o Projeto FitSync","About the FitSync Project","Acerca del proyecto FitSync"],
  texto1: ["O FitSync oferece uma experiência única com treinos adaptados às necessidades de cada pessoa. O FitSync Personalizado é uma plataforma web que ajuda os usuários a alcançarem seus objetivos de saúde e fitness. Com um design moderno e responsivo, a plataforma integra a tecnologia ao cotidiano, promovendo uma vida saudável e acessível.","FitSync offers a unique experience with workouts adapted to each person's needs. Personalized FitSync is a web platform that helps users achieve their health and fitness goals. With a modern and responsive design, the platform integrates technology into everyday life, promoting a healthy and accessible life.","FitSync ofrece una experiencia única con entrenamientos adaptados a las necesidades de cada persona. Customized FitSync es una plataforma web que ayuda a los usuarios a alcanzar sus objetivos de salud y fitness. Con un diseño moderno y responsivo, la plataforma integra la tecnología en la vida cotidiana, promoviendo una vida saludable y accesible."],
  texto2: ["A equipe do FitSync é formada por desenvolvedores apaixonados por tecnologia e inovação. Cada um dos membros trouxe suas habilidades e dedicação para tornar o projeto uma solução eficiente para a gestão de usuários. O projeto foi desenvolvido com foco na usabilidade e experiência do usuário, oferecendo uma plataforma responsiva e moderna para otimizar a gestão de treinos personalizados,  tornando a experiência mais eficiente e acessível.","The FitSync team is made up of developers who are passionate about technology and innovation. Each of the members brought their skills and dedication to make the project an efficient solution for user management. The project was developed with a focus on usability and user experience, offering a responsive and modern platform to optimize the management of personalized training, making the experience more efficient and accessible.","El equipo de FitSync está formado por desarrolladores apasionados por la tecnología y la innovación. Cada uno de los integrantes aportó sus habilidades y dedicación para hacer del proyecto una solución eficiente para la gestión de usuarios. El proyecto se desarrolló centrándose en la usabilidad y la experiencia de usuario, ofreciendo una plataforma responsiva y moderna para optimizar la gestión de la formación personalizada, haciendo la experiencia más eficiente y accesible."],
  equipe: ["Conheça Nossa Equipe","Meet Our Team","Conozca a nuestro equipo"],

};


interface DictionaryProviderProps {
  children: ReactNode;
}

// Criamos o Provider para compartilhar as traduções com os componentes
export const DictionaryProvider = ({ children }: DictionaryProviderProps) => {
  const [language, setLanguage] = useState<number>(() => {
    return Number(localStorage.getItem("language")) || 0;
  });

  // Quando o idioma mudar, salvamos no navegador para lembrar depois
  useEffect(() => {
    localStorage.setItem("language", language.toString());
  }, [language]);

  // Função que traduz palavras com base no idioma atual
  const translate = (key: string): string => {
    return dictionary[key] ? dictionary[key][language] : key;
  };

  return (
    <DictionaryContext.Provider value={{ translate, setLanguage, language }}>
      {children}
    </DictionaryContext.Provider>
  );
};

// Criamos um Hook para facilitar o uso da tradução nos componentes
export const useDictionary = () => {
  const context = useContext(DictionaryContext);
  if (!context) {
    throw new Error("useDictionary deve ser usado dentro de um DictionaryProvider");
  }
  return context;
};

export default DictionaryProvider