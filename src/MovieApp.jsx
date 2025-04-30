import { useState } from 'react'
import './MovieApp.css'


export const MovieApp = () => {

  const [search, setSearch] = useState('')

  const [movieList, setMovieList] = useState([])

  const urlBase = "https://api.themoviedb.org/3/search/movie?"
  const API_KEY = "dd6a73bd51ab77a0c577136766bd6e33"

  const handleInputChange = ({target}) => {
    setSearch(target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies()
    console.log(search)
  }

  const getMovies = async () => {
    try{
      const response = await fetch (`${urlBase}?query=${search}&api_key=${API_KEY}`)
      const data = await response.json()
      console.log(data)
    }catch(error) {
      console.error('Error fetching movies:', error)
    }
  }

  return (
    <div className='container'>
        <h1 className='title'>Movie App</h1>

        <form onSubmit={ handleSubmit}>
            <input 
            type="text" 
            placeholder='Busca tu pelicula' 
            className='input'
            value= {search}
            onChange={ handleInputChange }
            />
            <button 
            className='search-button'>Buscar</button>
        </form>
    </div>
  )
}
