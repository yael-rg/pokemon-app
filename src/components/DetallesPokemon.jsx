import usePokemon from "../hooks/usePokemon";

const DetallesPokemon = () => {
    const {pokemon, datos} = usePokemon()
    const {id} = datos;

    return(
        <>
        {pokemon ? (
            <div>
                <div>
            <img
            alt="imagen del pokemon"
            className="mt-5 object-contain h-60 w-full"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            />
            {/*<h2 className="text-center font-bold text-2xl uppercase text-yellow-700">{datos.name}</h2>*/}
                 </div>


             <div className="mt-5">
            <p className="font-bold text-md text-center">Experiencia Basica: {''}
            <span className="font-normal">{datos.base_experience}</span></p>
            <p className="font-bold text-md text-center">Altura: {''}
            <span className="font-normal">{datos.height}</span></p>
            <p className="font-bold text-md text-center">Peso: {''}
            <span className="font-normal">{datos.weight}</span></p>
           </div>
           
           <div className="flex justify-between gap-4">
            <div className="mt-5">
            <p className="font-bold text-md text-center">Nombre</p>
                <p>{datos.name}</p>
            </div>

            {/*aqui se imprimen las habilidades */}
            <div className="mt-5">
            <p className="font-bold text-md text-center">Habilidaddes</p>
           { datos.id && datos.abilities.map(habilidades => (
                <p
                key={habilidades.ability.name}
                className = 'font-normal text-center'
                >{habilidades.ability.name}</p>
           ))}
           </div >

            {/* aqui se van a imprimir los movimientos  */}
            <div className="mt-5">
                <p className="text-md text-center font-bold">Movimientos</p>
                {datos.id && datos.moves.slice(0, 10).map(movimientos => (
                    <p
                    className="text-center"
                    key={movimientos.move.name}
                    >{movimientos.move.name}</p>
                ))}

                
            </div>

            </div>

        </div>
        ):(
            <p>Aun no haz buscado un pokemon</p>
        )}
        </>
    )
}

export default DetallesPokemon; 