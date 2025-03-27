import React from 'react';
import { useState } from 'react';

type FormData = {
  rating: number | null;
  comment: string;
};

const CommentSubmissionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    rating: null,
    comment: '',
  });

  const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      rating: Number(event.target.value),
    });
    console.log(event.target.value) //Лог про проверки сохранения состояния, потом уберу
  };

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      comment: event.target.value,
    });
    console.log(event.target.value) //Лог про проверки сохранения состояния, потом уберу
  };

  const isFormValid = () => {
    return (
      formData.rating !== null &&
      formData.comment.trim().length >= 50
    );
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((value) => (
          <React.Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              checked={formData.rating === value}
              onChange={handleRatingChange}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={getRatingTitle(value)}
            >
              <svg className="form__star-image" width="37" height="33">
                <use href="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid()}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

const getRatingTitle = (value: number): string => {
  switch (value) {
    case 5: return 'perfect';
    case 4: return 'good';
    case 3: return 'not bad';
    case 2: return 'badly';
    case 1: return 'terribly';
    default: return '';
  }
};

export default CommentSubmissionForm;