import { Favorite } from "../types/favorite";

export const favorites: Favorite[] = [
  {
    id: "1",
    title: "Nice, cozy, warm big bed apartment",
    type: "Apartment",
    price: 180,
    city: {
      name: "Amsterdam",
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    previewImage: "img/apartment-small-03.jpg",
  },
  {
    id: "2",
    title: "Wood and stone place",
    type: "Private room",
    price: 80,
    city: {
      name: "Amsterdam",
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: "img/room-small.jpg",
  },
  {
    id: "2",
    title: "Wood and stone place",
    type: "Private room",
    price: 80,
    city: {
      name: "Paris",
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: "img/apartment-small-03.jpg",
  },
];
