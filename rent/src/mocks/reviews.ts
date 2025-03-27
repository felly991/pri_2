import { Review } from "../types/review";

const reviews: Review[] = [
  {
    id: "111",
    comment:
      "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.",
    date: "2023-06-29-29T21:00:00.465Z",
    rating: 4,
    user: {
      name: "Alex",
      avatarUrl: "/img/avatar-max.jpg",
      isPro: true,
    },
  },
  {
    id: "222",
    comment:
      "A quiet cozy and picturesque that hides behind a a river by",
    date: "2023-06-29-29T21:00:00.465Z",
    rating: 4,
    user: {
      name: "Alex",
      avatarUrl: "/img/avatar-angelina.jpg",
      isPro: true,
    },
  },
];

export default reviews;
