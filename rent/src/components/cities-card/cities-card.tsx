import { JSX } from "react";

function CitiesCard(): JSX.Element {
  return (
    <article className="cities__card place-card">
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src="img/apartment-01.jpg"
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="placeCardInfo">
        <div className="placeCardWrapper">
          <div className="placeCardPrice">
            <b className="placeCardPrice-value">&euro;120</b>
            <span className="placeCardPrice-text">&#47;&nbsp;night</span>
          </div>
          <button className="placeCardBookmarkBtn button" type="button">
            <svg className="placeCardBookmarkIcon" width="18" height="19">
              <use href="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="placeCardRating rating">
          <div className="placeCardStarsRating">
            <span style={{ width: "80%" }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default CitiesCard;
