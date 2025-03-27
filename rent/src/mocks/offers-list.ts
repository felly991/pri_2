import { OffersList } from "../types/offer";

export const offersList: OffersList[] = [
  {
    id: "bbb06a0e-3f92-446d-9a68-cb64d5d38-e2b",
    title: "Wood and stone place",
    type: "apartment",
    price: 370,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.9,
    previewImage: "/img/apartment-01.jpg",
  },
  {
    id: "a1c3d4f5-6b7e-8c9d-a0b1-c2d3e4f5g6h",
    title: "Modern City Apartment",
    type: "apartment",
    price: 250,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7,
    previewImage: "/img/apartment-02.jpg",
  },
  {
    id: "b2d4e5f6-7c8d-9e0f-a1b2-c3d4e5f6g7h",
    title: "Cozy Riverside Cottage",
    type: "house",
    price: 420,
    city: {
      name: "Amsterdam",
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: false,
    rating: 4.8,
    previewImage: "/img/apartment-03.jpg",
  },
];
