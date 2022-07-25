import { useState, useEffect } from "react"
import { useParams, Link, Outlet, useLocation} from 'react-router-dom';
import { movieDetails } from '../services/moviesApi.js'
import MovieDetails from 'components/MovieDetails/MovieDetails'

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
                setMovie(movie)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        fetchMovie();

      }, [movieId]);

    const path = location?.state?.from ?? '/';

    return(
        <div>
            {loading && 'Loading...'}
            {error && <p>An error occured: {error.message}</p>}
            <Link to={path}><button>Go back</button></Link>
            {movie && <MovieDetails movie={movie} />}
            <h4>Additional information</h4>
            <ul>
                <li><Link to={`/movies/${movieId}/cast`} state={{ from: path }}>Cast</Link></li>
                <li><Link to={`/movies/${movieId}/reviews`} state={{ from: path }}>Reviews</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}