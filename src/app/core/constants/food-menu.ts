import { MealInfo } from "../models/meal-info.type";

export const snackMenu: MealInfo[] = [
    { name: 'Banana', calorie: 100, canScale: true },
    { name: 'Apple', calorie: 80, canScale: true },
    { name: 'Biscuits', calorie: 130, canScale: true },
    { name: 'Mixed nuts', calorie: 180, canScale: true }
];

export const generalMenu: MealInfo[] = [
    { name: 'Toast with butter', calorie: 180, canScale: true },
    { name: 'Oatmeal with berries', calorie: 250, canScale: false },
    { name: 'Scrambled eggs', calorie: 200, canScale: false },
    { name: 'Banana pancakes', calorie: 280, canScale: false },
    { name: 'Chicken breast with rice', calorie: 400, canScale: false },
    { name: 'Vegetable soup', calorie: 150, canScale: false },
    { name: 'Pasta with tomato sauce', calorie: 350, canScale: false},
    { name: 'Tuna salad', calorie: 300, canScale: false },
    { name: 'Grilled chicken with vegetables', calorie: 350, canScale: false },
    { name: 'Baked salmon with broccoli', calorie: 400, canScale: false },
    { name: 'Boiled eggs and avocado toast', calorie: 320, canScale: false },
    { name: 'Cottage cheese', calorie: 230, canScale: false },
    { name: 'Mixed Vegetables', calorie: 180, canScale: false }
];