import { useState } from "react"
import usePokemon from "../hooks/usePokemon";
import Alerta from "./Alerta";
import DetallesPokemon from "./DetallesPokemon";

const Formulario = () => {

    const {alerta, setAlerta, nombre, setNombre, setPokemon, pokemon} = usePokemon()
   
    const handleSubmit = (e) => {
        e.preventDefault(); 

        if(nombre === ''){
            setAlerta('El campo es obligatorio'); 
            return; 
        }
        
        setPokemon(nombre); 
        setAlerta('');
        setNombre(''); 
    }

    

    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <form 
            onSubmit={handleSubmit}>
                {alerta && <Alerta />}
                <div className="mt-5">
                    <label
                    htmlFor="nombre"
                    className="font-normal text-lg"
                    >Elige el pokemon: {''}</label>
                    <input
                    id="nombre"
                    type='text'
                    className="border rounded-md"
                    placeholder="Ingresa el nombre aqui"
                    value={nombre}
                    onChange = { e => setNombre(e.target.value)}
                    />
                </div>

                    <input
                        type='submit'
                        value='buscar'
                        className="w-full mt-2 bg-yellow-400 text-white font-bold p-1 rounded-md
                        cursor-pointer uppercase hover:bg-yellow-500"
                    />



            </form>
        </div>

        <div className='flex flex-col justify-center items-center'>
            <DetallesPokemon/>
        </div>

        </>
    )
}

export default Formulario