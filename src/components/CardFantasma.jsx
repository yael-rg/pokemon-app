
const CardFantasma = ({pokemonFantasma}) => {

    return(
        <>
        <div className="text-center">
            <p>{pokemonFantasma.name}</p>
        

        <div>
            <img
            alt={`imagen de ${pokemonFantasma.name}`}
             src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonFantasma.id}.png`}
             className="block mx-auto"
            />
        </div>
        </div>
        </>
    )
}

export default CardFantasma