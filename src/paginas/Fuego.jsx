import { useEffect, useState } from 'react';
import axios from 'axios';
import usePokemon from '../hooks/usePokemon'
import CardFuego from '../components/CardFuego';

const Fuego = () => {

    const {datosPokemonesFuego} = usePokemon();

    
    return(
        <>

        <div className='text-center'>
            <h2 className='font-bold text-4xl mt-4 mb-8'>Pokemon fuego</h2>
        </div>

        <div className='mx-auto mt-20'>
          <div className='grid grid-cols-1'>
        <div className='md:grid lg:grid-cols-5 md:grid-cols-3 gap-8 mx-auto'>
        {
            datosPokemonesFuego.map( pokemon => (
              <CardFuego 
                pokemon = {pokemon}
                key={pokemon.id}
              />
            ))
            } 
        </div>
        </div>
        </div>
        
        </>
    )
}

export default Fuego