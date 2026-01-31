import { CourceType } from "../models/cource-type.enum";
import { NutritionInfo } from "../models/nutrition-info.type";

export const nutritionInfo: NutritionInfo[] = [
    {
        courceType: CourceType.Breakfast,
        recommendedCalorie: 400,
        actualCalorie: 0,
        dishes: []
    },
    {
        courceType: CourceType.Snack1,
        recommendedCalorie: 200,
        actualCalorie: 0,
        dishes: []
    },
    {
        courceType: CourceType.Lunch,
        recommendedCalorie: 450,
        actualCalorie: 0,
        dishes: []
    },
    {
        courceType: CourceType.Snack2,
        recommendedCalorie: 200,
        actualCalorie: 0,
        dishes: []
    },
    {
        courceType: CourceType.Dinner,
        recommendedCalorie: 450,
        actualCalorie: 0,
        dishes: []
    }
];