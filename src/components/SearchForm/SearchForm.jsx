import { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import s from './SearchForm.module.css';
import PropTypes from 'prop-types';

export default function MovieSearchForm({ onSubmit }) {
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');
    const [searchMovie, setSearchMovie] = useState(query ?? '');

    const handleChange = event => {
        setSearchMovie(event.currentTarget.value.toLowerCase());
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (searchMovie.trim() === '') {
            toast.error('Enter something for search');
            return;
        }

        setSearchParams({query: searchMovie})
    }

    return(
        <form className={s.searchForm}>
            <input
                type="text"
                value={searchMovie}
                name="query"
                autoComplete="off"
                autoFocus
                placeholder="Search movie"
                className={s.searchFormInput}
                onChange={handleChange}> 
            </input>
            <button className={s.searchFormBtn} type="submit" onClick={handleSubmit}>Search</button>
        </form>
    )
}

MovieSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};