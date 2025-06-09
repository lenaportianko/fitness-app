import { createReducer, on } from "@ngrx/store";
import { reset, set } from "./nutrition.action";
import { NutritionInfo } from "../../core/models/nutrition-info.type";

export const initialState: NutritionInfo[] = [];

export const nutritionReducer = createReducer(
    initialState,
    on(set, (_, { data }) => ({ ...data })),
    on(reset, () => ([]))
);