import axios from "axios"
import usePokemon from "../hooks/usePokemon"
import CardAgua from "../components/CardAgua"



const Agua = () => {

    const {datosPokemonAgua} = usePokemon()


    return(
        <>
            <div className="text-center">
                <h2 className="font-bold text-4xl m-5">Pokemon Agua</h2>
            </div>

            <div className="mx-auto mt-20">
                <div className="grid grid-cols-1">
                <div className="md:grid lg:grid-cols-5 md:grid-cols-3 gap-8 mx-auto">
                {datosPokemonAgua.map( pokemon => (
                    <CardAgua
                        key={pokemon.id}
                        pokemon={pokemon}
                    />
                ))}
                </div>
                </div>
            </div>

        </>
    )
}

export default Agua