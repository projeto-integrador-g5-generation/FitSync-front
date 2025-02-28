# 🌐 **FitSync - Frontend **

<br />

<div align="center">
    <img src="https://ik.imagekit.io/ecspdivlw/icons/logo%20fitsync.png?updatedAt=1740674038746" title="logo fitsync" width="50%"/>
</div>

<br /><br />

## 1. Descrição

O **FitSync** é um sistema web que possui uma interface moderna e responsiva, desenvolvida com React e TypeScript, garantindo uma experiência fluida e intuitiva. Os usuários podem criar e gerenciar seus perfis, explorar uma biblioteca de exercícios organizados por categorias, buscar e filtrar treinos conforme suas metas e acompanhar seu progresso. Utilizando Tailwind CSS para estilização e APIs REST para comunicação com o back-end em NestJS, o sistema proporciona uma navegação dinâmica e eficiente, adaptada para diferentes dispositivos.

------

## 2. Recursos

- **Gerenciamento de Usuários**: Cadastre, edite, visualize e exclua usuários facilmente.
- **Consulta de Exercícios por Categorias**: Busque e visualize exercícios filtrando por nome ou categoria, garantindo uma experiência personalizada.
- **Gerenciamento de Exercícios**: Administradores podem criar, atualizar e excluir exercícios, definindo atributos como nome, tempo de execução, séries, repetições, descanso e carga.
- **Interface Responsiva e Intuitiva**: Desenvolvida com um design moderno, adaptado para diferentes dispositivos e tamanhos de tela.
- **Exibição com Cards**: Organização visual eficiente para facilitar a navegação e interação dos usuários.
- **Página Sobre**: Apresentação dos integrantes que desenvolveram o projeto.

------

## 3. Protótipo e Capturas de Tela


<div align="center">
    <img src="https://ik.imagekit.io/ecspdivlw/Readme/home.png?updatedAt=1740759530226" title="Home" width="50%"/>
</div>
<div align="center">
    <img src="https://ik.imagekit.io/ecspdivlw/Readme/exercicio.png?updatedAt=1740759530601" title="Exercicio" width="50%"/>
</div>
<div align="center">
    <img src="https://ik.imagekit.io/ecspdivlw/Readme/sobre.png?updatedAt=1740759530879" title="Sobre" width="50%"/>
</div>
<div align="center">
    <img src="https://ik.imagekit.io/ecspdivlw/Readme/perfil.png?updatedAt=1740759531656" title="Perfil" width="50%"/>
</div>

<br />

------

## 4. Tecnologias

| Item                         | Descrição  |
| ---------------------------- | ---------- |
| **Servidor**                 | Node JS    |
| **Linguagem de programação** | TypeScript |
| **Biblioteca**               | React JS   |
| **Build**                    | Vite       |
| **Framework de Estilização** | Tailwind   |

---

## 5. Pré-requisitos

Antes de iniciar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (v16+)
- [yarn](https://yarnpkg.com/)
- [API FitSync](https://github.com/projeto-integrador-g5-generation/FitSync-nest) 

---

## 6. Configuração e Execução

1. Clone o repositório do Projeto
2. Instale as dependências: `yarn`
3. Clone o repositório do Projeto Backend: [Link](https://github.com/projeto-integrador-g5-generation/FitSync)
4. Siga as instruções de **Configuração e Execução** descritas no README do Projeto Backend
5. Adicione o endereço de execução do projeto na variável de ambiente **VITE_API_URL**, no projeto React
6. Execute o Projeto React: `yarn dev`
7. A aplicação React estará disponível no endereço: `http://localhost:5173`

---

## 7. Estrutura do Projeto

```plaintext
src/
│
├── components/       # Componentes reutilizáveis
├── models/           # Estrutura de dados da aplicação-
├── pages/            # Páginas da aplicação
├── services/         # Integração com a API (requisições HTTP)
├── utils/            # Funções auxiliares (alerts)
└── App.tsx           # Componente principal da aplicação
```

---

## 8. Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch com a sua feature (`git checkout -b minha-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Faça um push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request