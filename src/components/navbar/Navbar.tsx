import { User } from "@phosphor-icons/react"
import { Link } from "react-router-dom"
import { useDictionary } from "../../context/DictionaryProvider";

function Navbar() {
    
    // const navigate = useNavigate();
    const { translate } = useDictionary();
    
  return (
    <>
                    <div className='
            w-full 
            flex 
            justify-center 
            py-4 
            bg-gradient-to-r from-cyan-400 to-cyan-700 
            text-white
        '>
            <div className='
                container
                flex
                justify-between 
                text-lg
                px-6
            '>
                <Link to= "/home" 
                className="text-2xl font-bold">
                    <img
					    src="https://ik.imagekit.io/alanaoliv/imagens_api-20250117T123121Z-001/imagens_api/FITSYNC__3_-removebg-preview.png"
						alt="Logo"
						className="w-30"
					/>
                </Link>

                <div className='
                    flex 
                    gap-4
                    justify-around
                    pl-8
                    pr-8
                    font-semibold
                '>
                    <Link to='/categorias' className='hover:underline'>
                        {translate("categoria")}
                    </Link>
                    <Link to='/exercicios' className='hover:underline'> 
                        {translate("exercicios")}
                    </Link>
                    <Link to='/sobre' className='hover:underline'>       
                        {translate("about")}
                    </Link> 
                    <Link to='/perfil' className='hover:underline'>
                        <User size={32} /> 
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar