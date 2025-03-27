import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import { Setting } from "./const/const";
import offers from "./mocks/offers";
import { offersList } from "./mocks/offers-list";
import { favorites } from "./mocks/favorites";
import "leaflet/dist/leaflet.css";
import reviews from "./mocks/reviews";
import { Provider } from "react-redux";
import { store } from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App
        rentalOffersCount={Setting.rentOffersCount}
        offers={offers}
        offersList={offersList}
        favorites={favorites}
        reviews={reviews}
      />
    </Provider>
  </StrictMode>
);
