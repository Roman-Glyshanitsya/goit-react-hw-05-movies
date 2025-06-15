import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrending } from '../services/moviesApi.js';
import s from './HomePage.module.css';

export default function HomeView() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      try {
        const movies = await fetchTrending();
        setMovies(movies.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, []);

  return (
    <div>
      {loading && 'Loading...'}
      {error && <p>An error occured: {error.message}</p>}
      {movies && (
        <div className={s.home__container}>
          <h1 className={s.home__title}>Trending Movies</h1>
          <ul className={s.home__list}>
            {movies.map(
              ({ id, title, poster_path, vote_average, release_date }) => {
                const date = new Date(release_date).toLocaleDateString(
                  'en-US',
                  {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  }
                );

                return (
                  <li className={s.home__item} key={id}>
                    <Link to={`/movies/${id}`} className={s.home__link}>
                      <img
                        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                        alt={title}
                      />
                      <div className={s.home__item__textContainer}>
                        <div>
                          <p className={s.home__item__title}> {title}</p>
                          <p> {date}</p>
                        </div>
                        <p className={s.home__item__rating}>
                          {vote_average.toFixed(1)}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              }
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
