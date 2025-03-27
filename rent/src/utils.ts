import { CityOffer, OffersList } from "./types/offer";
import { SortOffer } from "./types/sort";

function getCity(
  citiesName: string,
  objects: CityOffer[]
): CityOffer | undefined {
  return objects.find((e) => e.name === citiesName);
}

function getOffersByCity(
  offers: OffersList[],
  selectedCity: CityOffer
): OffersList[] {
  return offers.filter((offer) => offer.city.name === selectedCity.name);
}

function sortOffersByType(offers: OffersList[], type: SortOffer): OffersList[] {
  switch (type) {
    case "PriceToHigh":
      return offers.sort((a, b) => a.price - b.price);
    case "PriceToLow":
      return offers.sort((a, b) => b.price - a.price);
    case "TopRated":
      return offers.sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
}

export { getCity, getOffersByCity, sortOffersByType };
