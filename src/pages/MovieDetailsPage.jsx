import { useState, useEffect, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { movieDetails } from '../services/moviesApi.js';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import s from './MovieDetailsPage.module.css';

export default function MovieView() {
  const { movieId } = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      setLoading(true);
      try {
        const movie = await movieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovie();
  }, [movieId]);

  const path = location?.state?.from ?? '/';

  return (
    <div className={s.movie__detailsPage__container}>
      {loading && 'Loading...'}
      {error && <p>An error occured: {error.message}</p>}
      <Link to={path}>
        <button className={s.back__btn}>Go back</button>
      </Link>
      {movie && <MovieDetails movie={movie} />}
      <h2>Additional information</h2>
      <ul className={s.infoList}>
        <li>
          <Link
            to={`/movies/${movieId}/cast`}
            state={{ from: path }}
            className={s.infoLink}
          >
            Cast
          </Link>
        </li>
        <li>
          <Link
            to={`/movies/${movieId}/reviews`}
            state={{ from: path }}
            className={s.infoLink}
          >
            Review
          </Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
}
