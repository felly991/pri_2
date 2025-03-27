import React from "react";
import FavoritesCard from "../favorite-card/favorite-card";
import { Favorite } from "../../types/favorite";

type FavoriteListProps = {
  favorites: Favorite[];
};

const FavoriteList: React.FC<FavoriteListProps> = ({ favorites }) => {
  const groupedOffers = favorites.reduce((acc, favorite) => {
    if (!acc[favorite.city.name]) {
      acc[favorite.city.name] = [];
    }
    acc[favorite.city.name].push(favorite);
    return acc;
  }, {} as Record<string, typeof favorites>);

  return (
    <ul className="favorites__list">
      {Object.entries(groupedOffers).map(([city, favorites]) => (
        <FavoritesCard key={city} favorites={favorites} />
      ))}
    </ul>
  );
};

export default FavoriteList;
