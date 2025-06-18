import PropTypes from 'prop-types';

export default function Reviews({ reviews }) {
  return (
    <div>
      <h3>Review</h3>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <p>
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
