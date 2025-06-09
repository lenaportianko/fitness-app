import { createAction, props } from "@ngrx/store";
import { ActivityInfo } from "../../core/models/activity-info.type";

export const load = createAction("[Activity] Load");
export const set = createAction("[Activity] Set", props<{ data: Record<string, ActivityInfo[]> }>());
export const reset = createAction("[Activity] Reset");