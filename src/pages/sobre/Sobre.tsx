import Carrossel from "../../components/equipe/carrossel/Carrossel";
import { useDictionary } from "../../context/DictionaryProvider";

function SobreNos(){
    
  const { translate } = useDictionary();
    
    return (
        <>
         
          <section className="bg-gradient-to-r from-cyan-400 to-cyan-700 text-white py-16">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-4">{translate("sobre")}</h1>
              <p className="text-xl max-w-3xl mx-auto leading-relaxed text-center">
                {translate("texto1")}
              </p>
            </div>
          </section>
        
          <section className="bg-gray-100 py-16">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">{translate("equipe")}</h2>

          <Carrossel />
          </section>
    
         
          <section className="py-16 px-6 bg-gradient-to-r">
            <div className="text-center mb-7">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">{translate("about")}</h2>
            </div>
            <div className="text-xl max-w-3xl mx-auto text-gray-700">
              <p className="leading-relaxed text-center">
              {translate("texto2")} 
              </p>
             
                
              
            </div>
          </section>
    
       
        </>
      );
    }
    
    export default SobreNos;