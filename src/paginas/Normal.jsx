import CardNormal from "../components/CardNormal"
import usePokemon from "../hooks/usePokemon"


const Normal = () => {

    const {datosPokemonNormal} = usePokemon()
        console.log(datosPokemonNormal)
    return(
        <>
            <div className="text-center">
                <h2 className="font-bold text-4xl m-5">Pokemon Normal</h2>
            </div>

            <div className="mx-auto mt-20">
            <div className="grid grid-cols-1">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 gap-8 mx-auto">
                {datosPokemonNormal.map( pokemonNormal => (
                    <CardNormal
                        key={pokemonNormal.id}
                        pokemonNormal= {pokemonNormal}
                    />
                ))}
            </div>
            </div>
            </div>
        </>       
    )
}

export default Normal 