import { JSX } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainPage from "../../pages/main-page/main-page";
import FavoritesPage from "../../pages/favorites-page/favorites-page";
import ErrorPage from "../../pages/page-404/page-404";
import OfferPage from "../../pages/offer-page/offer-page";
import LoginPage from "../../pages/login-page/login-page";

import { AppRoute, AuthorizationStatus } from "../../const/const";
import PrivateRoute from "../private-route/private-route";

import { FullOffer, OffersList } from "../../types/offer";
import { Favorite } from "../../types/favorite";
import { Review } from "../../types/review";
import reviews from "../../mocks/reviews";

type AppMainPageProps = {
  rentalOffersCount: number;
  offers: FullOffer[];
  offersList: OffersList[];
  favorites: Favorite[];
  reviews: Review[];
};

function App({
  rentalOffersCount,
  offers,
  offersList,
  favorites,
}: AppMainPageProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <MainPage
              rentalOffersCount={rentalOffersCount}
              offersList={offersList}
            />
          }
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <FavoritesPage favorites={favorites} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
        <Route
          path={`${AppRoute.Offer}/:id`}
          element={<OfferPage offers={offers} reviews={reviews} neighbourhoodPlaces={offersList}/>}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
