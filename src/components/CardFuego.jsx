
const CardFuego = ({pokemon}) => {
    
    return(
        <div className="mx-auto">
            <p className="text-center">{pokemon.name}</p>

            <div className="text-center">
            <img
            className="block mx-auto"
                alt={`imagen de ${pokemon.name}`}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            />
            
            </div>

        </div>
    )
}

export default CardFuego