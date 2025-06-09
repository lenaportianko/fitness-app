import { CourceType } from "./cource-type.enum";

export type NutritionInfo = {
    courceType: CourceType;
    recommendedСalorie: number;
    actualCalorie: number;
    dishes: string[];
}