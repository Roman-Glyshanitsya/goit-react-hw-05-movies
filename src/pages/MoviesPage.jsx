import { useState, useEffect } from 'react';
import { useLocation, Link, useSearchParams} from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm'
import { searchMovie } from '../services/moviesApi.js'

export default function MoviesView() {

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();
    const queryValue = searchParams.get('query');

    const [filter, setFilter] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if(!filter) {
            if(queryValue){
                setFilter(queryValue)
            }
            return;
        }

        async function fetchMovies() {
            setLoading(true);
            try {
                const movies = await searchMovie(filter);
                setMovies(movies.results)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchMovies();

      }, [filter, queryValue]);

    const handleFormSubmit = (searchString) => {
        setFilter(searchString)
        setSearchParams(`query=${searchString}`);
    }

    return(
        <div>
            {loading && 'Loading...'}
            {error && <p>An error occured: {error.message}</p>}
            <SearchForm onSubmit={handleFormSubmit}/>
            {movies && 
                <ul>
                    {movies.map(movie => <li key={movie.id}><Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link></li>)}
                </ul>
            }
        </div>
    ) 
}