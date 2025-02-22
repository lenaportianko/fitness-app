import { createAction, props } from "@ngrx/store";
import { User } from "../../core/models/user.model";

export const set = createAction("[User] Set", props<{ data: User }>());
export const reset = createAction("[User] Reset");