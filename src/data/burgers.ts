import { BurgerItem } from '../types/burger';
import chickenImg from '../assets/images/hero_chicken_fries_transparent.png';
import smashImg from '../assets/images/burger_smash_cheddar_transparent.png';
import bbqImg from '../assets/images/burger_bbq_bacon_transparent.png';
import truffleImg from '../assets/images/burger_truffle_swiss_transparent.png';

export const BURGERS_DATA: BurgerItem[] = [
  {
    id: 'fried-chicken',
    number: '01 / 04',
    titleLine1: 'FRIED CHICKEN',
    titleLine2: 'BURGER',
    microTitle: "CRAFT'S SPECIAL FRIED CHICKEN BURGERS",
    tagline: 'CRISPY SPECIAL FRIED CHICKEN BURGERS',
    description: 'Crispy fried chicken breast, melted yellow cheddar, fresh lettuce, and house mayo on toasted sesame brioche, served with wire basket of golden fries.',
    price: 14.50,
    calories: '680 kcal',
    image: chickenImg,
    alt: 'Crispy Fried Chicken Burger with rustic golden fries in basket',
    ingredients: ['Crispy Buttermilk Poultry', 'Aged Cheddar', 'Ruffled Curly Lettuce', 'Special Smoked Aioli', 'Brioche Bun', 'Golden Skin-on Fries'],
  },
  {
    id: 'double-smash',
    number: '02 / 04',
    titleLine1: 'DOUBLE SMASH',
    titleLine2: 'CHEESEBURGER',
    microTitle: "CRAFT'S SPECIAL DOUBLE SMASH ANGUS",
    tagline: 'LACY CRUST SMASH BURGERS & MELTED CHEDDAR',
    description: 'Twin 100% Angus smash patties with crisp caramelized lacy edges, double American cheese, dill pickles, and secret burger sauce.',
    price: 15.90,
    calories: '740 kcal',
    image: smashImg,
    alt: 'Gourmet Double Smash Cheeseburger with bacon and melted cheddar',
    ingredients: ['100% Angus Chuck', 'Double American Cheese', 'Applewood Bacon', 'Tangy Pickles', 'Signature Sauce'],
  },
  {
    id: 'bbq-smokehouse',
    number: '03 / 04',
    titleLine1: 'SMOKEHOUSE',
    titleLine2: 'BBQ BACON',
    microTitle: "CRAFT'S SPECIAL WOOD-SMOKED BBQ BACON",
    tagline: 'HICKORY SMOKED BACON & BOURBON GLAZE',
    description: 'Flame-grilled prime beef patty, thick cut smoked bacon, smoked gouda, crispy batter-fried onion strings, and sticky bourbon BBQ glaze.',
    price: 16.80,
    calories: '820 kcal',
    image: bbqImg,
    alt: 'Thick BBQ Bacon Burger with onion rings and smoked gouda',
    ingredients: ['Charred Prime Beef', 'Hickory Smoked Bacon', 'Smoked Gouda', 'Beer Battered Onions', 'Bourbon BBQ Glaze'],
  },
  {
    id: 'truffle-swiss',
    number: '04 / 04',
    titleLine1: 'BLACK TRUFFLE',
    titleLine2: 'SWISS BURGER',
    microTitle: "CRAFT'S SPECIAL BLACK TRUFFLE & PORTOBELLO",
    tagline: 'EARTHY PORTOBELLO & VELVETY EMMENTAL',
    description: 'Prime beef blend topped with sautéed portobello mushrooms, melted imported Swiss cheese, fresh wild arugula, and black truffle aioli.',
    price: 17.50,
    calories: '690 kcal',
    image: truffleImg,
    alt: 'Black Truffle Swiss Burger with sauteed mushrooms',
    ingredients: ['Prime Beef', 'Sautéed Portobello', 'Melted Swiss Emmental', 'Wild Arugula', 'Black Truffle Aioli'],
  },
];
