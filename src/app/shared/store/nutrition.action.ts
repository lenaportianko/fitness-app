import { createAction, props } from "@ngrx/store";
import { NutritionInfo } from "../../core/models/nutrition-info.type";

export const load = createAction("[Nutrition] Load");
export const set = createAction("[Nutrition] Set", props<{ data: NutritionInfo[] }>());
export const reset = createAction("[Nutrition] Reset");