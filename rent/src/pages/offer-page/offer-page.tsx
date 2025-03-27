import { JSX } from "react";
import { Logo } from "../../components/logo/logo";
import { FullOffer, OffersList } from "../../types/offer";
import { useParams } from "react-router-dom";
import ErrorPage from "../page-404/page-404";
import ReviewList from "../../components/ReviewList/ReviewList";
import { Review } from "../../types/review";
import CitiesCardList from "../../components/CitiesCardList/CitiesCardList";
import Map from "../../components/Map/Map";

type OfferProps = {
  offers: FullOffer[];
  reviews: Review[];
  neighbourhoodPlaces: OffersList[];
};

function OfferPage({
  offers,
  reviews,
  neighbourhoodPlaces,
}: OfferProps): JSX.Element {
  const params = useParams();
  const offer = offers.find((item) => item.id === params.id);
  if (!offer) {
    return <ErrorPage />;
  }
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a
                    className="header__nav-link header__nav-link--profile"
                    href="#"
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      Myemail@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offers">
          <div key={offer.id} className="offer">
            <div className="offer__gallery-container container">
              <div className="offer__gallery">
                {offer.images.map((item) => (
                  <div key={item} className="offer__image-wrapper">
                    <img
                      className="offer__image"
                      src={item}
                      alt={`Photo of ${offer.title}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="offer__container container">
              <div className="offer__wrapper">
                {offer.isPremium && (
                  <div className="offer__mark">
                    <span>Premium</span>
                  </div>
                )}

                <div className="offer__name-wrapper">
                  <h1 className="offer__name">{offer.title}</h1>
                  <button
                    className="offer__bookmark-button button"
                    type="button"
                    aria-label="Bookmark"
                  >
                    <svg
                      className="offer__bookmark-icon"
                      width="31"
                      height="33"
                    >
                      <use href="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>

                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span
                      style={{ width: `${Math.round(offer.rating) * 20}%` }}
                    ></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">
                    {offer.rating.toFixed(1)}
                  </span>
                </div>

                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">
                    {offer.type.charAt(0).toUpperCase() + offer.type.slice(1)}
                  </li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {offer.bedrooms} Bedroom{offer.bedrooms > 1 ? "s" : ""}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    Max {offer.maxAdults} adult
                    {offer.maxAdults > 1 ? "s" : ""}
                  </li>
                </ul>

                <div className="offer__price">
                  <b className="offer__price-value">&euro; {offer.price}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>

                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {offer.goods.map((good) => (
                      <li key={good} className="offer__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div
                      className={`offer__avatar-wrapper ${
                        offer.host.isPro ? "offer__avatar-wrapper--pro" : ""
                      } user__avatar-wrapper`}
                    >
                      <img
                        className="offer__avatar user__avatar"
                        src={offer.host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{offer.host.name}</span>
                    {offer.host.isPro && (
                      <span className="offer__user-status">Pro</span>
                    )}
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">{offer.description}</p>
                  </div>
                </div>
                <ReviewList reviews={reviews} />
              </div>
            </div>
            <section className="container">
              <Map offers={neighbourhoodPlaces} mapStyle="offer__map map" />
            </section>
          </div>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <CitiesCardList offersList={neighbourhoodPlaces} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
