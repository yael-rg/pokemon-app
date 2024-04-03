import usePokemon from "../hooks/usePokemon"

const Alerta = () => {

    const {alerta} = usePokemon()

    return(
        <div>
            <p className="bg-red-300 text-white p-2 font-bold rounded-md uppercase mt-2 text-center">{alerta}</p>
        </div>
    )
}

export default Alerta