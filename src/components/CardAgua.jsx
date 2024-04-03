

const CardAgua = ({pokemon}) => {

    return(
        <>
            <div className="mx-auto">
                <p className="text-center">{pokemon.name}</p>

                <div className="text-center">
                <img
                className="block mx-auto"
                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                 alt={`imagen de ${pokemon.name}`}
                 />
                </div>
            </div>
        </>
    )
}

export default CardAgua