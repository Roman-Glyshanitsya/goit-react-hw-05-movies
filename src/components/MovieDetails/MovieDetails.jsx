import PropTypes from 'prop-types';
import s from './MovieDetails.module.css';

export default function MovieDetails({ movie }) {
  return (
    <div className={s.container}>
      <div className={s.imageWrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className={s.textContainer}>
        <h1 className={s.movieTitle}>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h1>
        <p className={s.userScore}>
          User Rating: {movie.vote_average.toFixed(1)}
        </p>
        <h2>Overview</h2>
        <p className={s.overview}>{movie.overview}</p>
        <h2>Genres</h2>
        <p className={s.genres}> {movie.genres.map(g => g.name + ' ')}</p>
      </div>
    </div>
  );
}

MovieDetails.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  }).isRequired,
};
