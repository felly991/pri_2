import React from "react";
import { Favorite } from "../../types/favorite";

interface FavoritesCardProps {
  favorites: Favorite[];
}

const FavoritesCard: React.FC<FavoritesCardProps> = ({ favorites }) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{favorites[0]?.city.name}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">
        {favorites.map((favorite) => (
          <article key={favorite.id} className="favorites__card place-card">

            {favorite.isPremium && (
              <div className="place-card__mark">
                <span>Premium</span>
              </div>
            )}

            <div className="favorites__image-wrapper place-card__image-wrapper">
              <a href="#">
                <img
                  className="place-card__image"
                  src={favorite.previewImage}
                  width="150"
                  height="110"
                  alt="Place image"
                />
              </a>
            </div>

            <div className="favorites__card-info place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">
                    &euro;{favorite.price}
                  </b>
                  <span className="place-card__price-text">/&nbsp;night</span>
                </div>

                <button
                  className={`place-card__bookmark-button ${
                    favorite.isFavorite
                      ? "place-card__bookmark-button--active"
                      : ""
                  } button`}
                  type="button"
                >
                  <svg
                    className="place-card__bookmark-icon"
                    width="18"
                    height="19"
                  >
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">
                    {favorite.isFavorite ? "In bookmarks" : "To bookmarks"}
                  </span>
                </button>
              </div>

              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span
                    style={{ width: `${(favorite.rating / 5) * 100}%` }}
                  ></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>

              <h2 className="place-card__name">
                <a href="#">{favorite.title}</a>
              </h2>

              <p className="place-card__type">{favorite.type}</p>
            </div>
          </article>
        ))}
      </div>
    </li>
  );
};

export default FavoritesCard;
