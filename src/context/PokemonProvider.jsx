import axios from "axios";
import { createContext, useEffect, useState } from "react";

const PokemonContext = createContext(); 

const PokemonProvider = ({children}) => {

    const [alerta, setAlerta] = useState('');  
    const [nombre, setNombre] = useState(''); 
    const [datos, setDatos] = useState({});
    const [pokemon, setPokemon] = useState('');
    const [datosPokemonesFuego, setDatosPokemonesFuego] = useState([]);
    const [datosPokemonAgua, setDatosPokemonAgua] = useState([]); 
    const [datosPokemonNormal, setDatosPokemonNormal] = useState([]); 
    const [datosPokemonFantasma, setDatosPokemonFantasma] = useState([])
   
 
    useEffect(() => {
        const consultarApi = async () => {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
                const {data} = await axios(url)
                setDatos(data)
            } catch (error) {
                console.log(error)
            }
        }
        consultarApi()
    },[pokemon])

        const obtenerPokemonesFuego = async () => {
                    const url = `https://pokeapi.co/api/v2/type/fire`; 
                    const {data} = await axios(url);
    
                   const promises =  data.pokemon.map( async (poke) => {
                        const res = await fetch(poke.pokemon.url); 
                        const data = await res.json();  
                        return data; 
                    }
                    )
                    const results = await Promise.all(promises);  
                    setDatosPokemonesFuego(results)
                    
        }

        const obtenerPokemonAgua = async () => {
            const url = `https://pokeapi.co/api/v2/type/water`; 
            const {data} = await axios(url); 
            console.log(data
                )
           const promises = data.pokemon.map( async (poke) => {
                const url = poke.pokemon.url; 
                const {data} = await axios(url);
                return data 
            })

            const results = await Promise.all(promises); 
            setDatosPokemonAgua(results) 
            
           
        }

        const obtenerPokemonNormal = async () => {
            const url = `https://pokeapi.co/api/v2/type/normal`; 
            const {data} = await axios(url);
            
            const promises = data.pokemon.map(async (pokemon) => {
                const url = pokemon.pokemon.url
                const {data} = await axios(url)
                return data
            }) 

            const results = await Promise.all(promises)
            setDatosPokemonNormal(results)

        }

        const obtenerPokemonFantasma = async () => {
            const url = `https://pokeapi.co/api/v2/type/ghost`
            const {data} = await axios(url)

            const promises = data.pokemon.map( async (pokemon) => {
                const url = pokemon.pokemon.url
                const {data} = await axios(url)
                return data
            })

            const results = await Promise.all(promises); 
            console.log(results)
            setDatosPokemonFantasma(results)
        }

    
           


    // aquie se renderiza para obtener la informacion del tipo de pokemon
    useEffect(() =>{
        obtenerPokemonesFuego()
    },[])

    useEffect(() => {
        obtenerPokemonAgua()
    }, [])

    useEffect(() => {
        obtenerPokemonNormal()
    }, [])

    useEffect(() => {
        obtenerPokemonFantasma()
    }, [])
     
    return(
        <PokemonContext.Provider 
        value={{
            alerta, 
            setAlerta,
            nombre, 
            setNombre, 
            pokemon, 
            setPokemon, 
            datos, 
            datosPokemonesFuego,
            datosPokemonAgua, 
            datosPokemonNormal, 
            datosPokemonFantasma,
            pokemon
        }}>
            {children}
        </PokemonContext.Provider>
    )
}

export {
    PokemonProvider
}

export default PokemonContext

