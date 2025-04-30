import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MovieApp } from './MovieApp'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieApp />
  </StrictMode>,
)

    const urlBase = "https://api.themoviedb.org/3/search/movie?"
  const API_KEY = "dd6a73bd51ab77a0c577136766bd6e33"