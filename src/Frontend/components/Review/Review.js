import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { name, desc } = review;
    return (
        <div className="col-sm-12 col-md-4 col-lg-4 single-review">
            <div className="card text-center p-5">
                <div className="review-wrapper">
                    <h3>{review.review}</h3>
                    <span>{name}</span>
                    <p className="mt-3">“{desc}”</p>
                </div>
            </div>
        </div>
    );
};

export default Review;