import './App.css';
import MovieCard from './components/movieCard';
import { useState, useEffect } from 'react'
import axios from 'axios';



const App = () => {
  const [movies, setMovies] = useState([]) 

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTNlZTFjNDg2YzM2MzRlYjY0Nzc3YWJjZjRlNDVhZiIsIm5iZiI6MTczMzc1MTkwNy4xOTkwMDAxLCJzdWIiOiI2NzU2ZjQ2MzhiMmNjMjc4OGIxMWRkNGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yG1MZU4N-4GnkR6ASm-6AWGCNiVdr5bc0HsJUnd53F4'
      // Authorization: 'Bearer import.meta.env.VITE_TMdb_API_KEY'
    }
  };
  
  
  
  useEffect(() => {
    axios
    .request(options)
    .then(res => setMovies(res.data.results)) // 데이터를 성공적으로 받아 왔을 때 res=response
    .catch(err => console.error(err)); // 데이터를 받아오는데 실패했을 때
  }, []) 
  
  const filteredMovies = movies.filter(filtered => !filtered.adult) // 데이터 안의 adult를 가져와서 flase인 것만 가져오기 위해 '!'사용


  return (    
    <MovieCard movies={filteredMovies} />
  )
  
}


export default App;