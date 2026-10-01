export interface BurgerItem {
  id: string;
  number: string;
  titleLine1: string;
  titleLine2: string;
  microTitle: string;
  tagline: string;
  description: string;
  price: number;
  calories: string;
  image: string;
  alt: string;
  ingredients: string[];
}

export interface CartItem {
  burger: BurgerItem;
  quantity: number;
  addedAt: number;
}
