export type Favorite = {
  id: string;
  title: string;
  type: string;
  price: number;
  city: {
    name: string;
  };
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
};