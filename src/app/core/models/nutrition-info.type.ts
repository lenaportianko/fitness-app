import { CourceType } from "./cource-type.enum";
import { MealInfo } from "./meal-info.type";

export type NutritionInfo = {
    courceType: CourceType;
    recommendedСalorie: number;
    actualCalorie: number;
    dishes: MealInfo[];
}