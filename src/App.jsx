import { useEffect, useState } from 'react'
import Titulo from './Components/Titulo'
import Formulario from './Components/Formulario'
import ListaNoticias from './Components/ListaNoticias'


function App() {
  let [listaNoticias,setListaNoticias] = useState([])
  let [categoriaSeleccionada,setCategoriaSeleccionada] = useState('')


  useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${categoriaSeleccionada}&language=es&apiKey=d6f0ec4b0d064a2ebb76dff8d04182e7`)
    .then(res => res.json())
    .then(data => setListaNoticias(data.articles))

    console.log(listaNoticias)
  },[categoriaSeleccionada])
  return (
    <>
      <Titulo></Titulo>
      <hr />
      <Formulario categoriaSeleccionada={categoriaSeleccionada} setCategoriaSeleccionada={setCategoriaSeleccionada}></Formulario>
      <ListaNoticias noticias={listaNoticias}></ListaNoticias>
    </>
  )
}

export default App
