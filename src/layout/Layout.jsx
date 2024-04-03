import { Outlet, Link } from "react-router-dom"
import imagenPokebola from '../img/poke.png'
import imagenLogo from '../img/International_pokémon_logo.svg.png'

const Layout = () => {

    return(
        <main>
            <div className="bg-red-600">

            <div className="md:flex md:justify-between flex flex-col items-center">

            <div className="mt-5">
            <Link to='/'
            >
                <img
                 className='h-20'
                src={imagenLogo}
                />
            </Link>
            </div>

            

            <nav className="my-auto flex flex-col md:flex-row mb-5 ">
                <Link
                to='fuego'
                className="bg-yellow-500 m-2 text-white p-2 rounded-md font-bold uppercase text-center w-full"
                >
                    fuego                
                </Link>

                <Link
                to='agua'
                className="bg-yellow-500 m-2 text-white p-2 rounded-md font-bold uppercase text-center w-full"
                >
                    agua                
                </Link>

                <Link
                to='normal'
                className="bg-yellow-500 m-2 text-white p-2 rounded-md font-bold uppercase text-center w-full"
                >
                    normal                
                </Link>
                <Link
                to='fantasma'
                className="bg-yellow-500 m-2 text-white p-2 rounded-md font-bold uppercase text-center w-full"
                >
                    fantasma               
                </Link>
            </nav>
            </div>
            </div>
            <div>
                <Outlet /> 
            </div>
        </main>
    )
}

export default Layout