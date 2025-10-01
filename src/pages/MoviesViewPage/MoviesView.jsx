import { useState, useEffect } from 'react';
import { useLocation, Link, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { searchMovie } from '../../services/moviesApi.js';
import s from './MoviesView.module.css';
import noImage from '../../images/no-image.png';

export default function MoviesView() {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const queryValue = searchParams.get('query');

  const [filter, setFilter] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filter) {
      if (queryValue) {
        setFilter(queryValue);
      }
      return;
    }

    async function fetchMovies() {
      setLoading(true);
      try {
        const movies = await searchMovie(filter);
        setMovies(movies.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [filter, queryValue]);

  const handleFormSubmit = searchString => {
    setFilter(searchString);
    setSearchParams(`query=${searchString}`);
  };

  return (
    <div>
      {loading && 'Loading...'}
      {error && <p>An error occured: {error.message}</p>}
      <SearchForm onSubmit={handleFormSubmit} />
      {movies && (
        <div className={s.container}>
          <ul className={s.list}>
            {movies.map(({ title, poster_path, id }) => (
              <li className={s.item} key={id}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: location }}
                  className={s.link}
                >
                  <img
                    className={s.image}
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/w300${poster_path}`
                        : noImage
                    }
                    alt={title}
                  />
                  <p className={s.title}>{title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
