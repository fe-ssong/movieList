// import { useParams } from 'react-router-dom';
import { useState } from 'react'
import './movieDetail.css';
import movieDetailData from '../movieDetailData.json';

const MovieDetail = () => {
  // const { id } = useParams();
  // const movie = movieListData.results.find((item) => item.id.toString() === id);
  const [movieDetail] = useState(movieDetailData)
  // if (!movie) {
  //   return <div>해당 영화 정보를 찾을 수 없습니다.</div>;
  // }

  return (
    <div className="movie-detail">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
        alt={movieDetail.title}
      />
      <h2>{movieDetail.title}</h2>
      <p>평점: {movieDetail.vote_average}</p>
      <p className='genre-name'>장르: {movieDetail.genres.map((genre) => genre.name)}</p>
      <p>{movieDetail.overview}</p>
    </div>
  );
};

export default MovieDetail;
