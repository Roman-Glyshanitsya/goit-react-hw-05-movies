import PropTypes from 'prop-types';
import s from './Reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div>
      <h3 className={s.title}>Review</h3>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li className={s.item} key={id}>
            <p className={s.author}>
              Author: <b>{author}</b>
            </p>
            {content}
          </li>
        ))}
        ;
      </ul>
    </div>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ).isRequired,
};
