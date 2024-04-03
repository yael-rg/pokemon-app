import CardFantasma from "../components/CardFantasma"
import usePokemon from "../hooks/usePokemon"


const Fantasma = () => {
    const {datosPokemonFantasma} = usePokemon()
    return(
        <>
        <div className="text-center">
            <h2 className="text-4xl font-bold mt-5">Pokemon Fantasma</h2>
        </div>

        <div className="mx-auto mt-20">
            <div className="grid grid-cols-1">
                <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 mx-auto">
                        {datosPokemonFantasma.map(pokemonFantasma => (
                            <CardFantasma
                                key={pokemonFantasma.id}
                                pokemonFantasma={pokemonFantasma}
                            />
                        ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Fantasma 