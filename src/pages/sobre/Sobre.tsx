import Carrossel from "../../componentes/equipe/carrossel/Carrossel";


function SobreNos(){

    
    return (
        <>
         
          <section className="bg-gradient-to-r from-cyan-400 to-cyan-700 text-white py-16">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">Sobre o Projeto FitSync</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed text-center">
              O FitSync oferece uma experiência única com treinos adaptados às necessidades de cada pessoa. O FitSync Personalizado 
              é uma plataforma web que ajuda os usuários a alcançarem seus objetivos de saúde e fitness. Com um design moderno e responsivo,
            a plataforma integra a tecnologia ao cotidiano, promovendo uma vida saudável e acessível.
              </p>
            </div>
          </section>
        
          <section className="bg-gray-100 py-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Conheça Nossa Equipe</h2>

          <Carrossel />
          </section>
    
         
          <section className="py-16 px-6 bg-gradient-to-r">
            <div className="text-center mb-7">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Sobre a Equipe</h2>
            </div>
            <div className="text-xl max-w-3xl mx-auto text-gray-700">
              <p className="leading-relaxed text-center">
              A equipe do FitSync é formada por desenvolvedores apaixonados por tecnologia e inovação. Cada um dos membros trouxe suas 
              habilidades e dedicação para tornar o projeto uma solução eficiente para a gestão de usuários.
              O projeto foi desenvolvido com foco na usabilidade e experiência do usuário, oferecendo uma plataforma responsiva e moderna para otimizar a gestão de treinos personalizados, 
              tornando a experiência mais eficiente e acessível.
              </p>
             
                
              
            </div>
          </section>
    
       
        </>
      );
    }
    
    export default SobreNos;