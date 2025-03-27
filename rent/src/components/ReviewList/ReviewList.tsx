import { JSX } from "react";
import { Review } from "../../types/review";
import ReviewItem from "../ReviewItem/ReviewItem";
import CommentSubmissionForm from "../comment-submission-form/comment-submission-form";

type ReviewListProps = {
  reviews: Review[];
};

const ReviewList = ({ reviews }: ReviewListProps): JSX.Element => (
  <section className="offer__reviews reviews">
    <h2 className="reviews__title">
      Reviews · <span className="reviews__amount">{reviews.length}</span>
    </h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </ul>
    <CommentSubmissionForm />
  </section>
);

export default ReviewList;