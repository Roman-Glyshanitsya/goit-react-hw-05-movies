import PropTypes from 'prop-types';

export default function Reviews({reviews}) {
    return(
        <div>
            <ul>
                {reviews.map(review => 
                    <li key={review.id}>
                        <p>Author: <b>{review.author}</b></p>
                        {review.content}
                    </li>
                )};
            </ul>
        </div>
    )
}

Reviews.propTypes = {
    reviews: PropTypes.array.isRequired
}