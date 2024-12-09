import { Link } from "react-router-dom";
import './movieCard.css';


const MovieCard = ({ movies }) => {
  
  return (
    <div className="movie-container">
      
          {movies.map((movie) => (          
              <Link key={movie.id} to={`/movie-detail/${movie.id}`} className='link'>                    
                  <img className='imgName' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movies.title}></img>
                  <p>{movie.title}</p>
                  <div>★{movie.vote_average}</div>                 
              </Link>             
          ))}
       
    </div>        
  );
};


export default MovieCard;
