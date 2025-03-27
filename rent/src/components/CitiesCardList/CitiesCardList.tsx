import { OffersList } from "../../types/offer";
import CitiesCard from "../cities-card/cities-card";

type CitiesCardListProps = {
  offersList: OffersList[];
  onListItemHover: (offerId: string) => void;
};

function CitiesCardList({ offersList, onListItemHover }: CitiesCardListProps) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offersList.map((item) => (
        <CitiesCard
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          price={item.price}
          isPremium={item.isPremium}
          previewImage={item.previewImage}
          rating={item.rating}
          onHover={onListItemHover}
        />
      ))}
    </div>
  );
}

export default CitiesCardList;
