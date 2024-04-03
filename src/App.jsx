import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DetallesPokemon from './components/DetallesPokemon'
import Formulario from './components/Formulario'
import { PokemonProvider } from './context/PokemonProvider'
import Layout from './layout/Layout'
import Fuego from './paginas/Fuego'
import Agua from './paginas/Agua'
import Normal from './paginas/Normal'
import Fantasma from './paginas/Fantasma'


function App() {
  return (
    <>
    <BrowserRouter>
    <PokemonProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
        <Route index element={<Formulario />}/>
        <Route path='fuego' element={<Fuego />}/>
        <Route path='agua' element={<Agua />} />
        <Route path='normal' element={<Normal />} />
        <Route path='fantasma' element={<Fantasma />} />
      </Route>
      </Routes>
    </PokemonProvider>
    </BrowserRouter>
    </>
  )
}

export default App
