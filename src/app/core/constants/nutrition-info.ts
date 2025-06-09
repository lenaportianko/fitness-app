import { CourceType } from "../models/cource-type.enum";
import { NutritionInfo } from "../models/nutrition-info.type";

export const nutritionInfo: NutritionInfo[] = [
    {
        courceType: CourceType.Breakfast,
        recommendedСalorie: 400,
        actualCalorie: 0,
        dishes: []
    },
    {
        courceType: CourceType.Snack1,
        recommendedСalorie: 200,
        actualCalorie: 0,
        dishes: []
    },
    {
        courceType: CourceType.Lunch,
        recommendedСalorie: 450,
        actualCalorie: 0,
        dishes: []
    },
    {
        courceType: CourceType.Snack2,
        recommendedСalorie: 200,
        actualCalorie: 0,
        dishes: []
    },
    {
        courceType: CourceType.Dinner,
        recommendedСalorie: 450,
        actualCalorie: 0,
        dishes: []
    }
];