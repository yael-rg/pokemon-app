
const CardNormal = ({pokemonNormal}) => {

    return(
        <>
        <div className="text-center">
        <p>{pokemonNormal.name}</p>

        <div>
            <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNormal.id}.png`}
                alt={`Imagen de ${pokemonNormal.name}`}
                className="block mx-auto"
            />
        </div>
        </div>


        </>
    )
}

 export default CardNormal