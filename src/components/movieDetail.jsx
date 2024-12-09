import { useParams } from 'react-router-dom';
import './movieDetail.css';
import movieListData from '../movieListData.json';

const MovieDetail = () => {
  const { id } = useParams();
  const movie = movieListData.results.find((item) => item.id.toString() === id);

  if (!movie) {
    return <div>해당 영화 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>평점: {movie.vote_average}</p>
      <p>장르: {movie.genre_ids}</p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetail;
