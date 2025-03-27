import { JSX, useState } from "react";
import { Logo } from "../../components/logo/logo";
import CitiesCardList from "../../components/CitiesCardList/CitiesCardList";
import { OffersList } from "../../types/offer";
import Map from "../../components/Map/Map";
import { useAppSelector } from "../../hooks";
import { getOffersByCity, sortOffersByType } from "../../utils";
import CitiesList from "../../components/CitiesList/CitiesList";
import { SortOffer } from "../../types/sort";
import SortOptions from "../../components/sort-options/sort-options";

function MainPage(): JSX.Element {
  const selectedCity = useAppSelector((state) => state.city);
  const offersList = useAppSelector((state) => state.offers);
  const selectedCityOffers = selectedCity
    ? getOffersByCity(offersList, selectedCity)
    : [];
  const rentalOffersCount = selectedCityOffers?.length;

  const [selectedOffer, setSelectedOffer] = useState<OffersList | undefined>(
    undefined
  );

  const handleListItemHover = (offerId: string) => {
    const currentOffer = offersList.find((offer) => offer.id === offerId);

    setSelectedOffer(currentOffer);
  };

  const [activeSort, setActiveSort] = useState<SortOffer>("Popular");
  return (
    <div className="page page--gray page--main">
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList selectedCity={selectedCity}></CitiesList>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {rentalOffersCount} places to stay in {selectedCity?.name}
              </b>
              <SortOptions
                activeSorting={activeSort}
                onChange={(newSorting) => setActiveSort(newSorting)}
              ></SortOptions>
              <CitiesCardList
                offersList={sortOffersByType(selectedCityOffers, activeSort)}
                onListItemHover={handleListItemHover}
              />
            </section>
            <div className="cities__right-section">
              <Map offers={offersList} mapStyle={"cities__map map"} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
