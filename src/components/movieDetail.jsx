import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './movieDetail.css';
import axios from 'axios'


const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([null])

  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`,
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMdb_API_KEY}`
    }
  };   
 
  useEffect(() => {
    axios
    .request(options)
    .then(res => setMovie(res.data))
    .catch(err => console.error(err));

  //     const fetchMovieDetails = async () => {
  //     try {
  //       const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
  //         params: {
  //         api_key: import.meta.env.VITE_TMdb_API_KEY
  //       }})        
  //     }
  //     catch (error) {console.log("상세정보 불러오기 오류", error)}
  // } 
  //   fetchMovieDetails()  
}, [id])

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>평점: {movie.vote_average}</p>
      <p className='genre-name'>장르: {movie.genres?.map((genre) => genre.name)}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
