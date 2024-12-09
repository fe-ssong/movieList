import './App.css';
import MovieCard from './components/movieCard';
import movieListData from './movieListData.json';
import { useState } from 'react'




const App = () => {
  const [movies] = useState(movieListData.results) 
    
  return (    
    <MovieCard movies={movies} />
    
  )
  
}


export default App;