import './MovieApp.css'


export const MovieApp = () => {
  return (
    <div className='container'>
        <h1 className='title'>Movie App</h1>

        <form>
            <input 
            type="text" 
            placeholder='Busca tu pelicula' 
            className='input'/>
            
            <button 
            className='search-button'>Buscar</button>
        </form>
    </div>
  )
}
