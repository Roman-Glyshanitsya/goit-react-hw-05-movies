import PropTypes from 'prop-types';
import s from './Cast.module.css';

export default function Cast({ cast }) {
  return (
    <div>
      <h3>Cast</h3>
      <ul className={s.list}>
        {cast
          .map(({ id, profile_path, name }) => (
            <li key={id} className={s.item}>
              <img
                src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                alt={name}
                width="100px"
              />
              {name}
            </li>
          ))
          .slice(0, 10)}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profile_path: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
};
