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
  redes: ["Acesse nossas redes sociais", "Access our social networks", "Accede a nuestras redes sociales"],
  categoria: ["Categoria", "Category", "Categoría"],
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