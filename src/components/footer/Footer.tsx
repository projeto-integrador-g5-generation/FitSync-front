import { InstagramLogo, GithubLogo } from "@phosphor-icons/react"
import { useDictionary } from "../../context/DictionaryProvider";

function Footer() {

   const { translate, setLanguage, language } = useDictionary();

    let data = new Date().getFullYear()

  return (
    <>
     <div className="w-full p-4 bg-cyan-700 text-white text-center flex flex-col items-center">
        <label htmlFor="language-select" className="mt-2">
        </label>
        <select
            id="language-select"
            className="mt-2 p-2 bg-cyan-900 text-white rounded-md"
            value={ language }
            onChange={(e) => setLanguage(Number(e.target.value))}
        >
        <option value="0">🇧🇷 Português</option>
        <option value="1">🇺🇸 English</option>
        <option value="2">🇪🇸 Español</option>
      </select>
    </div>
    <div className="
            flex 
            justify-center 
            bg-cyan-700
            text-white
            
        ">
            <div className="
                container
                flex
                flex-col
                items-center
                py-4
            ">
                <p className="text-xl font-semibold">
                     FitSync® | Copyright: {data}
                </p>
                <p>
                    {translate("criado")} <a href="https://github.com/projeto-integrador-g5-generation" className='hover:underline font-bold'>G5 Generation</a>
                </p>
                <p>{translate("redes")}</p>
                <div className="flex gap-2">
                    <a href="" target="_blank"> 
                    <InstagramLogo size={48} weight="bold" />
                    </a> 
                    <a href="https://github.com/projeto-integrador-g5-generation/FitSync-front" target="_blank"> 
                    <GithubLogo size={48} weight="bold" />
                    </a>
                </div>
            </div>
        </div>
    </>
    )
}

export default Footer