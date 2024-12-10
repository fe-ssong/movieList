import { Link } from "react-router-dom";
import './movieCard.css';



const MovieCard = ({ movies }) => {  
  
  return (
    
    <div className="movie-container">
          {movies?.map((movie) => (
            <div key={movie.id}>        
              <Link to={`/movie-detail/${movie.id}`} className='link'>
                <div className='movie-poster'>                   
                  <img className='imgName' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movies.title}></img>
                  <p className='movie-title'>{movie.title}</p>
                  <div className='movie-vote'>★{movie.vote_average}</div>
                </div>                  
              </Link>
            </div>           
          ))}
    </div>          
  );  
};


export default MovieCard;
